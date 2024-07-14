import { clamp, offtop } from './utils'
import type { Options } from '$types'

const intersected = new Set<HTMLElement>()

export default function (node: HTMLElement, options?: Partial<Options>) {
    let root: (Window & HTMLElement) | (Window & typeof globalThis) = options?.root || window

    intersected.add(node)

    update(options)

    function update(options?: Partial<Options>) {
        root = options?.root || window
        root.addEventListener('scroll', aops)
    }

    function aops() {
        const { innerHeight: wH, innerWidth: wW, offsetHeight: rH, offsetWidth: rW, scrollY, scrollTop } = root

        for (const [_, target] of intersected.entries()) {
            const { offsetLeft: targetLeft, offsetHeight, offsetWidth } = target

            const top = offtop(root, target)
            const anchor = 1 - (options?.anchor || 0)
            const offset = options?.offset || 0

            const rootHeight = (wH || rH) * anchor
            const rootWidth = (wW || rW) - targetLeft

            const targetHeight = offsetHeight * anchor
            const targetWidth = offsetWidth * offset

            const scroll = (scrollY || scrollTop) - (top - rootHeight + targetHeight)
            const position = clamp(targetWidth, scroll, rootWidth - (offset ? targetWidth : offsetWidth))
            // if (target.id === 'test') console.log(root, target, top)
            target.dispatchEvent(new CustomEvent('scroll', { detail: position }))
            target.dataset.aops = (position || scroll) > targetWidth ? 'v' : 'h'
        }
    }

    // const observer = new IntersectionObserver((entries) => {
    //     entries.forEach(entry => {
    //         const target = entry.target as HTMLElement
    //         if (entry.isIntersecting) {
    //             console.log(entry)
    //             // intersected.add(target)
    //         } else {
    //             // intersected.delete(target)
    //         }
    //         target.style.background = intersected.has(target) ? 'yellow' : ''
    //     });
    // }, {
    //     ...options,
    //     threshold: options.threshold || 1.0,
    //     // root: options.root || element.offsetParent,
    //     // rootMargin: options.rootMargin || element.offsetHeight + 'px',
    // });

    // observer.observe(element);

    return {
        update,
        destroy() {
            intersected.delete(node)
            root.removeEventListener('scroll', aops)
            // observer.disconnect();
        }
    }
}
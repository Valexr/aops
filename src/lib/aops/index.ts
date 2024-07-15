import { clamp, offtop } from './utils'
import type { Options } from '$types'

const intersected = new Set<HTMLElement>()

export default function (node: HTMLElement, options?: Partial<Options>) {
    let root: (Window & HTMLElement) | (Window & typeof globalThis) = options?.root || window
    let anchor = 1 - (options?.anchor || 0)
    let offset = options?.offset || 0

    update(options)

    function update(options?: Partial<Options>) {
        if (options) {
            root = options?.root || window
            anchor = 1 - (options?.anchor || 0)
            offset = options?.offset || 0

            intersected.add(node)
            root.addEventListener('scroll', aops)
        }
    }

    function aops() {
        const { innerHeight: wH, innerWidth: wW, offsetHeight: rH, offsetWidth: rW, scrollY, scrollTop } = root

        for (const [_, target] of intersected.entries()) {
            const { offsetLeft: targetLeft, offsetHeight, offsetWidth } = target

            const offTop = offtop(root, target)

            const rootHeight = (wH || rH) * anchor
            const rootWidth = (wW || rW) - targetLeft

            const targetHeight = offsetHeight * anchor
            const targetWidth = offsetWidth * offset

            const scroll = (scrollY || scrollTop) - (offTop - rootHeight + targetHeight)
            const position = clamp(targetWidth, scroll, rootWidth + (targetWidth || -offsetWidth))

            target.dispatchEvent(new CustomEvent('scroll', { detail: position }))
            target.dataset.aops = position > targetWidth ? 'v' : 'h'
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
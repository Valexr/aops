import { clamp } from './utils'
import type { Options } from '$types'

const intersected = new Set<HTMLElement>()

export default function (node: HTMLElement, options?: Partial<Options>) {
    intersected.add(node)

    window.addEventListener('scroll', () => requestAnimationFrame(aops))

    function aops() {

        for (const [_, target] of intersected.entries()) {
            const { innerHeight, innerWidth, scrollY } = window
            const { offsetTop: targetTop, offsetLeft: targetLeft, offsetHeight, offsetWidth } = target
            const { offsetTop: parentTop } = target.offsetParent as HTMLElement

            const top = targetTop || parentTop
            const anchor = 1 - (options?.anchor || 0)
            const offset = options?.offset || 0

            const windowHeight = innerHeight * anchor
            const windowWidth = innerWidth - targetLeft

            const targetHeight = offsetHeight * anchor
            const targetWidth = offsetWidth * offset

            const scroll = Math.trunc(scrollY - (top - windowHeight + targetHeight))
            const position = clamp(targetWidth, scroll, windowWidth - (offset ? targetWidth : offsetWidth))

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
        destroy() {
            intersected.delete(node)
            window.removeEventListener('scroll', aops)
            // observer.disconnect();
        }
    }
}
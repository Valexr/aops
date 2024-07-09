import { clamp } from './utils'
import type { Options } from '$types'

const intersected = new Set<HTMLElement>()

export default function (target: HTMLElement, options: Partial<Options>) {
    intersected.add(target)

    window.onscroll = (e) => {

        for (const [_, target] of intersected.entries()) {

            const { innerHeight, scrollY } = window
            const { offsetTop: targetTop, offsetHeight, offsetWidth: targetWidth, offsetParent } = target
            const { offsetTop: parentTop, offsetWidth: parentWidth } = offsetParent as HTMLElement

            const top = targetTop || parentTop
            const anchor = 1 - (options.anchor || 0)

            const targetHeight = offsetHeight * anchor
            const windowHeight = innerHeight * anchor

            const scroll = Math.trunc(scrollY - (top - windowHeight + targetHeight))
            const pos = clamp(-targetWidth, scroll, parentWidth)

            target.dispatchEvent(new CustomEvent('scroll', { detail: pos }))
            target.dataset.aops = pos >= 0 ? 'v' : 'h'
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

    // return {
    //     destroy() {
    //         observer.disconnect();
    //     }
    // }
}
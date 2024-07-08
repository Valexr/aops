import { clamp, offset } from './utils'
import type { Options } from '$types'

const intersected = new Set<HTMLElement>()

export default function (element: HTMLElement, options: Partial<Options>) {
    intersected.add(element)
    window.onscroll = (e) => {

        for (const [key, entry] of intersected.entries()) {
            const anchored = window.scrollY * (options.anchor || 0)
            const { offsetTop: parentTop, offsetWidth: parentOffset } = entry.offsetParent as HTMLElement
            const top = (entry.offsetTop || parentTop) * (options.anchor || 0)
            const height = entry.offsetHeight
            const pos = window.scrollY - top + height
            const detail = clamp(0, Math.trunc(pos), window.innerWidth)

            console.log(entry.id, detail, anchored)

            entry.dispatchEvent(new CustomEvent('scroll', { detail }))
            entry.dataset.aos = detail >= anchored ? 'v' : 'h'
        }
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const target = entry.target as HTMLElement
            if (entry.isIntersecting) {
                console.log(entry)
                // intersected.add(target)
            } else {
                // intersected.delete(target)
            }
            target.style.background = intersected.has(target) ? 'yellow' : ''
        });
    }, {
        ...options,
        threshold: options.threshold || 1.0,
        // root: options.root || element.offsetParent,
        // rootMargin: options.rootMargin || element.offsetHeight + 'px',
    });

    observer.observe(element);

    return {
        destroy() {
            observer.disconnect();
        }
    }
}
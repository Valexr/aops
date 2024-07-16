import { clamp, offtop } from './utils'
import type { Options } from '$types'

export default function (target: HTMLElement, options?: Partial<Options>) {
    let root = options?.root || window
    let anchor = 1
    let offset = 1

    update(options)

    function update(options?: Partial<Options>) {
        root = options?.root || window
        anchor = 1 - (options?.anchor || 0)
        offset = 1 - (options?.offset || 0)
        root.addEventListener('scroll', aops)
    }

    function destroy() {
        root.removeEventListener('scroll', aops)
    }

    function aops() {
        const { innerHeight: wH, innerWidth: wW, offsetHeight: rH, offsetWidth: rW, scrollY, scrollTop } = root
        const { offsetLeft: targetLeft, offsetHeight, offsetWidth } = target

        const targetTop = offtop(root, target)

        const rootHeight = (wH || rH) * anchor
        const rootWidth = (wW || rW) - targetLeft

        const targetHeight = offsetHeight * anchor
        const targetWidth = offsetWidth * offset

        const scroll = (scrollY || scrollTop) - (targetTop - rootHeight + targetHeight)
        const position = clamp(-targetWidth, scroll, rootWidth - (offsetWidth - targetWidth))

        target.dispatchEvent(new CustomEvent('scroll', { detail: position }))
        target.dataset.aops = position > 0 ? 'v' : 'h'
    }

    return { update, destroy }
}
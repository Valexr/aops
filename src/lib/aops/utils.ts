export function clamp(mn: number, val: number, mx: number) {
    return Math.min(mx, Math.max(mn, val));
}

export function offset(root: HTMLElement, target: HTMLElement, anchor?: string) {
    var offset = 0 - root.offsetTop;
    if (anchor) {
        const height = target.getBoundingClientRect().height;
        if (anchor === "center") offset += height / 2;
        else offset += height;
    }
    var parent = target;
    while (parent && parent !== root) {
        offset += parent.offsetTop;
        parent = parent.offsetParent as HTMLElement;
    }
    return offset;
};
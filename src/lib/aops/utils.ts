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

export function lerp(start: number, end: number, t: number): number {
    return start * (1 - t) + end * t;
}

export function debounce(cb: (...args: any) => void, ms = 0, timer?: NodeJS.Timeout) {
    return (...args: any) => {
        clearTimeout(timer);
        timer = setTimeout(cb, ms, ...args);
    }
}
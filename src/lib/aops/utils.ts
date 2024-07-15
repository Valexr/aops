export function clamp(mn: number, val: number, mx: number) {
    return Math.min(mx, Math.max(mn, val));
}

export function offtop(root: Window | HTMLElement, parent: HTMLElement, offset = 0) {
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

export function throttle(fn: (args: any) => void, ms = 50, th: boolean | number = true): (args: any) => void {
    let tm = 0;
    return th
        ? (args) => {
            const now = performance.now();
            if (now - tm >= ms) {
                fn(args);
                tm = now;
            }
        } : (args) => fn(args);
}
export default function (target: HTMLElement, options?: Partial<Options>): void;

type Options = {
    // root: Element | null;
    // rootMargin: string | null;
    // threshold: number;
    anchor: number;
    offset: number;
    // animation: string;
    // duration: number;
    // delay: number;
    // easing: string;
} & IntersectionObserverInit;

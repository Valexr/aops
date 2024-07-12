export type Name = string
export type Repository = {
    type: string
    url: string
}

export type Options = {
    root: Window & HTMLElement | null,
    rootMargin: string | null,
    threshold: number,
    anchor: number,
    offset: number,
    animation: string,
    duration: number,
    delay: number,
    easing: string
} 
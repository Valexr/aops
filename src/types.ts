export type Name = string
export type Repository = {
    type: string
    url: string
}

export type Options = {
    root: Element | null,
    rootMargin: string | null,
    threshold: number,
    anchor: number
} & IntersectionObserverInit
interface IntersectionObserverEntry {
    readonly time: number;
    readonly intersectionRatio: number;
    readonly target: Element;
    readonly rootBounds: ClientRect | DOMRect;
    readonly boundingClientRect: ClientRect | DOMRect;
    readonly intersectionRect: ClientRect | DOMRect;
}

interface IntersectionObserverInit {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number [];
}



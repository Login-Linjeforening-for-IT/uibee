export default function useVisibility<T extends HTMLElement>(onVisible: () => void, rootMargin?: string): {
    ref: import("react").RefObject<T | null>;
    isVisible: boolean;
};

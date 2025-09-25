declare module 'login-linjeforeningen-for-it/hooks' {
    export default function useVisibility<T extends HTMLElement>(
        onVisible: () => void,
        rootMargin?: string
    ): { ref: RefObject<T>; isVisible: boolean }

    export function useDarkMode(): boolean
}

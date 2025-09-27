/* eslint-disable @stylistic/semi */
declare module 'uibee/hooks' {
    export default function useVisibility<T extends HTMLElement>(
        onVisible: () => void,
        rootMargin?: string
    ): { ref: RefObject<T>; isVisible: boolean };

    export default function useDarkMode(): boolean;
}

export default function useClickOutside<T extends HTMLElement>(handler: (event: MouseEvent | TouchEvent) => void): import("react").RefObject<T | null>;

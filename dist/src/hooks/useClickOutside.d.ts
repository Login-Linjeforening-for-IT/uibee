import { RefObject } from 'react';
export default function useClickOutside<T extends HTMLElement>(refOrCallback: RefObject<T | null> | (() => void), maybeCallback?: () => void): RefObject<T | null> | undefined;

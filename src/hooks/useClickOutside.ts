import { useEffect, useRef, RefObject } from 'react'

export default function useClickOutside<T extends HTMLElement>(
    refOrCallback: RefObject<T | null> | (() => void),
    maybeCallback?: () => void
) {
    let ref: RefObject<T | null>
    let callback: () => void

    if (typeof refOrCallback === 'function') {
        ref = useRef<T>(null)
        callback = refOrCallback
    } else {
        ref = refOrCallback
        callback = maybeCallback as () => void
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref && ref.current && !ref.current.contains(event.target as Node)) {
                callback()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref, callback])

    if (typeof refOrCallback === 'function') return ref
    return undefined
}

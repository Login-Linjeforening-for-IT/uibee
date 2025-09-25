import { useEffect, useRef, useState } from 'react'

export default function useVisibility<T extends HTMLElement>(
    onVisible: () => void,
    rootMargin: string = '200px'
) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<T | null>(null)

    useEffect(() => {
        if (typeof window === 'undefined') return

        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
        if (!isTouchDevice) return

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true)
                    onVisible()
                    observer.disconnect()
                }
            },
            { rootMargin }
        )

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [onVisible, rootMargin])

    return { ref, isVisible }
}

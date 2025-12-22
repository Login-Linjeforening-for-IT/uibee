'use client'

import { CircleAlert, CircleCheck, CircleX, Info } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'
import { ToastProps, ToastType, ToastObserverProps } from 'uibee/components'


const observers: ToastObserverProps[] = []

export function addToast(type: ToastType, title: string, description: string = '') {
    observers.forEach((observer) => observer({ title, description, type }))
}

export default function Toaster() {
    const [toasts, setToasts] = useState<Array<ToastProps & { remaining: number; created: number }>>([])
    const timers = useRef<{ [id: number]: NodeJS.Timeout }>({})
    const [isHovered, setIsHovered] = useState(false)
    const pauseTimes = useRef<{ [id: number]: number }>({})
    const mainToastRef = useRef<HTMLDivElement>(null)
    const [mainToastPosition, setMainToastPosition] = useState<{ top: number; right: number } | null>(null)

    useEffect(() => {
        const listener: ToastObserverProps = ({ type, title, description }) => {
            const id = Date.now()
            setToasts(prev => {
                const newToasts = prev.concat({ id, type, title, description, remaining: 3000, created: Date.now() }).slice(-3)
                return newToasts
            })
        }
        observers.push(listener)
        return () => {
            const idx = observers.indexOf(listener)
            if (idx > -1) observers.splice(idx, 1)
            Object.values(timers.current).forEach(clearTimeout)
        }
    }, [])

    useEffect(() => {
        if (isHovered) {
            toasts.forEach(toast => {
                if (timers.current[toast.id]) {
                    clearTimeout(timers.current[toast.id])
                    const elapsed = Date.now() - toast.created
                    pauseTimes.current[toast.id] = toast.remaining - elapsed > 0 ? toast.remaining - elapsed : 0
                    setToasts(prev => prev.map(t => t.id === toast.id ? { ...t, remaining: pauseTimes.current[toast.id] } : t))
                    delete timers.current[toast.id]
                }
            })
        } else {
            toasts.forEach(toast => {
                if (!timers.current[toast.id] && toast.remaining > 0) {
                    timers.current[toast.id] = setTimeout(() => {
                        setToasts(prev => prev.filter(t => t.id !== toast.id))
                        delete timers.current[toast.id]
                    }, toast.remaining)
                    setToasts(prev => prev.map(t => t.id === toast.id ? { ...t, created: Date.now() } : t))
                }
            })
        }
    }, [isHovered, toasts])

    // Track main toast position for stacking
    useEffect(() => {
        if (mainToastRef.current && toasts.length > 0) {
            const rect = mainToastRef.current.getBoundingClientRect()
            setMainToastPosition({
                top: rect.top,
                right: window.innerWidth - rect.right
            })
        }
    }, [toasts, isHovered])

    const bgClasses = ['bg-login-600', 'bg-login-700', 'bg-login-800']
    return (
        <div
            className={`fixed bottom-4 right-4 z-50 flex ${isHovered ? 'flex-col-reverse items-end gap-2' : 'flex-col items-end'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {toasts.slice().reverse().map((toast, idx) => (
                <div
                    key={`${toast.id}-${idx}`}
                    ref={idx === 0 ? mainToastRef : null}
                    className={
                        'p-2 rounded-lg text-login-50 animate-fade-in-down transition-all w-sm flex items-center gap-2 ' +
                        (bgClasses[idx] || bgClasses[2])
                    }
                    style={isHovered ? {} : idx === 0 ? {
                        zIndex: 100,
                    } : {
                        position: 'fixed',
                        top: mainToastPosition ? `${mainToastPosition.top - idx * 8}px` : 'auto',
                        zIndex: 100 - idx,
                        transform: `scale(${1 - idx * 0.05})`,
                    }}
                >
                    <span className='shrink-0 w-10 h-10 flex items-center justify-center'>
                        <ToastIcon type={toast.type} />
                    </span>
                    <div className='pr-1 pb-1'>
                        <span className='font-bold'>{toast.title}</span>
                        {(idx === 0 || isHovered) &&
                            <span className='text-sm line-clamp-3'>{toast.description}</span>
                        }
                    </div>
                </div>
            ))}
        </div>
    )
}

function ToastIcon({ type }: { type?: ToastType }) {
    switch (type) {
        case 'success':
            return <CircleCheck className='text-green-300/70' />
        case 'warning':
            return <CircleAlert className='text-yellow-300/70' />
        case 'error':
            return <CircleX className='text-red-300/70' />
        case 'info':
            return <Info className='text-blue-300/70' />
    }
}

'use client'

import React, { createContext, useContext, SVGProps, useEffect } from 'react'
import { createPortal } from 'react-dom'

const MenuContext = createContext<{ onClose?: () => void }>({})

export default function Menu({ ref, children, anchor, onClose }: {
    ref: React.RefObject<HTMLDivElement | null>
    children: React.ReactNode
    anchor: { top: number; right: number }
    onClose?: () => void
}) {
    return createPortal(
        <div
            ref={ref}
            style={{ top: anchor.top, right: anchor.right }}
            className='fixed bg-login-500 border border-login-600 rounded-lg shadow-lg z-9999 w-44'
        >
            <MenuContext.Provider value={{ onClose }}>
                {children}
            </MenuContext.Provider>
        </div>,
        document.body
    )
}

export function MenuButton({
    icon,
    text,
    hotKey,
    onClick,
    className,
}: {
    icon: React.ReactNode
    text: string
    hotKey?: string
    onClick: () => void
    className?: string
}
){
    const { onClose } = useContext(MenuContext)

    useEffect(() => {
        if (!hotKey) return

        function handleKeyDown(e: KeyboardEvent) {
            if (e.key.toLowerCase() === hotKey!.toLowerCase()) {
                e.preventDefault()
                onClick()
                onClose?.()
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [hotKey, onClick, onClose])

    return (
        <button
            onClick={() => {
                onClick()
                onClose?.()
            }}
            className={`flex items-center justify-between w-full px-3 py-2 text-sm hover:bg-login-600 cursor-pointer
                ${className || ''}
            `}
        >
            <div className='flex items-center'>
                {React.cloneElement(icon as React.ReactElement<SVGProps<SVGSVGElement>>, { className: 'w-4 h-4 mr-2' })}
                {text}
            </div>
            <span className='text-xs opacity-50 font-mono'>{hotKey}</span>
        </button>
    )
}

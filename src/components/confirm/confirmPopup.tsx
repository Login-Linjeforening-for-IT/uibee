'use client'

import { TriangleAlert } from 'lucide-react'

type ConfirmPopupProps = {
    isOpen: boolean
    header: string
    description?: string
    confirmText?: string
    cancelText?: string
    onConfirm: () => void
    onCancel: () => void
    variant?: 'danger' | 'warning' | 'default'
}

export default function ConfirmPopup({
    isOpen,
    header,
    description,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    onConfirm,
    onCancel,
    variant = 'default',
}: ConfirmPopupProps) {
    if (!isOpen) return null

    const confirmBg =
        variant === 'danger'
            ? 'bg-red-700/80 outline-red-700 hover:bg-red-700'
            : variant === 'warning'
                ? 'bg-yellow-600/80 outline-yellow-600 hover:bg-yellow-600'
                : 'bg-login/70 outline-login hover:bg-login/90'

    return (
        <div
            role='dialog'
            aria-modal='true'
            aria-labelledby='confirm-popup-header'
            className='fixed inset-0 z-50 flex items-center justify-center'
            onClick={onCancel}
        >
            <div className='absolute inset-0 bg-black/60 backdrop-blur-sm' />

            <div
                className='
                    relative z-10 w-full max-w-md mx-4
                    bg-login-800 border border-login-500/50 rounded-xl
                    shadow-2xl p-6 flex flex-col gap-4
                '
                onClick={(e) => e.stopPropagation()}
            >
                <div className='flex items-center gap-3'>
                    {variant !== 'default' && (
                        <TriangleAlert
                            className={`w-6 h-6 shrink-0 ${variant === 'danger' ? 'stroke-red-400' : 'stroke-yellow-400'}`}
                        />
                    )}
                    <h2
                        id='confirm-popup-header'
                        className='text-login-50 text-lg font-bold leading-snug'
                    >
                        {header}
                    </h2>
                </div>

                {description && (
                    <p className='text-login-100 text-sm leading-relaxed'>
                        {description}
                    </p>
                )}

                <div className='flex justify-end gap-3 mt-1'>
                    <button
                        type='button'
                        onClick={onCancel}
                        className='
                            cursor-pointer px-4 py-1.5 rounded-md text-sm font-medium
                            bg-login-500/60 text-login-50 outline outline-login-500/60
                            hover:bg-login-500/90 focus:outline-none select-none
                            transition-colors duration-150
                        '
                    >
                        {cancelText}
                    </button>

                    <button
                        type='button'
                        onClick={onConfirm}
                        className={`
                            cursor-pointer px-4 py-1.5 rounded-md text-sm font-bold
                            text-white outline focus:outline-none select-none
                            transition-colors duration-150
                            ${confirmBg}
                        `}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    )
}

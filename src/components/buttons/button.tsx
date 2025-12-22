import Link from 'next/link'
import type { JSX } from 'react'

type ButtonProps = {
    text: string
    className?: string
    icon?: string | JSX.Element
    path?: string
    type?: 'button' | 'submit' | 'reset'
    color?: 'primary' | 'secondary'
    onClick?: (_: object) => void
    disabled?: boolean
}

export default function Button({
    text,
    className,
    icon,
    path,
    color,
    type,
    onClick,
    disabled
}: ButtonProps) {
    const bg = color === 'secondary'
        ? 'bg-login-600/70 outline-login-600 hover:bg-login-600/90'
        : 'bg-login/70 outline-login hover:bg-login/90'

    if (!path) {
        return (
            <button
                type={type || 'button'}
                disabled={disabled}
                onClick={onClick}
                aria-label={text}
                className={`
                    ${bg} cursor-pointer px-4 rounded-md h-6 flex
                    justify-evenly items-center gap-2 select-none
                    focus:outline-none border-0 outline w-fit ${className}
                `}
            >
                <h1 className='font-bold'>{icon ? icon : ''}</h1>
                <h1>{text}</h1>
            </button>
        )
    }

    if (disabled) {
        return (
            <div
                className={`
                    ${bg} cursor-not-allowed px-4 rounded-md h-6 flex
                    justify-evenly items-center gap-2 select-none
                `}
            >
                <h1 className='font-bold'>{icon ? `${icon}` : ''}</h1>
                <h1 className=''>{text}</h1>
            </div>
        )
    }

    return (
        <Link
            href={path}
            className={`
                ${bg} cursor-pointer px-4 rounded-md h-6 flex
                justify-evenly items-center gap-2 select-none
            `}
        >
            <h1 className='font-bold'>{icon ? `${icon}` : ''}</h1>
            <h1 className=''>{text}</h1>
        </Link>
    )
}

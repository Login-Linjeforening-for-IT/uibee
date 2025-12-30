import { type ChangeEvent } from 'react'
import { SelectionWrapper } from './shared'

export type RadioProps = {
    label?: string
    name: string
    value: string | number
    checked?: boolean
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    className?: string
    disabled?: boolean
    error?: string
    info?: string
    required?: boolean
}

export default function Radio({
    label,
    name,
    value,
    checked,
    onChange,
    className,
    disabled,
    error,
    info,
    required,
}: RadioProps) {
    const id = `${name}-${value}`
    return (
        <SelectionWrapper
            label={label}
            name={id}
            required={required}
            info={info}
            error={error}
            className={className}
            disabled={disabled}
        >
            <div className='relative flex items-center'>
                <input
                    id={id}
                    name={name}
                    type='radio'
                    value={value}
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                    required={required}
                    className={`
                        peer appearance-none h-5 w-5 rounded-full border border-login-500 bg-login-500/50
                        checked:bg-login checked:border-login
                        focus:outline-none focus:ring-2 focus:ring-login/50
                        disabled:opacity-50 disabled:cursor-not-allowed
                        cursor-pointer transition-all duration-200
                        ${error ? 'border-red-500' : ''}
                    `}
                />
                <div className={`
                    absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    w-2 h-2 rounded-full bg-white pointer-events-none opacity-0
                    peer-checked:opacity-100 transition-opacity duration-200
                `}></div>
            </div>
        </SelectionWrapper>
    )
}

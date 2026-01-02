import { type ChangeEvent } from 'react'
import { SelectionWrapper } from './shared'

export type SwitchProps = {
    label?: string
    name: string
    checked?: boolean
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    className?: string
    disabled?: boolean
    error?: string
    info?: string
    required?: boolean
}

export default function Switch({
    label,
    name,
    checked,
    onChange,
    className,
    disabled,
    error,
    info,
    required,
}: SwitchProps) {
    return (
        <SelectionWrapper
            label={label}
            name={name}
            required={required}
            info={info}
            error={error}
            className={className}
            disabled={disabled}
        >
            <label className='relative inline-flex items-center cursor-pointer h-10.5'>
                <input
                    type='checkbox'
                    id={name}
                    name={name}
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                    required={required}
                    className='sr-only peer'
                />
                <div className={`
                    w-11 h-6 bg-login-500/50 rounded-full peer 
                    peer-checked:after:translate-x-full peer-checked:after:border-white 
                    after:content-[''] after:absolute after:top-2.75 after:left-0.5 
                    after:bg-white after:border-gray-300 after:border after:rounded-full 
                    after:h-5 after:w-5 after:transition-all peer-checked:bg-login
                    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
                    ${error ? 'ring-1 ring-red-500' : ''}
                `}></div>
            </label>
        </SelectionWrapper>
    )
}

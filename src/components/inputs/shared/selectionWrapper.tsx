import { ReactNode } from 'react'
import InputLabel from './inputLabel'
import InputInfo from './inputInfo'
import InputError from './inputError'

interface SelectionWrapperProps {
    label?: string
    name: string
    required?: boolean
    info?: string
    error?: string
    children: ReactNode
    className?: string
    disabled?: boolean
}

export default function SelectionWrapper({
    label,
    name,
    required,
    info,
    error,
    children,
    className,
    disabled,
}: SelectionWrapperProps) {
    return (
        <div className={`flex flex-col gap-1 ${className || ''}`}>
            <div className='flex items-center justify-between mb-1'>
                <div className='flex items-center gap-2'>
                    {children}
                    {label && (
                        <InputLabel
                            label={label}
                            name={name}
                            required={required}
                            disabled={disabled}
                            className='select-none cursor-pointer'
                        />
                    )}
                </div>
                {info && <InputInfo info={info} />}
            </div>
            <InputError error={error} />
        </div>
    )
}

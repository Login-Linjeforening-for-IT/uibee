import { ReactNode } from 'react'
import InputLabel from './inputLabel'
import InputInfo from './inputInfo'
import InputError from './inputError'

interface FieldWrapperProps {
    label?: string
    name: string
    required?: boolean
    info?: string
    error?: string
    children: ReactNode
    className?: string
}

export default function FieldWrapper({
    label,
    name,
    required,
    info,
    error,
    children,
    className,
}: FieldWrapperProps) {
    return (
        <div className={`flex flex-col gap-1 w-full relative ${className || ''}`}>
            {(label || info) && (
                <div className='flex items-center justify-between mb-1'>
                    {label && (
                        <InputLabel
                            label={label}
                            name={name}
                            required={required}
                            className='ml-1'
                        />
                    )}
                    {info && <InputInfo info={info} />}
                </div>
            )}
            {children}
            <InputError error={error} id={`${name}-error`} />
        </div>
    )
}

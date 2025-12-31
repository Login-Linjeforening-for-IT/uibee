import { type ChangeEvent, type JSX, useRef, useState } from 'react'
import { Calendar, Clock } from 'lucide-react'
import { FieldWrapper } from './shared'
import DateTimePickerPopup from './shared/dateTimePickerPopup'
import useClickOutside from '../../hooks/useClickOutside'

export type InputProps = {
    label?: string
    name: string
    type?: React.HTMLInputTypeAttribute
    placeholder?: string
    value?: string | number
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    error?: string
    className?: string
    disabled?: boolean
    required?: boolean
    icon?: JSX.Element
    info?: string
}

export default function Input({
    label,
    name,
    type = 'text',
    placeholder,
    value,
    onChange,
    error,
    className,
    disabled,
    required,
    icon,
    info,
}: InputProps) {
    const localRef = useRef<HTMLInputElement>(null)
    const [isOpen, setIsOpen] = useState(false)

    const containerRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false))

    const isDateType = ['date', 'datetime-local', 'time'].includes(type as string)

    const handleIconClick = () => {
        if (isDateType && !disabled) {
            setIsOpen(!isOpen)
        } else if (localRef.current && !disabled) {
            localRef.current.focus()
        }
    }

    const handleDateChange = (date: Date) => {
        if (!onChange) return

        const pad = (n: number) => n.toString().padStart(2, '0')
        const yyyy = date.getFullYear()
        const MM = pad(date.getMonth() + 1)
        const dd = pad(date.getDate())
        const hh = pad(date.getHours())
        const mm = pad(date.getMinutes())

        let newValue = ''
        if (type === 'date') newValue = `${yyyy}-${MM}-${dd}`
        else if (type === 'time') newValue = `${hh}:${mm}`
        else if (type === 'datetime-local') newValue = `${yyyy}-${MM}-${dd}T${hh}:${mm}`

        const event = {
            target: {
                name,
                value: newValue,
                type,
            },
        } as unknown as ChangeEvent<HTMLInputElement>
        onChange(event)
    }

    let displayIcon = icon
    if (!displayIcon && isDateType) {
        if (type === 'time') {
            displayIcon = <Clock className='w-4 h-4' />
        } else {
            displayIcon = <Calendar className='w-4 h-4' />
        }
    }

    const getDateValue = () => {
        if (!value) return null
        if (type === 'time') {
            const date = new Date(`2000-01-01T${value}`)
            return isNaN(date.getTime()) ? null : date
        }
        const date = new Date(value as string)
        return isNaN(date.getTime()) ? null : date
    }

    return (
        <FieldWrapper
            label={label}
            name={name}
            required={required}
            info={info}
            error={error}
            className={className}
        >
            <div className='relative flex items-center' ref={containerRef}>
                {displayIcon && (
                    <div
                        className={`
                            absolute left-3 text-login-200
                            ${isDateType && !disabled ? 'cursor-pointer hover:text-login-text' : 'pointer-events-none'}
                        `}
                        onClick={handleIconClick}
                    >
                        {displayIcon}
                    </div>
                )}
                <input
                    ref={localRef}
                    id={name}
                    name={name}
                    type={isDateType ? 'text' : type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    required={required}
                    readOnly={isDateType}
                    onClick={() => isDateType && !disabled && setIsOpen(true)}
                    title={label}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${name}-error` : undefined}
                    className={`
                        w-full rounded-md bg-login-500/50 border border-login-500 
                        text-login-text placeholder-login-200
                        focus:outline-none focus:border-login focus:ring-1 focus:ring-login
                        disabled:opacity-50 disabled:cursor-not-allowed
                        py-2 ${displayIcon ? 'pl-10 pr-3' : 'px-3'}
                        transition-all duration-200
                        input-reset
                        ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
                        ${isDateType && !disabled ? 'cursor-pointer' : ''}
                    `}
                />
                {isOpen && isDateType && !disabled && (
                    <DateTimePickerPopup
                        value={getDateValue()}
                        onChange={handleDateChange}
                        type={type as 'date' | 'time' | 'datetime-local'}
                        onClose={() => setIsOpen(false)}
                    />
                )}
            </div>
        </FieldWrapper>
    )
}

'use client'

import { useRef, useState } from 'react'
import ToolTip from './tooltip'
import Label from './label'
import EraseButton from './erase'

type Option = {
    value: string | number;
    label: string;
    image?: string
}


type SelectProps = {
    name: string
    label: string
    value: string | number
    setValue: (_: string | number) => void
    options: Option[]
    className?: string
    tooltip?: string
    required?: boolean
    children?: React.ReactNode
    color?: string
}

type SelectedOptionProps = {
    value: string | number
    selectedOption: Option | undefined
}

export default function Select({
    name,
    label,
    value,
    options,
    className,
    tooltip,
    required,
    children,
    setValue,
    color
}: SelectProps) {
    const [hasBlured, setHasBlured] = useState(false)
    const selectRef = useRef<HTMLSelectElement | null>(null)
    const selectedOption = options.find((o) => o.value === value)

    function handleChoose(value: string | number) {
        setValue(value)
        setHasBlured(true)
        if (selectRef.current) {
            selectRef.current.value = String(value)
            selectRef.current.blur()
        }
    }

    return (
        <div className={`w-full ${className}`}>
            <div className='relative flex items-center'>
                <select
                    ref={selectRef}
                    name={name}
                    className={
                        'peer cursor-pointer block px-2.5 pb-2.5 pt-4 ' +
                        'w-full text-sm rounded-lg border-[0.10rem] ' +
                        'appearance-none border-login-200 focus:ring-0 ' +
                        'focus:outline-none focus:border-login-50 ' +
                        `${color ? color : 'bg-login-800'}`
                    }
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                        setHasBlured(true)
                    }}
                    onBlur={() => setHasBlured(true)}
                    onMouseDown={(e) => {
                        e.preventDefault()
                        selectRef.current?.focus()
                    }}
                    required={required}
                >
                    <option value='' hidden />
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>

                <Label
                    label={label}
                    value={value}
                    required={required}
                    color={color}
                    showRequired={required && !value && hasBlured}
                />

                {value && (
                    <EraseButton
                        setData={(v: string) => {
                            setValue(v)
                            setHasBlured(true)
                        }}
                    />
                )}
                {!value && tooltip && <ToolTip info={tooltip} />}

                <SelectContent
                    options={options}
                    value={value}
                    selectedOption={selectedOption}
                    handleChoose={handleChoose}
                    color={color}
                />
            </div>
            {children}
        </div>
    )
}

function SelectContent({
    options,
    value,
    selectedOption,
    handleChoose,
    color
}: {
    options: Option[]
    value: string | number
    selectedOption: Option | undefined
    handleChoose: (value: string | number) => void
    color?: string
}) {
    return (
        <div
            className={
                'hidden peer-focus:block absolute left-0 ' +
                'right-0 top-full mt-1 z-50'
            }
        >
            <div
                className={
                    `${color ? color : 'bg-login-800'}` + ' border-[0.10rem] border-login-200 ' +
                    'rounded-lg shadow-lg p-0 max-h-72 overflow-hidden'
                }
            >
                <div className='max-h-72 overflow-auto'>
                    <SelectedOption
                        value={value}
                        selectedOption={selectedOption}
                    />
                    <div className='p-2'>
                        {options
                            .filter((o) => o.value !== value)
                            .map((opt) => (
                                <button
                                    key={opt.value}
                                    type='button'
                                    className={
                                        'cursor-pointer w-full flex ' +
                                        'items-center gap-3 px-2 py-2 ' +
                                        'text-sm hover:bg-surface ' +
                                        'rounded hover:bg-login-600'
                                    }
                                    onMouseDown={(e) => {
                                        e.preventDefault()
                                        handleChoose(opt.value)
                                    }}
                                >
                                    <span className='text-left'>
                                        {opt.label}
                                    </span>
                                </button>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function SelectedOption({ value, selectedOption }: SelectedOptionProps) {
    if (!value) {
        return <></>
    }

    return (
        <div
            className={
                'sticky top-0 bg-surface px-2 py-2 z-10 border-b ' +
                'border-login-200 bg-login-600'
            }
        >
            <div className='flex items-center gap-3'>
                <span className='font-medium text-left'>
                    {selectedOption?.label}
                </span>
            </div>
        </div>
    )
}

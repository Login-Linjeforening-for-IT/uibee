import { type ChangeEvent, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Eye, Pencil } from 'lucide-react'
import { FieldWrapper } from './shared'

export type TextareaProps = {
    label?: string
    name: string
    placeholder?: string
    type?: 'markdown' | 'json' | 'text'
    value?: string
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
    error?: string
    className?: string
    disabled?: boolean
    required?: boolean
    rows?: number
    info?: string
}

function isValidJson(str: string): string | null {
    try {
        JSON.parse(str)
        return null
    } catch(error) {
        return (error as Error).message
    }
}

export default function Textarea({
    label,
    name,
    placeholder,
    value,
    onChange,
    error,
    className,
    disabled,
    required,
    rows = 4,
    info,
    type = 'text',
}: TextareaProps) {
    const [preview, setPreview] = useState(false)

    const jsonError = type === 'json' && value ? isValidJson(value) : undefined
    const displayError = jsonError || error

    return (
        <FieldWrapper
            label={label}
            name={name}
            required={required}
            info={info}
            error={displayError}
            className={className}
        >
            <div className='relative'>
                {type === 'markdown' && (
                    <div className='absolute right-2 top-2 z-10 flex gap-2'>
                        <button
                            type='button'
                            onClick={() => setPreview(!preview)}
                            className='p-1 rounded hover:bg-login-500/50 text-login-text transition-colors'
                            title={preview ? 'Edit' : 'Preview'}
                        >
                            {preview ? <Pencil size={16} /> : <Eye size={16} />}
                        </button>
                    </div>
                )}

                {type === 'markdown' && preview ? (
                    <div
                        className={`
                        w-full rounded-md bg-login-500/50 border border-login-500 
                        text-login-text 
                        p-3
                        prose prose-invert prose-sm max-w-none overflow-y-auto
                        ${error ? 'border-red-500' : ''}
                    `}
                        style={{ minHeight: `${rows * 1.5}rem` }}
                    >
                        <ReactMarkdown>{value || ''}</ReactMarkdown>
                    </div>
                ) : (
                    <textarea
                        id={name}
                        name={name}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        disabled={disabled}
                        required={required}
                        rows={rows}
                        title={label}
                        aria-invalid={!!error}
                        aria-describedby={error ? `${name}-error` : undefined}
                        className={`
                        w-full rounded-md bg-login-500/50 border border-login-500 
                        text-login-text placeholder-login-200
                        focus:outline-none focus:border-login focus:ring-1 focus:ring-login
                        disabled:opacity-50 disabled:cursor-not-allowed
                        p-3
                        transition-all duration-200
                        resize-y
                        ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
                    `}
                    />
                )}
            </div>
        </FieldWrapper>
    )
}

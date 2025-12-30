interface InputLabelProps {
    label: string
    name: string
    required?: boolean
    disabled?: boolean
    className?: string
}

export default function InputLabel({ label, name, required, disabled, className }: InputLabelProps) {
    return (
        <label
            htmlFor={name}
            className={`text-sm font-medium text-login-text ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className || ''}`}
            title={label}
        >
            {label} {required && <span className='text-red-500'>*</span>}
        </label>
    )
}

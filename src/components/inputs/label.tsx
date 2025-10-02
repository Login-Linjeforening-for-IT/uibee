type labelProps = {
    label: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any
    required?: boolean
    showRequired?: boolean
    className?: string
    color?: string
}

export default function Label({ label, value, required, showRequired, className, color }: labelProps) {
    return (
        <label
            className={
                'w-[calc(100%-10px)] truncate pointer-events-none absolute text-sm duration-300 transform z-10 ' +
                'peer-focus:px-2 peer-focus:top-2 origin-[0] px-2 pt-1 peer-focus:scale-75 peer-focus:-translate-y-5 start-2 ' +
                `${color ? color : 'bg-login-800'} ` +
                `${value ? '-translate-y-5 scale-75 top-2 w-fit '
                    : '-translate-y-1/2 scale-100 top-1/2 '
                    + 'peer-focus:w-fit '
                } ${showRequired ? 'text-red-500/50 ' : ''} 
                        ${!value &&
                    required ? 'group-[.submitPressed]:text-red-500/50 ' : ''}
                        ${required ? 'after:content-["_*"] ' : ''}
                        ${className}`
            }
        >
            {label}
        </label>
    )
}

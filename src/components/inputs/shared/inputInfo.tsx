import { CircleHelp } from 'lucide-react'

interface InputInfoProps {
    info: string
}

export default function InputInfo({ info }: InputInfoProps) {
    return (
        <div
            className='text-login-200 hover:text-login-text transition-colors'
            aria-label={info}
            title={info}
        >
            <CircleHelp className='w-4 h-4' />
        </div>
    )
}

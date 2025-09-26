import { LoginPageProps } from 'uibee/components'
import { LogIn } from 'lucide-react'
import Link from 'next/link'

export default function LoginPage({title, description, redirectURI, version}: LoginPageProps) {
    return (
        <main className='h-full grid place-items-center p-4 relative'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-2xl font-bold text-login text-center'>
                    {title}
                </h1>
                <p className='mt-2 text-foreground text-center font-semibold text-login-300'>{description}</p>
                <Link
                    href={redirectURI}
                    className='grid place-items-center'
                >
                    <div
                        className={
                            'flex align-middle gap-2 mt-2 rounded-lg ' +
                            'bg-login px-8 py-1  hover:bg-orange-500 mb-2'
                        }
                    >
                        Login
                        <LogIn className='w-5' />
                    </div>
                </Link>
            </div>
            {version}
        </main>
    )
}

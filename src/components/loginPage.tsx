import { LoginPageProps } from 'uibee/components'
import { LogIn } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../images/logo-tekst-white.svg'

export default function LoginPage({title, description, redirectURI, version, btg, handleSubmit}: LoginPageProps) {

    return (
        <main className='min-h-screen flex items-center justify-center bg-login-900 p-8'>
            <div
                className={
                    'flex flex-col justify-center items-center bg-login-600 px-4 py-12 rounded-xl w-full max-w-md gap-4 md:gap-6'
                }
            >
                <div className='relative aspect-[3/1] w-full'>
                    <Image
                        src={logo}
                        alt='Logo'
                        fill
                        className='object-contain sm:px-12'
                    />
                </div>
                <h1 className='text-3xl font-extrabold text-login text-center tracking-tight'>
                    {title} {btg ? ' - Break the Glass' : ''}
                </h1>
                {description && (
                    <p className='text-login-100 text-center font-medium text-lg mb-2 max-w-xs'>
                        {description}
                    </p>
                )}
                {btg ? (
                    <form
                        className='w-full flex flex-col gap-3 max-w-xs'
                        onSubmit={e => {
                            e.preventDefault()
                            handleSubmit?.(new FormData(e.currentTarget))
                            e.currentTarget.reset()
                        }}
                    >
                        <input
                            type='text'
                            name='name'
                            placeholder='Name'
                            className='py-2 px-3 rounded bg-login-900 text-login-50 font-medium focus:outline-none'
                            required
                        />
                        <input
                            type='password'
                            name='token'
                            placeholder='Token'
                            className='py-2 px-3 rounded bg-login-900 text-login-50 font-medium focus:outline-none'
                            required
                        />
                        <button
                            type='submit'
                            className={
                                'py-2 px-4 rounded-xl bg-login font-bold text-lg ' +
                                'hover:bg-login/80 text-login-50 transition-all duration-200 mt-2'
                            }
                        >
                            Login
                        </button>
                    </form>
                ) : (
                    <Link href={redirectURI} className='w-full flex justify-center'>
                        <button
                            className={
                                'flex items-center justify-center gap-2 w-full max-w-xs py-3 px-6 rounded-xl bg-login font-bold text-lg ' +
                                'hover:bg-login/80 text-login-50 transition-all duration-200 mb-2 mt-2'
                            }
                        >
                            Login
                            <LogIn className='w-6 h-6' />
                        </button>
                    </Link>
                )}
                <span className='text-login-100 text-sm mt-2'>v{version}</span>
            </div>
        </main>
    )
}

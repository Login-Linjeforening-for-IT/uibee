import Link from 'next/link'

type VersionTagProps = {
    version?: string
    url?: string
    className?: string
}

export default function VersionTag({version, url, className}: VersionTagProps) {
    if (!version) {
        return
    }

    const style =
        `w-fit bg-login-600 px-2 py-1 rounded-md text-white tracking-[0.05em] font-semibold text-lg ${className}`

    if (url) {
        return (
            <Link
                className={style}
                target='_blank'
                href={url}
            >
                v{version}
            </Link>
        )
    }

    return (
        <div className={style}>
            v{version}
        </div>
    )
}
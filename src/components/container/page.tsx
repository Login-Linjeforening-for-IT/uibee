type PageContainerProps = {
    title: string
    children: React.ReactNode
    className?: string
    innerClassName?: string
}

export default function PageContainer({ title, children, className, innerClassName }: PageContainerProps) {
    return (
        <div className={`w-full page-container ${className}`}>
            <div className={`flex flex-col col-start-3 ${innerClassName}`}>
                <h1 className='heading'>{title}</h1>
                {children}
            </div>
        </div>
    )
}

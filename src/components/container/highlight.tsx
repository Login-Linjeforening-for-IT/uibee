export default function Highlight({ children, className }: { children: React.ReactNode, className?: string }) {
    return <div className={`highlighted-section ${className ?? ''}`}>{children}</div>
}

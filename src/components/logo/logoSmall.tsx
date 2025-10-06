export default function LogoSmall() {
    const corner = 'fill-login'
    const letter = 'fill-foreground transition-all duration-1000'

    return (
        <svg className='block h-full' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path className='' d='M0 0H6.6667V28.3333H0V0Z'/>
            <path className={corner} d='M28.3333 0V6.6667H0V0H28.3333Z'/>
            <path className={corner} d='M100 0V6.6667H71.6667V0H100Z'/>
            <path className={corner} d='M100 28.3333H93.3333V0H100V28.3333Z'/>
            <path className={corner} d='M0 100V93.3333H28.3333V100H0Z'/>
            <path className={corner} d='M0 71.6667H6.6667V100H0V71.6667Z'/>
            <path className={corner} d='M100 100H93.3333V71.6667H100V100Z'/>
            <path className={corner} d='M71.6667 100V93.3333H100V100H71.6667Z'/>
            <path className={letter} d='M31.6667 18.3333H43.3334V81.6666H31.6667V18.3333Z'/>
            <path className={letter} d='M31.6667 70H68.3334V81.6667H31.6667V70Z'/>
        </svg>
    )
}

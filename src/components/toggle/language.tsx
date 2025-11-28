'use client'

import { useEffect, useState } from 'react'
import { getCookie, setCookie } from '@utils/cookies/cookies'
import { useRouter } from 'next/navigation'
import { Language } from 'uibee/components'
import { Globe } from 'lucide-react'

export default function LanguageToggle({language}: {language?: Language}) {
    const [lang, setLang] = useState<Language>(language || 'en')
    const [jump, setJump] = useState(false)

    const router = useRouter()

    useEffect(() => {
        const savedLang = getCookie('lang') as Language
        if (savedLang) {
            setLang(savedLang)
        }
    }, [])

    function handleClick() {
        const newLang = lang === 'no' ? 'en' : 'no'
        setCookie('lang', newLang)
        setLang(newLang)
        language = newLang
        setJump(true)
        setTimeout(() => setJump(false), 400)
        router.refresh()
    }

    const buttonClasses = `cursor-pointer p-2 leading-8 text-base w-[4.3rem] text-center rounded 
        bg-transparent border-none hover:bg-gray-400/10 flex flex-row items-center justify-center gap-1`

    return(
        <button
            value={lang}
            onClick={handleClick}
            className={buttonClasses}
        >
            <Globe className={`text-xl leading-8 -mt-0.5 ${jump ? 'animate-jump' : ''}`}/>
            {' ' + lang}
        </button>
    )
}

'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { getCookie, setCookie } from 'utilbee';
import { useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';
export default function LanguageToggle({ language }) {
    const [lang, setLang] = useState(language || 'en');
    const [jump, setJump] = useState(false);
    const router = useRouter();
    useEffect(() => {
        const savedLang = getCookie('lang');
        if (savedLang) {
            setLang(savedLang);
        }
    }, []);
    function handleClick() {
        const newLang = lang === 'no' ? 'en' : 'no';
        setCookie('lang', newLang);
        setLang(newLang);
        language = newLang;
        setJump(true);
        setTimeout(() => setJump(false), 400);
        router.refresh();
    }
    const buttonClasses = `cursor-pointer p-2 leading-8 text-base w-[4.3rem] text-center rounded 
        bg-transparent border-none hover:bg-gray-400/10 flex flex-row items-center justify-center gap-1`;
    return (_jsxs("button", { value: lang, onClick: handleClick, className: buttonClasses, children: [_jsx(Globe, { className: `text-xl leading-8 -mt-0.5 ${jump ? 'animate-jump' : ''}` }), ' ' + lang] }));
}

'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { getCookie, setCookie } from 'utilbee';
import { useRouter } from 'next/navigation';
export default function ThemeToggle({ className }) {
    const router = useRouter();
    const [theme, setTheme] = useState('dark');
    useEffect(() => {
        const savedTheme = getCookie('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
        document.documentElement.classList.remove('dark', 'light');
        document.documentElement.classList.add(theme);
    }, [theme]);
    function toggleTheme() {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setCookie('theme', newTheme);
        setTheme(newTheme);
        router.refresh();
    }
    return (_jsx("div", { className: `grid place-items-center justify-end rounded-md hover:bg-login-300/20 w-fit ${className}`, children: _jsxs("label", { className: 'cursor-pointer', children: [_jsx("input", { type: 'checkbox', checked: theme === 'light', onChange: toggleTheme, className: 'sr-only' }), _jsx(ThemeIcon, { theme: theme })] }) }));
}
function ThemeIcon({ theme }) {
    const sunrayClass = `fill-white transition-opacity duration-400 ${theme === 'light' ? 'opacity-0' : 'opacity-100'}`;
    return (_jsxs("svg", { className: 'h-12 p-3', viewBox: '0 0 100 100', xmlns: 'http://www.w3.org/2000/svg', children: [_jsx("defs", { children: _jsxs("mask", { id: 'theme-toggle_clip-path', children: [_jsx("rect", { x: '0', y: '0', width: '100', height: '100', fill: 'white' }), _jsx("circle", { className: `transition-transform duration-400 ${theme === 'dark' ? 'translate-x-8 -translate-y-4' : ''}`, cx: '68', cy: '40', r: '18' })] }) }), _jsx("circle", { className: `origin-center transition-all duration-400 ${theme === 'light'
                    ? 'scale-[1.9] fill-black'
                    : 'scale-100 fill-white'}`, mask: 'url(#theme-toggle_clip-path)', cx: '50', cy: '50', r: '23' }), _jsx("rect", { className: sunrayClass, x: '86', y: '47', width: '14', height: '6', rx: '3' }), _jsx("rect", { className: sunrayClass, y: '47', width: '14', height: '6', rx: '3' }), _jsx("rect", { className: sunrayClass, x: '47', y: '86', width: '6', height: '14', rx: '3' }), _jsx("rect", { className: sunrayClass, x: '75', y: '75', width: '6', height: '14', rx: '3', transform: 'rotate(-45 78 78)' }), _jsx("rect", { className: sunrayClass, x: '84.8995', y: '12', width: '6', height: '14', rx: '3', transform: 'rotate(45 84.8995 12)' }), _jsx("rect", { className: sunrayClass, x: '22.8995', y: '74', width: '6', height: '14', rx: '3', transform: 'rotate(45 22.8995 74)' }), _jsx("rect", { className: sunrayClass, x: '13', y: '16.2426', width: '6', height: '14', rx: '3', transform: 'rotate(-45 13 16.2426)' }), _jsx("rect", { className: sunrayClass, x: '47', y: '0', width: '6', height: '14', rx: '3' })] }));
}

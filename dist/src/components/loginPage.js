import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LogIn } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
export default function LoginPage({ title, description, redirectURI, version }) {
    return (_jsx("main", { className: 'min-h-screen flex items-center justify-center bg-login-900 p-8', children: _jsxs("div", { className: 'flex flex-col justify-center items-center bg-login-600 px-4 py-12 rounded-xl w-full max-w-md gap-4 md:gap-6', children: [_jsx("div", { className: 'relative aspect-[3/1] w-full', children: _jsx(Image, { src: '/images/logo-tekst-white.svg', alt: 'Logo', fill: true, className: 'object-contain sm:px-12' }) }), _jsx("h1", { className: 'text-3xl font-extrabold text-login text-center tracking-tight', children: title }), description && (_jsx("p", { className: 'text-login-100 text-center font-medium text-lg mb-2 max-w-xs', children: description })), _jsx(Link, { href: redirectURI, className: 'w-full flex justify-center', children: _jsxs("button", { className: 'flex items-center justify-center gap-2 w-full max-w-xs py-3 px-6 rounded-xl bg-login font-bold text-lg ' +
                            'hover:bg-login/80 transition-all duration-200 mb-2 mt-2', children: ["Login", _jsx(LogIn, { className: 'w-6 h-6' })] }) }), _jsxs("span", { className: 'text-login-100 text-sm mt-2', children: ["v", version] })] }) }));
}

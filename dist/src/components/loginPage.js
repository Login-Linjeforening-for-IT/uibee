import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LogIn } from 'lucide-react';
import Link from 'next/link';
export default function LoginPage({ title, description, redirectURI, version }) {
    return (_jsxs("main", { className: 'h-full grid place-items-center p-4 relative', children: [_jsxs("div", { className: 'flex flex-col justify-center items-center', children: [_jsx("h1", { className: 'text-2xl font-bold text-login text-center', children: title }), _jsx("p", { className: 'mt-2 text-foreground text-center font-semibold text-login-300', children: description }), _jsx(Link, { href: redirectURI, className: 'grid place-items-center', children: _jsxs("div", { className: 'flex align-middle gap-2 mt-2 rounded-lg ' +
                                'bg-login px-8 py-1  hover:bg-orange-500 mb-2', children: ["Login", _jsx(LogIn, { className: 'w-5' })] }) })] }), version] }));
}

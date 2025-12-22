import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from 'next/link';
export default function Button({ text, className, icon, path, color, onClick, disabled }) {
    const bg = color === 'secondary'
        ? 'bg-login-600/70 outline-login-600 hover:bg-login-600/90'
        : 'bg-login/70 outline-login hover:bg-login/90';
    if (!path) {
        return (_jsxs("button", { type: 'button', disabled: disabled, onClick: onClick, "aria-label": text, className: `
                    ${bg} cursor-pointer px-4 rounded-md h-6 flex
                    justify-evenly items-center gap-2 select-none
                    focus:outline-none border-0 outline w-fit ${className}
                `, children: [_jsx("h1", { className: 'font-bold', children: icon ? icon : '' }), _jsx("h1", { children: text })] }));
    }
    if (disabled) {
        return (_jsxs("div", { className: `
                    ${bg} cursor-not-allowed px-4 rounded-md h-6 flex
                    justify-evenly items-center gap-2 select-none
                `, children: [_jsx("h1", { className: 'font-bold', children: icon ? `${icon}` : '' }), _jsx("h1", { className: '', children: text })] }));
    }
    return (_jsxs(Link, { href: path, className: `
                ${bg} cursor-pointer px-4 rounded-md h-6 flex
                justify-evenly items-center gap-2 select-none
            `, children: [_jsx("h1", { className: 'font-bold', children: icon ? `${icon}` : '' }), _jsx("h1", { className: '', children: text })] }));
}

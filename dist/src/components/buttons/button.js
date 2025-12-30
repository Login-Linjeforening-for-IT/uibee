import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from 'next/link';
export default function Button({ text, className, icon, path, color, type, onClick, disabled }) {
    const bg = color === 'secondary'
        ? 'bg-login-500/70 outline-login-500 hover:bg-login-500/90'
        : 'bg-login/70 outline-login hover:bg-login/90';
    if (!path) {
        return (_jsxs("button", { type: type || 'button', disabled: disabled, onClick: onClick, "aria-label": text, className: `
                    ${bg} cursor-pointer px-4 rounded-md min-h-8 h-8 flex
                    justify-evenly items-center gap-2 select-none
                    focus:outline-none border-0 outline w-fit ${className}
                `, children: [_jsx("h1", { className: 'font-bold', children: icon || '' }), _jsx("h1", { className: 'w-fit', children: text })] }));
    }
    if (disabled) {
        return (_jsxs("div", { className: `
                    ${bg} cursor-not-allowed px-4 rounded-md h-8 flex
                    justify-evenly items-center gap-2 select-none w-fit
                `, children: [_jsx("h1", { className: 'font-bold', children: icon || '' }), _jsx("h1", { className: 'w-fit', children: text })] }));
    }
    return (_jsxs(Link, { href: path, className: `
                ${bg} cursor-pointer px-4 rounded-md h-8 flex
                justify-evenly items-center gap-2 select-none w-fit
            `, children: [_jsx("h1", { className: 'font-bold', children: icon || '' }), _jsx("h1", { className: 'w-fit', children: text })] }));
}

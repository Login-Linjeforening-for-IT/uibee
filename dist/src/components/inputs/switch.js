'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ToolTip from './tooltip';
export default function Switch({ name, label, value, className, tooltip, setValue }) {
    return (_jsxs("div", { className: `relative w-full flex items-center px-2.5 pb-2.5 pt-3 border-login-200 rounded-lg border-[0.10rem]
            bg-login-800 ${className}`, children: [_jsxs("label", { className: 'flex items-center cursor-pointer', children: [_jsx("input", { type: 'checkbox', name: name, className: 'sr-only', checked: value, onChange: (e) => setValue(e.target.checked) }), _jsx("div", { className: `w-10 h-6  rounded-full p-1 transition ${value ? 'bg-login-50' : 'bg-login-200'}`, children: _jsx("div", { className: `w-4 h-4 bg-login-800 rounded-full shadow-md transform transition ${value ? 'translate-x-4' : ''}` }) })] }), _jsx("span", { className: 'ml-3 text-sm', children: label }), tooltip && _jsx(ToolTip, { info: tooltip })] }));
}

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function InputLabel({ label, name, required, disabled, className }) {
    return (_jsxs("label", { htmlFor: name, className: `text-sm font-medium text-login-text ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className || ''}`, title: label, children: [label, " ", required && _jsx("span", { className: 'text-red-500', children: "*" })] }));
}

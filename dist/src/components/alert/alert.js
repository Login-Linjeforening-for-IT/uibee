import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CircleAlert, TriangleAlert, Info } from 'lucide-react';
export default function Alert({ children, variant = 'warning', className = '', }) {
    const color = variant === 'warning' ? 'bg-red-900'
        : variant === 'info' ? 'bg-blue-600' :
            'bg-gray-900';
    const Icon = variant === 'warning' ? CircleAlert
        : variant === 'info' ? Info :
            TriangleAlert;
    return (_jsxs("div", { className: `
                grid grid-cols-[min-content_auto] rounded-lg
                p-[0.5em_1em_0.5em_0.8em] items-start w-fit text-white
                ${color} ${className}
            `, children: [_jsx(Icon, { className: 'w-8 h-8 mr-[0.3rem] stroke-login-50' }), _jsx("div", { className: 'self-center', children: children })] }));
}

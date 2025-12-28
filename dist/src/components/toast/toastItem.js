import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AlertCircle, AlertTriangle, CheckCircle, Info, X } from 'lucide-react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
export default function Toast({ toast, index, expanded, onRemove, onHeight, offset, frontHeight }) {
    const [mounted, setMounted] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        requestAnimationFrame(() => setMounted(true));
    }, []);
    useLayoutEffect(() => {
        if (ref.current) {
            onHeight(toast.id, ref.current.offsetHeight);
        }
    }, [toast.message, onHeight, toast.id, expanded]);
    const isVisible = mounted && !toast.exiting;
    const isFront = index === 0;
    const collapsedOffset = index * 10 + (index > 0 ? (frontHeight - 60) : 0);
    return (_jsx("li", { ref: ref, className: 'absolute bottom-0 right-0 w-full transition-all duration-300 ease-out pointer-events-auto', style: {
            transform: isVisible
                ? `translateY(${expanded ? -offset : -collapsedOffset}px) scale(${expanded ? 1 : 1 - index * 0.05})`
                : 'translateY(20px) scale(0.9)',
            opacity: isVisible ? 1 : 0,
            zIndex: toast.id
        }, children: _jsxs("div", { className: 'flex items-center space-x-4 rounded-lg p-4 shadow-lg border-2 border-login-400 bg-login-700', children: [_jsx("div", { className: 'shrink-0', children: Icon(toast.type) }), _jsx("p", { className: `flex-1 text-sm font-semibold text-login-800 dark:text-login-100 min-w-0
                        ${!expanded && !isFront ? 'truncate' : ''}`, children: toast.message }), _jsx("button", { onClick: onRemove, className: 'hover:text-login-200 text-login-400', children: _jsx(X, { className: 'h-5 w-5' }) })] }) }));
}
function Icon(type) {
    switch (type) {
        case 'info':
            return _jsx(Info, { className: 'h-6 w-6 text-blue-500' });
        case 'success':
            return _jsx(CheckCircle, { className: 'h-6 w-6 text-green-500' });
        case 'warning':
            return _jsx(AlertTriangle, { className: 'h-6 w-6 text-yellow-500' });
        case 'error':
            return _jsx(AlertCircle, { className: 'h-6 w-6 text-red-500' });
    }
}

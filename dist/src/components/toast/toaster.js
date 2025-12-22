'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CircleAlert, CircleCheck, CircleX, Info } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
const observers = [];
export function addToast(type, title, description = '') {
    observers.forEach((observer) => observer({ title, description, type }));
}
export default function Toaster() {
    const [toasts, setToasts] = useState([]);
    const timers = useRef({});
    const [isHovered, setIsHovered] = useState(false);
    const pauseTimes = useRef({});
    const mainToastRef = useRef(null);
    const [mainToastPosition, setMainToastPosition] = useState(null);
    useEffect(() => {
        const listener = ({ type, title, description }) => {
            const id = Date.now();
            setToasts(prev => {
                const newToasts = prev.concat({ id, type, title, description, remaining: 3000, created: Date.now() }).slice(-3);
                return newToasts;
            });
        };
        observers.push(listener);
        return () => {
            const idx = observers.indexOf(listener);
            if (idx > -1)
                observers.splice(idx, 1);
            Object.values(timers.current).forEach(clearTimeout);
        };
    }, []);
    useEffect(() => {
        if (isHovered) {
            toasts.forEach(toast => {
                if (timers.current[toast.id]) {
                    clearTimeout(timers.current[toast.id]);
                    const elapsed = Date.now() - toast.created;
                    pauseTimes.current[toast.id] = toast.remaining - elapsed > 0 ? toast.remaining - elapsed : 0;
                    setToasts(prev => prev.map(t => t.id === toast.id ? { ...t, remaining: pauseTimes.current[toast.id] } : t));
                    delete timers.current[toast.id];
                }
            });
        }
        else {
            toasts.forEach(toast => {
                if (!timers.current[toast.id] && toast.remaining > 0) {
                    timers.current[toast.id] = setTimeout(() => {
                        setToasts(prev => prev.filter(t => t.id !== toast.id));
                        delete timers.current[toast.id];
                    }, toast.remaining);
                    setToasts(prev => prev.map(t => t.id === toast.id ? { ...t, created: Date.now() } : t));
                }
            });
        }
    }, [isHovered, toasts]);
    // Track main toast position for stacking
    useEffect(() => {
        if (mainToastRef.current && toasts.length > 0) {
            const rect = mainToastRef.current.getBoundingClientRect();
            setMainToastPosition({
                top: rect.top,
                right: window.innerWidth - rect.right
            });
        }
    }, [toasts, isHovered]);
    const bgClasses = ['bg-login-600', 'bg-login-700', 'bg-login-800'];
    return (_jsx("div", { className: `fixed bottom-4 right-4 z-50 flex ${isHovered ? 'flex-col-reverse items-end gap-2' : 'flex-col items-end'}`, onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), children: toasts.slice().reverse().map((toast, idx) => (_jsxs("div", { ref: idx === 0 ? mainToastRef : null, className: 'p-2 rounded-lg text-login-50 animate-fade-in-down transition-all w-sm flex items-center gap-2 ' +
                (bgClasses[idx] || bgClasses[2]), style: isHovered ? {} : idx === 0 ? {
                zIndex: 100,
            } : {
                position: 'fixed',
                top: mainToastPosition ? `${mainToastPosition.top - idx * 8}px` : 'auto',
                zIndex: 100 - idx,
                transform: `scale(${1 - idx * 0.05})`,
            }, children: [_jsx("span", { className: 'shrink-0 w-10 h-10 flex items-center justify-center', children: _jsx(ToastIcon, { type: toast.type }) }), _jsxs("div", { className: 'pr-1 pb-1', children: [_jsx("span", { className: 'font-bold', children: toast.title }), (idx === 0 || isHovered) &&
                            _jsx("span", { className: 'text-sm line-clamp-3', children: toast.description })] })] }, `${toast.id}-${idx}`))) }));
}
function ToastIcon({ type }) {
    switch (type) {
        case 'success':
            return _jsx(CircleCheck, { className: 'text-green-300/70' });
        case 'warning':
            return _jsx(CircleAlert, { className: 'text-yellow-300/70' });
        case 'error':
            return _jsx(CircleX, { className: 'text-red-300/70' });
        case 'info':
            return _jsx(Info, { className: 'text-blue-300/70' });
    }
}

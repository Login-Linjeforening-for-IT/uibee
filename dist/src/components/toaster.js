'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
const observers = [];
export function addToast(message, type) {
    observers.forEach((observer) => observer({ message, type }));
}
export default function Toaster() {
    const [toasts, setToasts] = useState([]);
    const [hovered, setHovered] = useState(false);
    const MAX_TOASTS = 3;
    const timeoutsRef = useState({})[0];
    useEffect(() => {
        const listener = ({ message, type }) => {
            const toast = { id: Date.now(), message, type };
            setToasts((prev) => {
                const updated = [...prev, toast].slice(-MAX_TOASTS);
                return updated;
            });
            if (!hovered) {
                const timeoutId = setTimeout(() => {
                    setToasts((prev) => prev.filter((t) => t.id !== toast.id));
                    delete timeoutsRef[toast.id];
                }, 3000);
                timeoutsRef[toast.id] = timeoutId;
            }
        };
        observers.push(listener);
        return () => {
            const idx = observers.indexOf(listener);
            if (idx > -1)
                observers.splice(idx, 1);
            Object.values(timeoutsRef).forEach(clearTimeout);
        };
    }, [hovered]);
    useEffect(() => {
        if (hovered) {
            Object.values(timeoutsRef).forEach(clearTimeout);
        }
        else {
            toasts.forEach((toast) => {
                if (!timeoutsRef[toast.id]) {
                    const timeoutId = setTimeout(() => {
                        setToasts((prev) => prev.filter((t) => t.id !== toast.id));
                        delete timeoutsRef[toast.id];
                    }, 3000);
                    timeoutsRef[toast.id] = timeoutId;
                }
            });
        }
        return () => {
            Object.values(timeoutsRef).forEach(clearTimeout);
        };
    }, [hovered, toasts, timeoutsRef]);
    return (_jsx("div", { className: `fixed bottom-4 right-4 z-50 flex flex-col items-end${hovered ? ' gap-2' : ''}`, onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), children: (hovered ? [...toasts] : [...toasts].reverse()).map((toast, idx) => (_jsx("div", { className: 'px-4 py-2 rounded text-login-50 animate-fade-in-down transition-all w-xs bg-login-700', style: hovered ? {
                position: 'relative',
                marginTop: 0,
                marginBottom: 0,
                zIndex: 100 - idx,
                transform: 'scale(1)',
                bottom: '0',
            } : {
                position: 'absolute',
                right: 0,
                zIndex: 100 - idx,
                bottom: `${idx * 8}px`,
                transform: `scale(${1 - idx * 0.05})`,
            }, children: toast.message }, toast.id))) }));
}

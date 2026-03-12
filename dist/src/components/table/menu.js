'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { createContext, useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
const MenuContext = createContext({});
export default function Menu({ ref, children, anchor, onClose }) {
    return createPortal(_jsx("div", { ref: ref, style: { top: anchor.top, right: anchor.right }, className: 'fixed bg-login-500 border border-login-600 rounded-lg shadow-lg z-9999 w-44', children: _jsx(MenuContext.Provider, { value: { onClose }, children: children }) }), document.body);
}
export function MenuButton({ icon, text, hotKey, onClick, className, }) {
    const { onClose } = useContext(MenuContext);
    useEffect(() => {
        if (!hotKey)
            return;
        function handleKeyDown(e) {
            if (e.key.toLowerCase() === hotKey.toLowerCase()) {
                e.preventDefault();
                onClick();
                onClose?.();
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [hotKey, onClick, onClose]);
    return (_jsxs("button", { onClick: () => {
            onClick();
            onClose?.();
        }, className: `flex items-center justify-between w-full px-3 py-2 text-sm hover:bg-login-600 cursor-pointer
                ${className || ''}
            `, children: [_jsxs("div", { className: 'flex items-center', children: [React.cloneElement(icon, { className: 'w-4 h-4 mr-2' }), text] }), _jsx("span", { className: 'text-xs opacity-50 font-mono', children: hotKey })] }));
}

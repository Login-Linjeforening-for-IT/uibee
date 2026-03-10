'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TriangleAlert } from 'lucide-react';
export default function ConfirmPopup({ isOpen, header, description, confirmText = 'Confirm', cancelText = 'Cancel', onConfirm, onCancel, variant = 'default', }) {
    if (!isOpen)
        return null;
    const confirmBg = variant === 'danger'
        ? 'bg-red-700/80 outline-red-700 hover:bg-red-700'
        : variant === 'warning'
            ? 'bg-yellow-600/80 outline-yellow-600 hover:bg-yellow-600'
            : 'bg-login/70 outline-login hover:bg-login/90';
    return (_jsxs("div", { role: 'dialog', "aria-modal": 'true', "aria-labelledby": 'confirm-popup-header', className: 'fixed inset-0 z-50 flex items-center justify-center', onClick: onCancel, children: [_jsx("div", { className: 'absolute inset-0 bg-black/60 backdrop-blur-sm' }), _jsxs("div", { className: '\n                    relative z-10 w-full max-w-md mx-4\n                    bg-login-800 border border-login-500/50 rounded-xl\n                    shadow-2xl p-6 flex flex-col gap-4\n                ', onClick: (e) => e.stopPropagation(), children: [_jsxs("div", { className: 'flex items-center gap-3', children: [variant !== 'default' && (_jsx(TriangleAlert, { className: `w-6 h-6 shrink-0 ${variant === 'danger' ? 'stroke-red-400' : 'stroke-yellow-400'}` })), _jsx("h2", { id: 'confirm-popup-header', className: 'text-login-50 text-lg font-bold leading-snug', children: header })] }), description && (_jsx("p", { className: 'text-login-100 text-sm leading-relaxed', children: description })), _jsxs("div", { className: 'flex justify-end gap-3 mt-1', children: [_jsx("button", { type: 'button', onClick: onCancel, className: '\n                            cursor-pointer px-4 py-1.5 rounded-md text-sm font-medium\n                            bg-login-500/60 text-login-50 outline outline-login-500/60\n                            hover:bg-login-500/90 focus:outline-none select-none\n                            transition-colors duration-150\n                        ', children: cancelText }), _jsx("button", { type: 'button', onClick: onConfirm, className: `
                            cursor-pointer px-4 py-1.5 rounded-md text-sm font-bold
                            text-white outline focus:outline-none select-none
                            transition-colors duration-150
                            ${confirmBg}
                        `, children: confirmText })] })] })] }));
}

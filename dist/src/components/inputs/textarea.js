import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Eye, Pencil } from 'lucide-react';
import { FieldWrapper } from './shared';
export default function Textarea({ label, name, placeholder, value, onChange, error, className, disabled, required, rows = 4, info, markdown = false, }) {
    const [preview, setPreview] = useState(false);
    return (_jsx(FieldWrapper, { label: label, name: name, required: required, info: info, error: error, className: className, children: _jsxs("div", { className: 'relative', children: [markdown && (_jsx("div", { className: 'absolute right-2 top-2 z-10 flex gap-2', children: _jsx("button", { type: 'button', onClick: () => setPreview(!preview), className: 'p-1 rounded hover:bg-login-500/50 text-login-text transition-colors', title: preview ? 'Edit' : 'Preview', children: preview ? _jsx(Pencil, { size: 16 }) : _jsx(Eye, { size: 16 }) }) })), markdown && preview ? (_jsx("div", { className: `
                        w-full rounded-md bg-login-500/50 border border-login-500 
                        text-login-text 
                        p-3
                        prose prose-invert prose-sm max-w-none overflow-y-auto
                        ${error ? 'border-red-500' : ''}
                    `, style: { minHeight: `${rows * 1.5}rem` }, children: _jsx(ReactMarkdown, { children: value || '' }) })) : (_jsx("textarea", { id: name, name: name, placeholder: placeholder, value: value, onChange: onChange, disabled: disabled, required: required, rows: rows, title: label, "aria-invalid": !!error, "aria-describedby": error ? `${name}-error` : undefined, className: `
                        w-full rounded-md bg-login-500/50 border border-login-500 
                        text-login-text placeholder-login-200
                        focus:outline-none focus:border-login focus:ring-1 focus:ring-login
                        disabled:opacity-50 disabled:cursor-not-allowed
                        p-3
                        transition-all duration-200
                        resize-y
                        ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
                    ` }))] }) }));
}

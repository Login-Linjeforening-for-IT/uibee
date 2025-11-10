'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import Label from './label';
import ToolTip from './tooltip';
export default function Markdown({ name, label, value, className, tooltip, required, rows = 6, setValue, color, buttonColor, buttonColorHighlighted }) {
    const [hasBlured, setHasBlured] = useState(false);
    const textareaRef = useRef(null);
    const smallButtonStyle = `px-2 py-1 rounded 
        ${buttonColorHighlighted ? `hover:${buttonColorHighlighted}` : 'hover:bg-login-500'}
        ${' '}${buttonColor ? buttonColor : 'bg-login-600'}`;
    function wrapSelection(before, after = before, placeHolder = '') {
        const textarea = textareaRef.current;
        if (!textarea)
            return;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selected = value.slice(start, end) || placeHolder;
        const newValue = value.slice(0, start) + before + selected + after + value.slice(end);
        setValue(newValue);
        requestAnimationFrame(() => {
            const pos = start + before.length;
            textarea.focus();
            textarea.setSelectionRange(pos, pos + selected.length);
        });
    }
    return (_jsxs("div", { className: `w-full ${className ?? ''}`, children: [_jsxs("div", { className: 'relative', children: [_jsx("textarea", { name: name, ref: textareaRef, value: value, onChange: (e) => setValue(e.target.value), onBlur: () => setHasBlured(true), rows: rows, required: required, className: 'block px-2.5 pb-2.5 pt-4 w-full text-sm ' +
                            'rounded-lg border-[0.10rem] appearance-none ' +
                            'border-login-200 focus:outline-none focus:ring-0' +
                            ' focus:border-login-50 peer resize-vertical ' +
                            `${color ? color : 'bg-login-800'}` }), _jsx(Label, { label: label, value: value, color: color, required: required, showRequired: required && !value && hasBlured }), tooltip && _jsx(ToolTip, { info: tooltip })] }), _jsx("div", { className: 'flex items-center justify-between gap-2 mt-2', children: _jsxs("div", { className: 'flex gap-2', children: [_jsx("button", { type: 'button', className: smallButtonStyle, onClick: () => wrapSelection('**', '**', 'bold'), children: "B" }), _jsx("button", { type: 'button', className: smallButtonStyle, onClick: () => wrapSelection('*', '*', 'italic'), children: "I" }), _jsx("button", { type: 'button', className: smallButtonStyle, onClick: () => wrapSelection('\n```\n', '\n```\n', 'code block'), children: "CB" }), _jsx("button", { type: 'button', className: smallButtonStyle, onClick: () => wrapSelection('[', '](url)', 'text'), children: "Link" }), _jsx("button", { type: 'button', className: smallButtonStyle, onClick: () => wrapSelection('\n- ', '', 'list item'), children: "UL" })] }) })] }));
}

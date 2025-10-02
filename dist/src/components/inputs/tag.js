'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import ToolTip from './tooltip';
import Label from './label';
import EraseButton from './erase';
import { X } from 'lucide-react';
export default function TagInput({ name, label, value = [], className, tooltip, required, setValue, }) {
    const original = value;
    const [input, setInput] = useState('');
    const [hasBlured, setHasBlured] = useState(false);
    function addTag(value) {
        const trimmed = value.trim();
        if (trimmed && !value.includes(trimmed)) {
            setValue([...value, trimmed]);
        }
    }
    function removeTag(idx) {
        setValue(value.filter((_, i) => i !== idx));
    }
    function handleKeyDown(e) {
        if ((e.key === 'Enter' || e.key === ',' || e.key === 'Tab') &&
            input.trim()) {
            e.preventDefault();
            addTag(input);
            setInput('');
        }
        if (e.key === 'Backspace' && !input && value.length) {
            setValue(value.slice(0, -1));
        }
    }
    function handleErase() {
        setValue([]);
        setInput('');
    }
    const toRemove = original.filter((tag) => !value.includes(tag));
    const toAdd = value.filter((tag) => !original.includes(tag));
    return (_jsx("div", { className: `w-full ${className}`, children: _jsxs("div", { className: 'relative flex items-center flex-wrap gap-1 ' +
                'border-[0.10rem] border-login-200 ' +
                'rounded-lg ' +
                'px-2.5 pt-3 pb-2.5 bg-login-800', children: [_jsxs("div", { className: 'flex flex-wrap gap-1 items-center w-full', children: [value.map((tag, idx) => (_jsxs("span", { className: 'bg-login-600 text-sm rounded px-2 ' +
                                'py-0.5 flex items-center gap-0.5', children: [tag, _jsx("button", { type: 'button', className: 'ml-1 text-red-700 hover:text-red-800', onClick: () => removeTag(idx), children: _jsx(X, { className: 'h-4 stroke-3' }) })] }, tag + idx))), _jsx("input", { value: input, onChange: (e) => setInput(e.target.value), onKeyDown: handleKeyDown, onBlur: () => setHasBlured(true), className: 'peer flex-1 min-w-[6ch] bg-transparent ' +
                                'outline-none text-sm', autoComplete: 'off', required: required && value.length === 0 }), toRemove.map((tag) => (_jsx("input", { type: 'hidden', name: name + '_remove', value: tag }, tag))), toAdd.map((tag) => (_jsx("input", { type: 'hidden', name: name + '_add', value: tag }, tag))), _jsx(Label, { label: label, value: value.length ? value.join(', ') : '', required: required, showRequired: required && value.length === 0 && hasBlured, className: 'pointer-events-none left-2' })] }), value.length > 0 && _jsx(EraseButton, { setData: handleErase }), value.length === 0 && tooltip && _jsx(ToolTip, { info: tooltip })] }) }));
}

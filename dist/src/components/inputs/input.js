'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import ToolTip from './tooltip';
import Label from './label';
import EraseButton from './erase';
export default function Input({ name, type, label, className, tooltip, required, value, setValue, color }) {
    const [hasBlured, setHasBlured] = useState(false);
    return (_jsx("div", { className: `w-full ${className}`, children: _jsxs("div", { className: 'relative flex items-center', children: [_jsx("input", { name: name, type: type, className: 'block bg-login-800 px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border-[0.10rem] appearance-none ' +
                        'border-login-200 focus:outline-none focus:ring-0 focus:border-login-50 peer', value: value || '', onChange: (e) => setValue(e.target.value), onFocus: (e) => e.target.showPicker(), onBlur: () => setHasBlured(true), placeholder: '', required: required }), _jsx(Label, { label: label, value: value, required: required, color: color, showRequired: required && !value && hasBlured }), value && _jsx(EraseButton, { setData: setValue }), !value && tooltip && _jsx(ToolTip, { info: tooltip })] }) }));
}

'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import ToolTip from './tooltip';
import Label from './label';
import EraseButton from './erase';
export default function Select({ name, label, value, options, className, tooltip, required, children, setValue, color }) {
    const [hasBlured, setHasBlured] = useState(false);
    const selectRef = useRef(null);
    const selectedOption = options.find((o) => o.value === value);
    function handleChoose(value) {
        setValue(value);
        setHasBlured(true);
        if (selectRef.current) {
            selectRef.current.value = String(value);
            selectRef.current.blur();
        }
    }
    return (_jsxs("div", { className: `w-full ${className}`, children: [_jsxs("div", { className: 'relative flex items-center', children: [_jsxs("select", { ref: selectRef, name: name, className: 'peer cursor-pointer block px-2.5 pb-2.5 pt-4 ' +
                            'w-full text-sm rounded-lg border-[0.10rem] ' +
                            'appearance-none border-login-200 focus:ring-0 ' +
                            'focus:outline-none focus:border-login-50 ' +
                            `${color ? color : 'bg-login-800'}`, value: value, onChange: (e) => {
                            setValue(e.target.value);
                            setHasBlured(true);
                        }, onBlur: () => setHasBlured(true), onMouseDown: (e) => {
                            e.preventDefault();
                            selectRef.current?.focus();
                        }, required: required, children: [_jsx("option", { value: '', hidden: true }), options.map((option) => (_jsx("option", { value: option.value, children: option.label }, option.value)))] }), _jsx(Label, { label: label, value: value, required: required, color: color, showRequired: required && !value && hasBlured }), value && (_jsx(EraseButton, { setData: (v) => {
                            setValue(v);
                            setHasBlured(true);
                        } })), !value && tooltip && _jsx(ToolTip, { info: tooltip }), _jsx(SelectContent, { options: options, value: value, selectedOption: selectedOption, handleChoose: handleChoose, color: color })] }), children] }));
}
function SelectContent({ options, value, selectedOption, handleChoose, color }) {
    return (_jsx("div", { className: 'hidden peer-focus:block absolute left-0 ' +
            'right-0 top-full mt-1 z-50', children: _jsx("div", { className: `${color ? color : 'bg-login-800'}` + ' border-[0.10rem] border-login-200 ' +
                'rounded-lg shadow-lg p-0 max-h-72 overflow-hidden', children: _jsxs("div", { className: 'max-h-72 overflow-auto', children: [_jsx(SelectedOption, { value: value, selectedOption: selectedOption }), _jsx("div", { className: 'p-2', children: options
                            .filter((o) => o.value !== value)
                            .map((opt) => (_jsx("button", { type: 'button', className: 'cursor-pointer w-full flex ' +
                                'items-center gap-3 px-2 py-2 ' +
                                'text-sm hover:bg-surface ' +
                                'rounded hover:bg-login-600', onMouseDown: (e) => {
                                e.preventDefault();
                                handleChoose(opt.value);
                            }, children: _jsx("span", { className: 'text-left', children: opt.label }) }, opt.value))) })] }) }) }));
}
function SelectedOption({ value, selectedOption }) {
    if (!value) {
        return _jsx(_Fragment, {});
    }
    return (_jsx("div", { className: 'sticky top-0 bg-surface px-2 py-2 z-10 border-b ' +
            'border-login-200 bg-login-600', children: _jsx("div", { className: 'flex items-center gap-3', children: _jsx("span", { className: 'font-medium text-left', children: selectedOption?.label }) }) }));
}

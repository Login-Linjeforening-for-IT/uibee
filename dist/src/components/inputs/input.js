import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { FieldWrapper } from './shared';
import DateTimePickerPopup from './shared/dateTimePickerPopup';
import useClickOutside from '../../hooks/useClickOutside';
export default function Input(props) {
    const { name, label, error, className, icon, info, ...inputProps } = props;
    const { type = 'text', value } = inputProps;
    const localRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useClickOutside(() => setIsOpen(false));
    const isDateType = ['date', 'datetime-local', 'time'].includes(type);
    function handleIconClick() {
        if (isDateType && !inputProps.disabled) {
            setIsOpen(!isOpen);
        }
        else if (localRef.current && !inputProps.disabled) {
            localRef.current.focus();
        }
    }
    function handleDateChange(date) {
        const onChange = inputProps.onChange;
        if (!onChange)
            return;
        const pad = (n) => n.toString().padStart(2, '0');
        const yyyy = date.getFullYear();
        const MM = pad(date.getMonth() + 1);
        const dd = pad(date.getDate());
        const hh = pad(date.getHours());
        const mm = pad(date.getMinutes());
        let newValue = '';
        if (type === 'date')
            newValue = `${yyyy}-${MM}-${dd}`;
        else if (type === 'time')
            newValue = `${hh}:${mm}`;
        else if (type === 'datetime-local')
            newValue = `${yyyy}-${MM}-${dd}T${hh}:${mm}`;
        const event = {
            target: {
                name,
                value: newValue,
                type,
            },
        };
        onChange(event);
    }
    let displayIcon = icon;
    if (!displayIcon && isDateType) {
        if (type === 'time') {
            displayIcon = _jsx(Clock, { className: 'w-4 h-4' });
        }
        else {
            displayIcon = _jsx(Calendar, { className: 'w-4 h-4' });
        }
    }
    function getDateValue() {
        if (!value)
            return null;
        if (type === 'time') {
            const date = new Date(`2000-01-01T${value}`);
            return isNaN(date.getTime()) ? null : date;
        }
        const date = new Date(value);
        return isNaN(date.getTime()) ? null : date;
    }
    return (_jsx(FieldWrapper, { label: label, name: name, required: inputProps.required, info: info, error: error, className: className, children: _jsxs("div", { className: 'relative flex items-center', ref: containerRef, children: [displayIcon && (_jsx("div", { className: `
                            absolute left-3 text-login-200
                            ${isDateType && !inputProps.disabled ? 'cursor-pointer hover:text-login-text' : 'pointer-events-none'}
                        `, onClick: handleIconClick, children: displayIcon })), _jsx("input", { ...inputProps, ref: localRef, id: name, name: name, type: isDateType ? 'text' : type, value: value, readOnly: isDateType, onClick: () => isDateType && !inputProps.disabled && setIsOpen(true), title: label, "aria-invalid": !!error, "aria-describedby": error ? `${name}-error` : undefined, className: `
                        w-full rounded-md bg-login-500/50 border border-login-500 
                        text-login-text placeholder-login-200
                        focus:outline-none focus:border-login focus:ring-1 focus:ring-login
                        disabled:opacity-50 disabled:cursor-not-allowed
                        h-10.5 py-2 ${displayIcon ? 'pl-10 pr-3' : 'px-3'}
                        transition-all duration-200
                        input-reset
                        ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
                        ${isDateType && !inputProps.disabled ? 'cursor-pointer' : ''}
                    ` }), isOpen && isDateType && !inputProps.disabled && (_jsx(DateTimePickerPopup, { value: getDateValue(), onChange: handleDateChange, type: type, onClose: () => setIsOpen(false) }))] }) }));
}

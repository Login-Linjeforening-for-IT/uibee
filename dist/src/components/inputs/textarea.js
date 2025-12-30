import { jsx as _jsx } from "react/jsx-runtime";
import { FieldWrapper } from './shared';
export default function Textarea({ label, name, placeholder, value, onChange, error, className, disabled, required, rows = 4, info, }) {
    return (_jsx(FieldWrapper, { label: label, name: name, required: required, info: info, error: error, className: className, children: _jsx("textarea", { id: name, name: name, placeholder: placeholder, value: value, onChange: onChange, disabled: disabled, required: required, rows: rows, title: label, "aria-invalid": !!error, "aria-describedby": error ? `${name}-error` : undefined, className: `
                    w-full rounded-md bg-login-500/50 border border-login-500 
                    text-login-text placeholder-login-200
                    focus:outline-none focus:border-login focus:ring-1 focus:ring-login
                    disabled:opacity-50 disabled:cursor-not-allowed
                    p-3
                    transition-all duration-200
                    resize-y
                    ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
                ` }) }));
}

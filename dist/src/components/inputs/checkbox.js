import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Check } from 'lucide-react';
import { SelectionWrapper } from './shared';
export default function Checkbox({ label, name, checked, onChange, className, disabled, error, info, required, }) {
    return (_jsx(SelectionWrapper, { label: label, name: name, required: required, info: info, error: error, className: className, disabled: disabled, children: _jsxs("div", { className: 'relative flex items-center', children: [_jsx("input", { id: name, name: name, type: 'checkbox', checked: checked, onChange: onChange, disabled: disabled, required: required, className: `
                        peer appearance-none h-5 w-5 rounded border border-login-500 bg-login-500/50
                        checked:bg-login checked:border-login
                        focus:outline-none focus:ring-2 focus:ring-login/50
                        disabled:opacity-50 disabled:cursor-not-allowed
                        cursor-pointer transition-all duration-200
                        ${error ? 'border-red-500' : ''}
                    ` }), _jsx(Check, { className: `
                        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                        w-3.5 h-3.5 pointer-events-none text-white opacity-0
                        peer-checked:opacity-100 transition-opacity duration-200
                    ` })] }) }));
}

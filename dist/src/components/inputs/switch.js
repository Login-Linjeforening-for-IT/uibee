import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SelectionWrapper } from './shared';
export default function Switch({ label, name, checked, onChange, className, disabled, error, info, required, }) {
    return (_jsx(SelectionWrapper, { label: label, name: name, required: required, info: info, error: error, className: className, disabled: disabled, children: _jsxs("label", { className: 'relative inline-flex items-center cursor-pointer h-10.5', children: [_jsx("input", { type: 'checkbox', id: name, name: name, checked: checked, onChange: onChange, disabled: disabled, required: required, className: 'sr-only peer' }), _jsx("div", { className: `
                    w-11 h-6 bg-login-500/50 rounded-full peer 
                    peer-checked:after:translate-x-full peer-checked:after:border-white 
                    after:content-[''] after:absolute after:top-2.75 after:left-0.5 
                    after:bg-white after:border-gray-300 after:border after:rounded-full 
                    after:h-5 after:w-5 after:transition-all peer-checked:bg-login
                    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
                    ${error ? 'ring-1 ring-red-500' : ''}
                ` })] }) }));
}

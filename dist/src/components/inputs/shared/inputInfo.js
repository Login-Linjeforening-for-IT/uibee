import { jsx as _jsx } from "react/jsx-runtime";
import { CircleHelp } from 'lucide-react';
export default function InputInfo({ info }) {
    return (_jsx("div", { className: 'text-login-200 hover:text-login-text transition-colors', "aria-label": info, title: info, children: _jsx(CircleHelp, { className: 'w-4 h-4' }) }));
}

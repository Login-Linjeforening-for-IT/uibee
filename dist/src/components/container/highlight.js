import { jsx as _jsx } from "react/jsx-runtime";
export default function Highlight({ children, className }) {
    return _jsx("div", { className: `highlighted-section ${className ?? ''}`, children: children });
}

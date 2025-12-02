import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function PageContainer({ title, children, className, innerClassName }) {
    return (_jsx("div", { className: `w-full page-container ${className}`, children: _jsxs("div", { className: `flex flex-col col-start-3 ${innerClassName}`, children: [_jsx("h1", { className: 'heading', children: title }), children] }) }));
}

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function PageContainer({ title, children }) {
    return (_jsx("div", { className: 'w-full page-container', children: _jsxs("div", { className: 'flex flex-col col-start-3', children: [_jsx("h1", { className: 'heading', children: title }), children] }) }));
}

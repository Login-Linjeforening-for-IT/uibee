import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function ToolTip({ info, className }) {
    return (_jsxs("div", { className: `absolute z-19 right-0 px-1 flex justify-center ${className}`, children: [_jsx("span", { className: 'peer cursor-pointer rounded-sm px-3 py-1 bg-login-800 hover:bg-login-600', children: "?" }), _jsx("div", { className: 'absolute hidden peer-hover:block p-2 rounded z-20 bg-login-700 border left-12 w-max max-w-3xs', children: info })] }));
}

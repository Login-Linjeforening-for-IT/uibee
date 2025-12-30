import { jsx as _jsx } from "react/jsx-runtime";
export default function InputError({ error, id }) {
    if (!error)
        return _jsx("div", { className: 'h-4' });
    return (_jsx("div", { className: 'h-4', children: _jsx("span", { id: id, className: 'text-xs text-red-500 ml-1 truncate block', role: 'alert', title: error, children: error }) }));
}

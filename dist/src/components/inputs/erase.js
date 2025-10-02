import { jsx as _jsx } from "react/jsx-runtime";
import { Eraser } from 'lucide-react';
export default function EraseButton({ setData }) {
    return (_jsx("button", { type: 'button', onClick: () => setData(''), className: 'absolute right-1 cursor-pointer px-2 py-1 bg-login-800 hover:bg-login-600 rounded-md', children: _jsx(Eraser, { className: 'w-5' }) }));
}

import { jsxs as _jsxs } from "react/jsx-runtime";
import Link from 'next/link';
export default function VersionTag({ version, url, className }) {
    if (!version) {
        return;
    }
    const style = `w-fit bg-login-600 px-2 py-1 rounded-md text-white tracking-[0.05em] font-semibold text-lg ${className}`;
    if (url) {
        return (_jsxs(Link, { className: style, target: '_blank', href: url, children: ["v", version] }));
    }
    return (_jsxs("div", { className: style, children: ["v", version] }));
}

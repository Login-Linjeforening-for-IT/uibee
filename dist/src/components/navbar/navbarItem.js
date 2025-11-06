'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
const commonStyling = 'list-none flex no-underline items-center gap-2 whitespace-nowrap cursor-pointer';
export default function NavItem({ href, children, external = false, target, rel, title, icon }) {
    const linkProps = { href, target, rel, title };
    return (_jsxs(_Fragment, { children: [_jsx(Link, { ...linkProps, children: _jsxs("li", { className: `${commonStyling} text-base leading-4 p-3 font-bold transition-colors link-corner-hover
                    group-[.dropdown]:p-2.5 group-[.dropdown]:pr-3 group-[.dropdown]:pl-1`, children: [icon, children, external && _jsx(ArrowUpRight, { className: 'w-6 h-6 stroke-login' })] }) }), _jsx(Link, { ...linkProps, className: '800px:hidden', children: _jsxs("li", { className: `${commonStyling} text-2xl leading-6 overflow-hidden w-auto pl-4 rounded-[0.3rem] transition-all 
                    duration-[600ms] opacity-100 h-16 py-5 group-[.dropdown]:p-0 group-[.dropdown]:text-lg group-[.dropdown]:h-auto 
                    group-[.dropdown]:py-2.5 group-[.dropdown]:pl-4`, children: [children, external && _jsx(ArrowUpRight, { className: 'w-6 h-6 stroke-login' })] }) })] }));
}

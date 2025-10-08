'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ChevronDown } from 'lucide-react';
import React, { useRef, useState } from 'react';
export default function NavDropdown({ children, title }) {
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
    const navItemRef = useRef(null);
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: 'relative group hidden 800px:block', children: _jsxs("div", { className: 'outline-none', tabIndex: 0, ref: navItemRef, children: [_jsxs("div", { className: `list-none no-underline text-base leading-4 p-3 font-bold cursor-pointer flex flex-row items-center 
                        transition-colors`, children: [title, _jsx(ChevronDown, { className: 'w-6 h-6 stroke-login ml-1 text-2xl transition-transform duration-300 ease-in-out' })] }), _jsx("div", { className: `absolute pt-2 -ml-4 -translate-y-4 opacity-0 pointer-events-none
                        transition-all duration-200 ease-in-out z-10
                        group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0
                        group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0`, children: _jsx("ul", { className: 'p-3 px-6 pb-4 rounded-[0.4rem] shadow-[0_0.1rem_0.5rem_rgba(3,3,3,0.5)] bg-login-700/98', children: React.Children.map(children, (child, index) => (_jsx("div", { onClick: () => navItemRef.current?.blur(), className: 'group dropdown', children: child }, index))) }) })] }) }), _jsxs("div", { className: 'block 800px:hidden', children: [_jsx("button", { className: 'bg-none border-none cursor-pointer w-full text-left', onClick: (e) => {
                            e.stopPropagation();
                            setIsMobileDropdownOpen(!isMobileDropdownOpen);
                        }, children: _jsxs("li", { className: `list-none no-underline text-2xl leading-6 overflow-hidden
                        w-full pl-4 pr-4 rounded-[0.3rem] transition-all duration-[600ms]
                        flex items-center gap-2 opacity-100 min-h-16 py-5 `, children: [_jsx("span", { children: title }), _jsx(ChevronDown, { className: `w-6 h-6 transition-transform duration-400 flex-shrink-0 
                            ${isMobileDropdownOpen ? 'rotate-180' : ''}` })] }) }), _jsx("div", { className: `list-none no-underline text-xl px-6 ${isMobileDropdownOpen ? 'pb-4' : ''}`, children: React.Children.map(children, (child, index) => (_jsx("div", { className: `leading-6 transition-all duration-500 group dropdown
                            ${isMobileDropdownOpen ? 'h-11 opacity-100' : 'h-0 opacity-0'}
                        `, children: child }, index))) })] })] }));
}

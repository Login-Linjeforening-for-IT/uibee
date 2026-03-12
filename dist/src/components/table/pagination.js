'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
export default function Pagination({ pageSize = 10, totalRows, }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const rawPage = parseInt(searchParams.get('page') || '1', 10);
    const initialPage = Math.max(1, Number.isNaN(rawPage) ? 1 : rawPage);
    const [current, setCurrent] = useState(initialPage);
    useEffect(() => {
        const raw = parseInt(searchParams.get('page') || '1', 10);
        const p = Math.max(1, Number.isNaN(raw) ? 1 : raw);
        const computedTotalPages = Math.max(1, Math.ceil(totalRows !== undefined && pageSize > 0
            ? totalRows / pageSize
            : 1));
        setCurrent(Math.max(1, Math.min(computedTotalPages, p)));
    }, [searchParams, totalRows, pageSize]);
    function updateQuery(p) {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', String(p));
        router.push(`${pathname}?${params.toString()}`);
    }
    function goPrevious() {
        if (current <= 1)
            return;
        const next = current - 1;
        setCurrent(next);
        updateQuery(next);
    }
    const totalPages = Math.max(1, Math.ceil(totalRows !== undefined && pageSize > 0
        ? totalRows / pageSize
        : 1));
    function goNext() {
        if (current >= totalPages)
            return;
        const next = current + 1;
        setCurrent(next);
        updateQuery(next);
    }
    function setPage(p) {
        if (p === current)
            return;
        setCurrent(p);
        updateQuery(p);
    }
    function getPages(curr, total) {
        const delta = 2;
        const left = Math.max(1, curr - delta);
        const right = Math.min(total, curr + delta);
        const pages = [];
        if (left > 1) {
            pages.push(1);
            if (left > 2)
                pages.push('...');
        }
        for (let i = left; i <= right; i++)
            pages.push(i);
        if (right < total) {
            if (right < total - 1)
                pages.push('...');
            pages.push(total);
        }
        return pages;
    }
    const pages = getPages(current, totalPages);
    const start = Math.max(1, (current - 1) * pageSize + 1);
    const end = Math.min(current * pageSize, totalRows !== undefined ? totalRows : current * pageSize);
    return (_jsxs("div", { className: 'flex items-center justify-between w-full pt-4', children: [_jsx("div", { className: 'text-sm /70', children: totalRows !== undefined ? (totalRows === 0 ? (_jsx("span", { children: "Showing 0 results" })) : (_jsxs("span", { children: ["Showing ", start, " to ", end, " of ", totalRows, " results"] }))) : null }), _jsxs("div", { className: 'flex items-center gap-3', children: [_jsx("button", { type: 'button', onClick: goPrevious, disabled: current <= 1, className: `
                        flex items-center gap-2 p-1 rounded-lg
                        bg-login-50/5 hover:bg-login-500 disabled:opacity-50
                        border-[0.10rem] border-login-200 text-sm
                    `, children: _jsx(ChevronLeft, { className: 'h-5 w-5' }) }), _jsx("nav", { className: 'flex items-center gap-1', "aria-label": 'Pagination', children: pages.map((p, i) => typeof p === 'string' ? (_jsx("span", { className: 'px-3 py-1 text-sm', children: p }, `e-${i}`)) : (_jsx("button", { type: 'button', onClick: () => setPage(p), "aria-current": p === current ? 'page' : undefined, className: `
                                    px-3 py-1 rounded-lg text-sm
                                    border-[0.10rem] ${p === current
                                ? 'bg-login-50/5 border-login-50'
                                : `bg-login-50/0 border-login-200
                                    'hover:bg-login-400`}
                                `, children: p }, p))) }), _jsx("button", { type: 'button', onClick: goNext, disabled: current >= totalPages, className: `
                        flex items-center gap-2 p-1 rounded-lg bg-login-50/5
                        hover:bg-login-500 disabled:opacity-50 select-none
                        border-[0.10rem] border-login-200 text-sm
                    `, children: _jsx(ChevronRight, { className: 'h-5 w-5' }) })] })] }));
}

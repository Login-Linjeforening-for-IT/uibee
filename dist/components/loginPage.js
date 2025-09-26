import { LogIn } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
export default function LoginPage({ title, description, redirectURI, version }) {
    return (React.createElement("main", { className: 'h-full grid place-items-center p-4 relative' },
        React.createElement("div", { className: 'flex flex-col justify-center items-center' },
            React.createElement("h1", { className: 'text-2xl font-bold text-login text-center' }, title),
            React.createElement("p", { className: 'mt-2 text-foreground text-center font-semibold text-login-300' }, description),
            React.createElement(Link, { href: redirectURI, className: 'grid place-items-center' },
                React.createElement("div", { className: 'flex align-middle gap-2 mt-2 rounded-lg ' +
                        'bg-login px-8 py-1  hover:bg-orange-500 mb-2' },
                    "Login",
                    React.createElement(LogIn, { className: 'w-5' })))),
        version));
}

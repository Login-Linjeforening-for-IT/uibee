'use client';
import React, { useState } from 'react';
export default function LoginPage({}) {
    const [state, setState] = useState('');
    return (React.createElement("div", null,
        "HELLO LOGIN! ",
        state,
        React.createElement("button", { onClick: () => setState('Logged In') }, "Log In")));
}

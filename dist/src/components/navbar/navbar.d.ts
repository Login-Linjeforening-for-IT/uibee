import React from 'react';
import { Language } from 'uibee/components';
export type NavbarProps = {
    lang: Language;
    onlyLogo?: boolean;
    theme: string;
    token: string | null;
    children: React.ReactNode;
};
export default function Navbar({ lang, onlyLogo, token, children }: NavbarProps): import("react/jsx-runtime").JSX.Element;

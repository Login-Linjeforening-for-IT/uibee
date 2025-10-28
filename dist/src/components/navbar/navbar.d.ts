import React from 'react';
import { Language } from 'uibee/components';
export type NavbarProps = {
    lang: Language;
    disableLanguageToggle?: boolean;
    onlyLogo?: boolean;
    theme: string;
    disableThemeToggle?: boolean;
    token: string | null;
    disableAuthButton?: boolean;
    children: React.ReactNode;
};
export default function Navbar({ lang, onlyLogo, token, children, disableLanguageToggle, disableThemeToggle, disableAuthButton }: NavbarProps): import("react/jsx-runtime").JSX.Element;

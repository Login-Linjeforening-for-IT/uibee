import React from 'react';
import { Language } from 'uibee/components';
export type NavbarProps = {
    lang?: Language;
    disableLanguageToggle?: boolean;
    onlyLogo?: boolean;
    theme?: string;
    disableThemeToggle?: boolean;
    token?: string | null;
    disableAuthButton?: boolean;
    profileURL?: string;
    className?: string;
    innerClassName?: string;
    children: React.ReactNode;
};
export default function Navbar({ lang, onlyLogo, disableLanguageToggle, disableThemeToggle, token, disableAuthButton, profileURL, className, innerClassName, children, }: NavbarProps): import("react/jsx-runtime").JSX.Element;

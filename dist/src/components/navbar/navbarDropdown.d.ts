import { ReactNode } from 'react';
export type NavDropdownProps = {
    children: ReactNode;
    title: string;
    className?: string;
};
export default function NavDropdown({ children, title, className }: NavDropdownProps): import("react/jsx-runtime").JSX.Element;

import type { JSX } from 'react';
type ButtonProps = {
    text: string;
    className?: string;
    icon?: string | JSX.Element;
    path?: string;
    color?: 'primary' | 'secondary';
    onClick?: (_: object) => void;
    disabled?: boolean;
};
export default function Button({ text, className, icon, path, color, onClick, disabled }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};

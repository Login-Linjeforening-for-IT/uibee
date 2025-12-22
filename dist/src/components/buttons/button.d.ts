import type { JSX } from 'react';
type ButtonProps = {
    text: string;
    className?: string;
    icon?: string | JSX.Element;
    path?: string;
    type?: 'button' | 'submit' | 'reset';
    color?: 'primary' | 'secondary';
    onClick?: (_: object) => void;
    disabled?: boolean;
};
export default function Button({ text, className, icon, path, color, type, onClick, disabled }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};

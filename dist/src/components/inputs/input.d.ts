import { type ChangeEvent, type JSX } from 'react';
export type InputProps = {
    label?: string;
    name: string;
    type?: React.HTMLInputTypeAttribute;
    placeholder?: string;
    value?: string | number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    className?: string;
    disabled?: boolean;
    required?: boolean;
    icon?: JSX.Element;
    info?: string;
    multiple?: boolean;
};
export default function Input({ label, name, type, placeholder, value, onChange, error, className, disabled, required, icon, info, multiple, }: InputProps): import("react/jsx-runtime").JSX.Element;

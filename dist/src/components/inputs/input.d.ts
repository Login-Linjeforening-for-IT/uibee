import { HTMLInputTypeAttribute } from 'react';
type InputProps = {
    name: string;
    type: HTMLInputTypeAttribute;
    label: string;
    value?: string | number;
    setValue: (value: string | number) => void;
    className?: string;
    tooltip?: string;
    required?: boolean;
    color?: string;
};
export default function Input({ name, type, label, className, tooltip, required, value, setValue, color }: InputProps): import("react/jsx-runtime").JSX.Element;
export {};

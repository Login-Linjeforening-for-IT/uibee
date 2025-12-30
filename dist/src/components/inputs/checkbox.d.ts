import { type ChangeEvent } from 'react';
export type CheckboxProps = {
    label?: string;
    name: string;
    checked?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    disabled?: boolean;
    error?: string;
    info?: string;
    required?: boolean;
};
export default function Checkbox({ label, name, checked, onChange, className, disabled, error, info, required, }: CheckboxProps): import("react/jsx-runtime").JSX.Element;

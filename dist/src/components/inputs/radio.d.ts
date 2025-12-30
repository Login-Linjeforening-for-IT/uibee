import { type ChangeEvent } from 'react';
export type RadioProps = {
    label?: string;
    name: string;
    value: string | number;
    checked?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    disabled?: boolean;
    error?: string;
    info?: string;
    required?: boolean;
};
export default function Radio({ label, name, value, checked, onChange, className, disabled, error, info, required, }: RadioProps): import("react/jsx-runtime").JSX.Element;

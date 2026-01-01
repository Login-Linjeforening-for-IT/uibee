import { type ChangeEvent } from 'react';
export type TextareaProps = {
    label?: string;
    name: string;
    placeholder?: string;
    type?: 'markdown' | 'json' | 'text';
    value?: string;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    error?: string;
    className?: string;
    disabled?: boolean;
    required?: boolean;
    rows?: number;
    info?: string;
};
export default function Textarea({ label, name, placeholder, value, onChange, error, className, disabled, required, rows, info, type, }: TextareaProps): import("react/jsx-runtime").JSX.Element;

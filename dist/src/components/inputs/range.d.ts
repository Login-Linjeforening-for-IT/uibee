import { type ChangeEvent } from 'react';
export type RangeProps = {
    label?: string;
    name: string;
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    className?: string;
    disabled?: boolean;
    required?: boolean;
    info?: string;
    showValue?: boolean;
};
export default function Range({ label, name, min, max, step, value, onChange, error, className, disabled, required, info, showValue, }: RangeProps): import("react/jsx-runtime").JSX.Element;

import { type ChangeEvent } from 'react';
export type SwitchProps = {
    label?: string;
    name: string;
    checked?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    disabled?: boolean;
    error?: string;
    info?: string;
    required?: boolean;
    switchOnly?: boolean;
};
export default function Switch({ label, name, checked, onChange, className, disabled, error, info, required, switchOnly, }: SwitchProps): import("react/jsx-runtime").JSX.Element;

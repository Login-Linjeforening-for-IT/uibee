import { ReactNode } from 'react';
interface SelectionWrapperProps {
    label?: string;
    name: string;
    required?: boolean;
    info?: string;
    error?: string;
    children: ReactNode;
    className?: string;
    disabled?: boolean;
}
export default function SelectionWrapper({ label, name, required, info, error, children, className, disabled, }: SelectionWrapperProps): import("react/jsx-runtime").JSX.Element;
export {};

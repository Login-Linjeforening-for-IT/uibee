type Option = {
    value: string | number;
    label: string;
    image?: string;
};
type SelectProps = {
    name: string;
    label: string;
    value: string | number;
    setValue: (_: string | number) => void;
    options: Option[];
    className?: string;
    tooltip?: string;
    required?: boolean;
    children?: React.ReactNode;
    color?: string;
};
export default function Select({ name, label, value, options, className, tooltip, required, children, setValue, color }: SelectProps): import("react/jsx-runtime").JSX.Element;
export {};

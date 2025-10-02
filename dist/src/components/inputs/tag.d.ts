type TagInputProps = {
    name: string;
    label: string;
    value?: string[];
    setValue: (_: string[]) => void;
    className?: string;
    tooltip?: string;
    required?: boolean;
};
export default function TagInput({ name, label, value, className, tooltip, required, setValue, }: TagInputProps): import("react/jsx-runtime").JSX.Element;
export {};

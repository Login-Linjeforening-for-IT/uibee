type MarkdownProps = {
    name: string;
    label: string;
    value: string;
    setValue: (_: string | number) => void;
    className?: string;
    tooltip?: string;
    required?: boolean;
    rows?: number;
    color?: string;
    buttonColor?: string;
    buttonColorHighlighted?: string;
};
export default function Markdown({ name, label, value, className, tooltip, required, rows, setValue, color, buttonColor, buttonColorHighlighted }: MarkdownProps): import("react/jsx-runtime").JSX.Element;
export {};

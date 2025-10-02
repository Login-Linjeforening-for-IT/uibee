type SwitchProps = {
    name: string;
    label: string;
    value?: boolean;
    setValue: (_: boolean) => void;
    className?: string;
    tooltip?: string;
};
export default function Switch({ name, label, value, className, tooltip, setValue }: SwitchProps): import("react/jsx-runtime").JSX.Element;
export {};

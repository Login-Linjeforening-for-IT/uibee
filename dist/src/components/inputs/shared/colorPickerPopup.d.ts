import { type JSX } from 'react';
export type ColorPickerPopupProps = {
    value: string;
    onChange: (color: string) => void;
    onClose: () => void;
};
export default function ColorPickerPopup({ value, onChange, onClose }: ColorPickerPopupProps): JSX.Element;

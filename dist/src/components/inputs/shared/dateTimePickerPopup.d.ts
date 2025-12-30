type DateTimePickerPopupProps = {
    value: Date | null;
    onChange: (date: Date) => void;
    type: 'date' | 'time' | 'datetime-local';
    onClose?: () => void;
};
export default function DateTimePickerPopup({ value, onChange, type, onClose, }: DateTimePickerPopupProps): import("react/jsx-runtime").JSX.Element;
export {};

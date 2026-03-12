/* eslint-disable @stylistic/semi */
declare module 'uibee/components' {
    export interface LoginPageProps {
        title: string
        description?: string
        redirectPath: string
        version: string
        btg?: boolean
        handleSubmit?: (formData: FormData) => void
        guestRedirectPath?: string
        guestText?: string
    }

    export type ToastType = 'info' | 'success' | 'warning' | 'error'

    interface Toast {
        id: number
        message: string
        type: ToastType
        expiresAt: number
        pausedAt?: number
        exiting?: boolean
    }

    interface ToastProps {
        toast: Toast,
        index: number,
        expanded: boolean,
        onRemove: () => void,
        onHeight: (id: number, height: number) => void,
        offset: number,
        frontHeight: number
    }

    export type Language = 'no' | 'en'

    export type TableColor = 'green' | 'yellow' | 'red' | 'blue' | 'gray'

    export type HighlightMap = {
        [key: string]: TableColor
    }

    export type Column = {
        key: string
        label?: string
        highlight?: HighlightMap
    }

    export type TableProps = {
        data: object[]
        columns: Column[]
        menuItems?: (data: object, id: string) => React.ReactNode
        redirectPath?: string | { path: string, key?: string }
        variant?: 'default' | 'minimal'
        idKey?: string
    }

    export function LoginPage(props: LoginPageProps): JSX.Element;
    export function Toaster(): JSX.Element;
    export function toast(message: string, type: ToastType, duration?: number): void;
    export namespace toast {
        export function info(message: string, duration?: number): void;
        export function success(message: string, duration?: number): void;
        export function warning(message: string, duration?: number): void;
        export function error(message: string, duration?: number): void;
    }
    export function LanguageToggle(props: { lang: Language }): JSX.Element;
    export function ThemeSwitch(props: { className?: string }): JSX.Element;

    export interface ConfirmPopupProps {
        isOpen: boolean
        header: string
        description?: string
        confirmText?: string
        cancelText?: string
        onConfirm: () => void
        onCancel: () => void
        variant?: 'danger' | 'warning' | 'default'
    }
    export function ConfirmPopup(props: ConfirmPopupProps): JSX.Element | null;

    export function Table(props: TableProps): JSX.Element;
    export function Pagination(props: { pageSize?: number; totalRows?: number }): JSX.Element;

    export function MenuButton(props: {
        icon: React.ReactNode
        text: string
        hotKey?: string
        onClick: () => void
        className?: string
    }): JSX.Element;
}

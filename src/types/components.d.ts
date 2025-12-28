/* eslint-disable @stylistic/semi */
declare module 'uibee/components' {
    export interface LoginPageProps {
        title: string
        description?: string
        redirectURL: string
        version: string
        btg?: boolean
        handleSubmit?: (formData: FormData) => void
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

    export default function LoginPage(props: LoginPageProps): JSX.Element;
    export default function Toaster(): JSX.Element;
    export default function toast(message: string, type: ToastType, duration?: number): void;
    export default function LanguageToggle(props: { lang: Language }): JSX.Element;
    export default function ThemeSwitch(props: { className?: string }): JSX.Element;
}

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

    export type ToastType = 'success' | 'error' | 'info' | 'warning'
    export interface ToastProps {
        id: number
        type: ToastType
        title: string
        description?: string
    }

    export interface ToastEventProps {
        type: ToastType
        title: string
        description?: string
    }

    export interface ToastObserverProps {
        (event: ToastEventProps): void
    }

    export type Language = 'no' | 'en'

    export default function LoginPage(props: LoginPageProps): JSX.Element;
    export default function Toaster(props: { toasts: ToastProps[] }): JSX.Element;
    export default function LanguageToggle(props: { lang: Language }): JSX.Element;
    export default function ThemeSwitch(props: { className?: string }): JSX.Element;
}

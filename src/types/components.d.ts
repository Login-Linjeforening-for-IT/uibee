/* eslint-disable @stylistic/semi */
declare module 'uibee/components' {
    export interface LoginPageProps {
        title: string
        description?: string
        redirectURI: string
        version: string
        btg?: boolean
        handleSubmit?: (formData: FormData) => void
    }

    export interface ToastProps {
        id: number
        message: string
        type?: 'success' | 'error' | 'info' | 'warning'
    }

    export interface ToastEventProps {
        message: string
        type?: ToastProps['type']
    }

    export interface ToastObserverProps {
        (event: ToastEventProps): void
    }

    export default function LoginPage(props: LoginPageProps): JSX.Element;
    export default function Toaster(props: { toasts: ToastProps[] }): JSX.Element;
}

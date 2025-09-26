declare module 'uibee/components' {
    export interface LoginPageProps {
        title: string
        description?: string
        redirectURI: string
        version: string
        btg?: boolean
        handleSubmit?: (formData: FormData) => void
    }

    export default function LoginPage(props: LoginPageProps): JSX.Element
}

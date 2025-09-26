import { JSX } from 'react'

declare module 'uibee/components' {
    export interface LoginPageProps {
        title: string
        description?: string
        redirectURI: string
        version: string
    }

    export default function LoginPage(props: LoginPageProps): JSX.Element
}

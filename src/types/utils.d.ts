/* eslint-disable @stylistic/semi */
import { NextRequest } from 'next/server'
declare module 'uibee/utils' {
    export interface AuthLoginProps {
        req: NextRequest
        clientID: string
        redirectPath: string
        authURL: string
    }

    export interface AuthCallbackProps {
        req: NextRequest
        tokenURL: string
        clientID: string
        clientSecret: string
        redirectPath: string
        userInfoURL: string
        tokenRedirectPath: string
    }

    export interface AuthTokenProps {
        req: NextRequest
        redirectPath?: string
    }

    export interface AuthLogoutProps {
        req: NextRequest
        path?: string
    }

    export default async function authLogin(props: AuthLoginProps): Promise<Response>;
    export default async function authCallback(props: AuthCallbackProps): Promise<Response>;
    export default async function authToken(props: AuthTokenProps): Promise<Response>;
    export default async function authLogout(props: AuthLogoutProps): Promise<Response>;
}

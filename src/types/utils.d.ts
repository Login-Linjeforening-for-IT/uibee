/* eslint-disable @stylistic/semi */
import { NextRequest } from 'next/server'

declare module 'uibee/utils' {
    export interface SlowQueryProps {
        application: string
        duration: number
        name: string
        cacheTTL: number
        webhookURL: string
        criticalRole: string
    }
    export interface Embed {
        title: string
        description: string
        color: number
        timestamp: string
    }

    export interface Data {
        content?: string
        embeds: Embed[]
    }

    export interface DiscordAlertProps {
        application: string
        description: string
        type: 'get' | 'post' | ''
        ping: boolean
        criticalRole: string
        webhookURL: string
    }

    export interface AuthLoginProps {
        clientID: string
        redirectURL: string
        authURL: string
    }

    export interface AuthCallbackProps {
        req: Request
        tokenURL: string
        clientID: string
        clientSecret: string
        redirectURL: string
        userInfoURL: string
        tokenRedirectURL: string
    }

    export interface AuthTokenProps {
        req: NextRequest
        frontendURL: string
        redirectPath?: string
    }
    export interface AuthLogoutProps {
        request: NextRequest
        path?: string
        frontendURL: string
    }

    export default async function alertSlowQuery(props: SlowQueryProps): Promise<void>;
    export default async function discordAlert(props: DiscordAlertProps): Promise<number>;
    export default async function authLogin(props: AuthLoginProps): Promise<Response>;
    export default async function authCallback(props: AuthCallbackProps): Promise<Response>;
    export default async function authToken(props: AuthTokenProps): Promise<Response>;
    export default async function authLogout(props: AuthLogoutProps): Promise<Response>;
}

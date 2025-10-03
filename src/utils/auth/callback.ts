import { NextResponse } from 'next/server'
import type { AuthCallbackProps } from 'uibee/utils'

type UserInfo = {
    sub: string
    name: string
    email: string
    groups: string[]
}

export default async function authCallback({
    req,
    tokenURL,
    clientID,
    clientSecret,
    redirectURL,
    userInfoURL,
    tokenRedirectURL
}: AuthCallbackProps) {
    const searchParams = new URL(req.url).searchParams

    if (!searchParams) {
        return NextResponse.json({ error: 'No search parameters found.' }, { status: 400 })
    }
    const code = searchParams.get('code')

    if (!code) {
        return NextResponse.json({ error: 'No authorization code found.' }, { status: 400 })
    }

    try {
        // Exchanges callback code for access token
        const tokenResponse = await fetch(tokenURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                client_id: clientID,
                client_secret: clientSecret,
                code: code as string,
                redirect_url: redirectURL,
                grant_type: 'authorization_code',
            }).toString()
        })

        const tokenResponseBody = await tokenResponse.text()

        if (!tokenResponse.ok) {
            return new Response(JSON.stringify(`Failed to obtain token: ${tokenResponseBody}`), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            })
        }

        const token = JSON.parse(tokenResponseBody)

        // Fetches user info using access token
        const userInfoResponse = await fetch(userInfoURL, {
            headers: { Authorization: `Bearer ${token.access_token}` }
        })

        if (!userInfoResponse.ok) {
            const userInfoError = await userInfoResponse.text()
            return new Response(`No user info found: ${userInfoError}`, {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            })
        }

        const userInfo = await userInfoResponse.json() as UserInfo

        const redirectUrl = new URL(tokenRedirectURL)
        const params = new URLSearchParams({
            id: userInfo.sub,
            name: userInfo.name,
            email: userInfo.email,
            groups: userInfo.groups.join(','),
            access_token: token.access_token,
        })

        redirectUrl.search = params.toString()
        return NextResponse.redirect(redirectUrl.toString())
    } catch (err: unknown) {
        const error = err as Error
        console.error('Error during OAuth flow:', error.message)
        return NextResponse.json({ error: 'Authentication failed' }, { status: 500 })
    }
}
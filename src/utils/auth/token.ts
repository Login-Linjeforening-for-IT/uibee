import { NextResponse } from 'next/server'
import type { AuthTokenProps } from 'uibee/utils'

export default async function AuthToken({ req, frontendURL, redirectPath }: AuthTokenProps) {
    const url = new URL(req.url)
    const token = url.searchParams.get('access_token')
    const btg = url.searchParams.get('btg')
    const redirectCookie = req.cookies.get('redirect_after_login')
    const redirect = redirectCookie ? redirectCookie.value : redirectPath || '/'

    if (!token) {
        return NextResponse.json({ error: 'No access token provided' }, { status: 400 })
    }

    if (btg) {
        return NextResponse.redirect(new URL(redirect, frontendURL))
    }

    const accessToken = url.searchParams.get('access_token')!
    const userID = url.searchParams.get('id')!
    const username = url.searchParams.get('name')!
    const userNickname = url.searchParams.get('username')!
    const userEmail = url.searchParams.get('email')!
    const userGroups = url.searchParams.get('groups')!

    const response = NextResponse.redirect(new URL(redirect, frontendURL))
    response.cookies.set('access_token', accessToken)
    response.cookies.set('user_id', userID)
    response.cookies.set('user_name', username)
    response.cookies.set('user_nickname', userNickname)
    response.cookies.set('user_email', userEmail)
    response.cookies.set('user_groups', userGroups)

    if (redirectCookie) {
        response.cookies.delete('redirect_after_login')
    }

    return response
}

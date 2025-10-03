import { NextResponse } from 'next/server'
import type { AuthTokenProps } from 'uibee/utils'

export default async function AuthToken({ request, frontendURL }: AuthTokenProps) {
    const url = new URL(request.url)
    const token = url.searchParams.get('access_token')
    const btg = url.searchParams.get('btg')
    if (!token) {
        return NextResponse.json({ error: 'No access token provided' }, { status: 400 })
    }

    if (btg) {
        return NextResponse.redirect(new URL('/dashboard', frontendURL))
    }

    const accessToken = url.searchParams.get('access_token')!
    const accessTokenExpires = url.searchParams.get('access_token_expires')!
    const refreshToken = url.searchParams.get('refresh_token')!
    const refreshTokenExpires = url.searchParams.get('refresh_token_expires')!
    const userId = url.searchParams.get('user_id')!
    const userName = url.searchParams.get('user_name')!
    const userRoles = url.searchParams.get('user_roles')!

    const response = NextResponse.redirect(new URL('/dashboard', frontendURL))
    response.cookies.set('access_token', accessToken)
    response.cookies.set('access_token_expires', accessTokenExpires)
    response.cookies.set('refresh_token', refreshToken)
    response.cookies.set('refresh_token_expires', refreshTokenExpires)
    response.cookies.set('user_id', userId)
    response.cookies.set('user_name', userName)
    response.cookies.set('user_roles', userRoles)

    return response
}
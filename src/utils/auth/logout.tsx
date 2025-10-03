import { NextResponse } from 'next/server'
import type { AuthLogoutProps } from 'uibee/utils'

export default async function AuthLogout({ request, frontendURL }: AuthLogoutProps) {
    console.log(request.url)
    const response = NextResponse.redirect(new URL('/', frontendURL))

    // Remove all authentication cookies
    const cookiesToRemove = [
        'access_token',
        'access_token_expires',
        'refresh_token',
        'refresh_token_expires',
        'user_id',
        'user_name',
        'user_roles'
    ]

    cookiesToRemove.forEach(cookieName => {
        response.cookies.delete(cookieName)
    })

    return response
}

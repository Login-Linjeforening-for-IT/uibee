import { NextResponse } from 'next/server'
import type { AuthLogoutProps } from 'uibee/utils'
import { getDomain } from './getDomain'

export default async function AuthLogout({ req, path }: AuthLogoutProps) {
    const domain = getDomain(req)
    const response = NextResponse.redirect(new URL(path || '/', domain))

    const cookiesToRemove = [
        'access_token',
        'user_id',
        'user_name',
        'user_nickname',
        'user_email',
        'user_groups'
    ]

    cookiesToRemove.forEach(cookieName => {
        response.cookies.delete(cookieName)
    })

    return response
}

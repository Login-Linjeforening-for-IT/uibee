import { removeCookies } from '@utils/cookies/cookies'
import { NextResponse } from 'next/server'
import type { AuthLogoutProps } from 'uibee/utils'

export default async function AuthLogout({ frontendURL, path }: AuthLogoutProps) {
    removeCookies(
        'access_token',
        'user_id',
        'user_name',
        'user_nickname',
        'user_email',
        'user_groups'
    )

    const response = NextResponse.redirect(new URL(path || '/', frontendURL))
    return response
}

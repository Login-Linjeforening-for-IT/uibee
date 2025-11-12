import { NextResponse } from 'next/server';
export default async function AuthLogout({ frontendURL }) {
    const response = NextResponse.redirect(new URL('/', frontendURL));
    // Remove all authentication cookies
    const cookiesToRemove = [
        'access_token',
        'user_id',
        'user_name',
        'user_nickname',
        'user_email',
        'user_groups'
    ];
    cookiesToRemove.forEach(cookieName => {
        response.cookies.delete(cookieName);
    });
    return response;
}

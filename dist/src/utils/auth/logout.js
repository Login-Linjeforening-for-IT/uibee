import { NextResponse } from 'next/server';
export default async function AuthLogout({ frontendURL, path }) {
    const response = NextResponse.redirect(new URL(path || '/', frontendURL));
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

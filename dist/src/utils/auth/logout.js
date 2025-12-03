import { removeCookies } from '../cookies/cookies';
import { NextResponse } from 'next/server';
export default async function AuthLogout({ frontendURL, path }) {
    removeCookies('access_token', 'user_id', 'user_name', 'user_nickname', 'user_email', 'user_groups');
    const response = NextResponse.redirect(new URL(path || '/', frontendURL));
    return response;
}

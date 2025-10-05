import { NextResponse } from 'next/server';
export default async function AuthToken({ req, frontendURL, redirectPath }) {
    const url = new URL(req.url);
    const token = url.searchParams.get('access_token');
    const btg = url.searchParams.get('btg');
    if (!token) {
        return NextResponse.json({ error: 'No access token provided' }, { status: 400 });
    }
    if (btg) {
        return NextResponse.redirect(new URL(redirectPath || '/', frontendURL));
    }
    const accessToken = url.searchParams.get('access_token');
    const userID = url.searchParams.get('id');
    const username = url.searchParams.get('name');
    const userEmail = url.searchParams.get('email');
    const userGroups = url.searchParams.get('groups');
    const response = NextResponse.redirect(new URL(redirectPath || '/', frontendURL));
    response.cookies.set('access_token', accessToken);
    response.cookies.set('user_id', userID);
    response.cookies.set('user_name', username);
    response.cookies.set('user_email', userEmail);
    response.cookies.set('user_groups', userGroups);
    return response;
}

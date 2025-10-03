import { NextResponse } from 'next/server';
export default async function AuthLogin({ clientID, redirectURI, authURL }) {
    const state = Math.random().toString(36).substring(5);
    const authQueryParams = new URLSearchParams({
        client_id: clientID,
        redirect_uri: redirectURI,
        response_type: 'code',
        scope: 'openid profile email',
        state: state,
    }).toString();
    return NextResponse.redirect(`${authURL}?${authQueryParams}`);
}

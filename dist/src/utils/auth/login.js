import { NextResponse } from 'next/server';
import { getDomain } from './getDomain';
export default async function AuthLogin({ req, clientID, redirectPath, authURL }) {
    const domain = getDomain(req);
    const state = Math.random().toString(36).substring(5);
    const authQueryParams = new URLSearchParams({
        client_id: clientID,
        redirect_uri: `${domain}${redirectPath}`,
        response_type: 'code',
        scope: 'openid profile email',
        state: state,
    }).toString();
    return NextResponse.redirect(`${authURL}?${authQueryParams}`);
}

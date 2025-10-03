import type { AuthCallbackProps } from 'uibee/utils';
export default function authCallback({ req, tokenURL, clientID, clientSecret, redirectURI, userInfoURL, tokenRedirectURL }: AuthCallbackProps): Promise<Response>;

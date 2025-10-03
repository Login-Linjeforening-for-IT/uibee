import type { AuthCallbackProps } from 'uibee/utils';
export default function authCallback({ req, tokenURL, clientID, clientSecret, redirectURL, userInfoURL, tokenRedirectURL }: AuthCallbackProps): Promise<Response>;

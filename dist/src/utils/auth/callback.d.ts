import type { AuthCallbackProps } from 'uibee/utils';
export default function authCallback({ req, tokenURL, clientID, clientSecret, redirectPath, userInfoURL, tokenRedirectPath }: AuthCallbackProps): Promise<Response>;

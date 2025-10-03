import { NextResponse } from 'next/server';
import type { AuthLoginProps } from 'uibee/utils';
export default function AuthLogin({ clientID, redirectURL, authURL }: AuthLoginProps): Promise<NextResponse<unknown>>;

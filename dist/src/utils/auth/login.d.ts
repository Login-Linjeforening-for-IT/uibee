import { NextResponse } from 'next/server';
import type { AuthLoginProps } from 'uibee/utils';
export default function AuthLogin({ req, clientID, redirectPath, authURL }: AuthLoginProps): Promise<NextResponse<unknown>>;

import { NextResponse } from 'next/server';
import type { AuthTokenProps } from 'uibee/utils';
export default function AuthToken({ req, frontendURL }: AuthTokenProps): Promise<NextResponse<unknown>>;

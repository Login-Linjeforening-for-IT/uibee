import { NextResponse } from 'next/server';
import type { AuthTokenProps } from 'uibee/utils';
export default function AuthToken({ req, redirectPath }: AuthTokenProps): Promise<NextResponse<unknown>>;

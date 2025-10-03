import { NextResponse } from 'next/server';
import type { AuthLogoutProps } from 'uibee/utils';
export default function AuthLogout({ request, frontendURL }: AuthLogoutProps): Promise<NextResponse<unknown>>;

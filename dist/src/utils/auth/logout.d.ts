import { NextResponse } from 'next/server';
import type { AuthLogoutProps } from 'uibee/utils';
export default function AuthLogout({ frontendURL, path }: AuthLogoutProps): Promise<NextResponse<unknown>>;

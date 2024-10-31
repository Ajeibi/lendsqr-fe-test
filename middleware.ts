import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const isAuthenticated = req.cookies.get('auth')?.value === 'true';

    if (!isAuthenticated && req.nextUrl.pathname === '/') {
        const signInUrl = new URL('/sign-in', req.url);
        return NextResponse.redirect(signInUrl);
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/'],
};

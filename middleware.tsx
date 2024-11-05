import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.endsWith('/') && pathname.length > 1) {
    const newPathname = pathname.slice(0, -1);
    return NextResponse.redirect(new URL(newPathname, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api).*)'],
};

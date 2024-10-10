import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest): NextResponse {
  if (
    process.env.NODE_ENV === 'production' &&
    request.nextUrl.protocol === 'http:'
  ) {
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

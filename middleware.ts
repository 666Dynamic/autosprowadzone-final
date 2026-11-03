import { NextRequest, NextResponse } from 'next/server'

const CANONICAL_HOST = 'www.sprowadzoneauto.pl'

export function middleware(request: NextRequest) {
  // Production *.vercel.app alias duplicates the site — send it to the canonical domain
  const host = request.headers.get('host') ?? ''
  if (process.env.VERCEL_ENV === 'production' && host.endsWith('.vercel.app')) {
    const url = request.nextUrl.clone()
    url.protocol = 'https'
    url.host = CANONICAL_HOST
    url.port = ''
    return NextResponse.redirect(url, 308)
  }

  // Force HTTPS redirect
  if (process.env.NODE_ENV === 'production') {
    const proto = request.headers.get('x-forwarded-proto')
    
    if (proto && proto !== 'https') {
      const url = request.nextUrl.clone()
      url.protocol = 'https'
      return NextResponse.redirect(url, 301)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

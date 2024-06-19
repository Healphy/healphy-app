import { type NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
  const token = request.cookies.get('healphy-token')?.value
  const signInPath = new URL('/login/', request.url)
  const dashboardPath = new URL('/dashboard', request.url)

  if (
    request.nextUrl.pathname.startsWith('/dashboard') &&
    token === undefined
  ) {
    return NextResponse.redirect(signInPath)
  } else if (request.nextUrl.pathname === '/login' && token !== undefined) {
    return NextResponse.redirect(dashboardPath)
  } else {
    return NextResponse.next()
  }
}

export const config = {
  matcher: ['/login', '/dashboard/:path*'],
}

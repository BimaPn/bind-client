// export { default } from "next-auth/middleware"
import { getToken } from 'next-auth/jwt';
import { withAuth } from "next-auth/middleware";
import { NextResponse,NextRequest,NextFetchEvent } from "next/server";


export default async function middleware(req: NextRequest, event: NextFetchEvent) {
  const token = await getToken({ req });
  const isAuthenticated = !!token;

  if ((req.nextUrl.pathname.startsWith('/login') || req.nextUrl.pathname.startsWith('/register')) && isAuthenticated) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  const authMiddleware = await withAuth({
    pages: {
      signIn: `/login`,
      newUser: '/register'
    },
  });

  // @ts-expect-error
  return authMiddleware(req, event);
}

// export const config = { matcher: ["/login"] }


import { withAuth } from "next-auth/middleware"
export default withAuth({
//   Matches the pages config in `[...nextauth]`
  pages: {
    signIn:"/auth/signIn",
    signOut:"/auth/signOut",
    error:"/auth/error"
  }
})

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      '/((?!api|favicon.ico).*)',
    ],
  }

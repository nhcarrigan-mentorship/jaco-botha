import { auth0 } from "./lib/auth0";
import { NextRequest } from "next/server";



export async function middleware(request:NextRequest) {
  // 1. Run the base auth0 middleware (handles /auth/login, etc.)
  const authRes = await auth0.middleware(request);

  // 2. Check if the user is trying to access the dashboard
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    const session = await auth0.getSession(request);

    // 3. If no session exists, redirect to login
    if (!session) {
      return Response.redirect(new URL("/auth/login", request.url));
    }
  }

  return authRes;
}

export const config = {
  // Ensure the middleware runs for dashboard and auth routes
  matcher: ["/dashboard/:path*", "/auth/:path*"],
};

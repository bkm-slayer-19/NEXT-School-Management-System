import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { routeAccessMap } from "./lib/settings";
import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";

const matchers = Object.keys(routeAccessMap).map((route) => ({
  matcher: createRouteMatcher([route]),
  allowedRoles: routeAccessMap[route],
}));

console.log(matchers);

export default clerkMiddleware((auth, req) => {
  const { userId, sessionClaims } = auth();
  
  if (!userId) {
    return;
  }

  console.log("Session claims:", sessionClaims);
  console.log("URL:", req.url);
  
  // Get role from metadata (after configuring JWT template)
  const role = (sessionClaims?.metadata as { role?: string })?.role;
  console.log("Extracted role:", role);

  // If accessing root path and has role, redirect to role-based page
  if (req.nextUrl.pathname === '/' && role) {
    console.log("Redirecting to role page:", `/${role}`);
    return NextResponse.redirect(new URL(`/${role}`, req.url));
  }

  // Check if user has permission for the current route
  for (const { matcher, allowedRoles } of matchers) {
    if (matcher(req) && role && !allowedRoles.includes(role)) {
      console.log("Access denied, redirecting to:", `/${role}`);
      return NextResponse.redirect(new URL(`/${role}`, req.url));
    }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const host = request.headers.get("host") || "";

  // Force non-www
  if (host.startsWith("www.")) {
    url.host = host.replace("www.", "");
    return NextResponse.redirect(url, 308);
  }

  // Force root → /de
  if (url.pathname === "/") {
    url.pathname = "/de";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};

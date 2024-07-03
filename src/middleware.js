import { NextResponse } from "next/server";

export function middleware(req) {
  //   if (req.nextUrl.pathname !== "/login") {
  //     return NextResponse.redirect(new URL("/login", req.url));
  //   }
  console.log("middleware ran");
  return NextResponse.json({ success: "successfully ran" });
}
export const config = {
  matcher: ["/userslist/:path*"],
};

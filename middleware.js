import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/login" || path === "/Signup";

  const token = request.cookies.get("token")?.value || "";
  console.log("token checjk");

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/",
    
    "/login",
    "/Signup",
    "/#HomeSection"
  
  
  ],
};

// import { NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';

// export function middleware(request) {
//   const path = request.nextUrl.pathname;
//   const token = request.cookies.get('token');

//   // Check if token is valid
//   try {
//     if (token) {
//       jwt.verify(token, "gjgvjgjg");
//       return NextResponse.next(); // Continue to the requested page
//     } else {
//       return NextResponse.redirect(new URL('/login', request.url));
//     }
//   } catch (err) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }
// }

// export const config = {
//   matcher: ['/protected/**'], // Adjust paths as needed
// };

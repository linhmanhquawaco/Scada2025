// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Chuyển URL về lowercase nếu có chữ hoa
 * Hỗ trợ route tĩnh và động ([slug])
 * Giữ nguyên query string và hash
 */
export function middleware(req: NextRequest) {
  const { pathname, search, hash } = req.nextUrl;

  // Nếu path có chữ hoa, redirect về lowercase
  if (pathname !== pathname.toLowerCase()) {
    const lowercasedUrl = pathname.toLowerCase() + search + hash;
    return NextResponse.redirect(lowercasedUrl, 301); // permanent redirect
  }

  return NextResponse.next();
}

// Áp dụng cho tất cả route trong app/
export const config = {
  matcher: '/:path*'
};

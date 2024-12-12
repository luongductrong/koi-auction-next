/** @format */

import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const allowedMethods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];

  if (!allowedMethods.includes(req.method as string)) {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }

  return NextResponse.next();
}

/** @format */

import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const currentTime = new Date().toISOString();
    return NextResponse.json({ currentTime }, { status: 200 });
  } catch {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

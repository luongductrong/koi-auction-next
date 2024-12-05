/** @format */

import { NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json({ message: 'pong' }, { status: 200 });
  } catch {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

/** @format */

import { NextResponse } from 'next/server';
import { verifyToken } from '@/utils/jwt';

export async function GET() {
  // return NextResponse.json({ message: 'pong' }, { status: 200 });
  const decode = verifyToken(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTczMzM5OTMzOCwiZXhwIjoxNzMzNDAwMjM4fQ.B-2-N6R34Z7JOiX2x0fjemLTRbRGgSTBJiehS_cFeTU',
  );
  return NextResponse.json({ decode }, { status: 200 });
}

/** @format */

import { NextResponse } from 'next/server';
import swaggerSpec from '@/app/swagger-ui/swagger';

export async function GET() {
  try {
    return NextResponse.json(swaggerSpec, { status: 200 });
  } catch {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

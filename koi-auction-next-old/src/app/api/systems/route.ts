/** @format */

import { NextRequest, NextResponse } from 'next/server';
import SystemService from '@/services/system';
import AuthenticationService from '@/services/authentication';

export async function GET(request: NextRequest) {
  try {
    const authService = new AuthenticationService();
    const systemService = new SystemService();

    const user = await authService.decodeToken(request);
    if (!user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const system = await systemService.getSystemFeeInfor();
    return NextResponse.json(system, { status: 200 });
  } catch {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

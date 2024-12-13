/** @format */

import { NextRequest, NextResponse } from 'next/server';
import type { UserResponse } from '@/models/user';
import UserService from '@/services/user';
import AuthenticationService from '@/services/authentication';

const ACCESS_ROLE = ['Admin'];

export async function GET(request: NextRequest) {
  try {
    const authSevice = new AuthenticationService();
    const userService = new UserService();

    const access = await authSevice.roleBasedAccess(request, ACCESS_ROLE);
    if (access === '401') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    if (access === '403') {
      return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
    }

    const users: UserResponse[] = await userService.getUsers();
    return NextResponse.json(users, { status: 200 });
  } catch {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

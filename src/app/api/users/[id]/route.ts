/** @format */
// src/app/api/users/[id]/route.ts

import { NextResponse } from 'next/server';
import type { UserResponse } from '@/models/user';
import UserService from '@/services/user';
import AuthenticationService from '@/services/authentication';

const ACCESS_ROLE = ['Admin'];

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const authService = new AuthenticationService();
    const userService = new UserService();

    const id = Number((await params).id);
    if (!id) {
      return NextResponse.json({ message: 'ID is required' }, { status: 400 });
    }

    const access = await authService.roleBasedAccess(request, ACCESS_ROLE, id);
    if (access === '401') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    if (access === '403') {
      return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
    }

    const user: UserResponse | undefined = await userService.getUserById(id);

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

/** @format */

import { NextResponse } from 'next/server';
import { UserResponse } from '@/models/user';
import { UserService } from '@/services/user';

export async function GET() {
  const userService = new UserService();
  const users: UserResponse[] = await userService.getUsers();
  return NextResponse.json(users, { status: 200 });
}

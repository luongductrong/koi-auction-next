/** @format */

import { NextResponse } from 'next/server';
import { User } from '@/models/user';
import { UserService } from '@/services/user';

export async function GET() {
  const userService = new UserService();
  const users: User[] = await userService.getUsers();
  return NextResponse.json(users, { status: 200 });
}

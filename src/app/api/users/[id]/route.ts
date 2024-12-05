/** @format */

import { NextResponse } from 'next/server';
import { UserResponse } from '@/models/user';
import { UserService } from '@/services/user';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const id = (await params).id;

    if (!id) {
      return NextResponse.json({ message: 'ID is required' }, { status: 400 });
    }

    const userService = new UserService();

    const user: UserResponse | undefined = await userService.getUserById(Number(id));

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

/** @format */

import { NextResponse } from 'next/server';
import { UserResponse } from '@/models/user';
import { UserService } from '@/services/user';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = await params; // Get id from params

    if (!id) {
      return NextResponse.json({ message: 'ID is required' }, { status: 400 });
    }

    const userService = new UserService();

    // Call the getUserById method from the UserService class
    const user: UserResponse | undefined = await userService.getUserById(Number(id));

    if (!user) {
      // Response with message 'User not found' and status code 404
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Response with user data and status code 200
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    // Response with message 'Internal server error' and status code 500
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

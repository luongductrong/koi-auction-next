/** @format */

import { NextResponse } from 'next/server';
import UserService from '@/services/user';
import type { UserLoginResponse } from '@/models/user';
import { generateToken } from '@/utils/jwt';

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();
    const userService = new UserService();

    const user = await userService.getUserByUsernameOrEmail(username);

    if (!username || !password || username === '' || password === '') {
      return NextResponse.json({ message: 'Username and password are required' }, { status: 400 });
    }

    if (user && user.Status === 'Inactive') {
      return NextResponse.json({ message: 'User is banned' }, { status: 403 });
    }

    if (!user || !(await userService.verifyPassword(password, user.Password))) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    // Create token
    const token = generateToken({ id: user.UserID, username: user.UserName, role: user.Role });

    const userResponse: UserLoginResponse = {
      token,
      fullName: user.FullName,
      isFullInfo: user.FullName !== null && user.PhoneNumber !== null && user.Email !== null && user.Address !== null,
    };

    // Response with token
    return NextResponse.json(userResponse, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}

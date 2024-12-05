/** @format */

import { NextResponse } from 'next/server';
import { UserResponse } from '@/models/user';
import { UserService } from '@/services/user';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params; // Lấy id từ params
    const userService = new UserService();

    // Gọi phương thức để tìm người dùng theo id
    const user: UserResponse | undefined = await userService.getUserById(Number(id));

    if (!user) {
      // Trả về phản hồi 'User not found' với mã trạng thái 404
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Trả về dữ liệu người dùng với mã trạng thái 200
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    // Trả về thông báo lỗi và mã trạng thái 500
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

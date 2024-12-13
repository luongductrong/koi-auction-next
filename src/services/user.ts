/** @format */

// src/services/userService.ts
import type User from '../models/user';
import type { UserResponse } from '../models/user';
import { USERS } from '../data/users';
import { comparePassword } from '@/utils/hash-password';

export default class UserService {
  constructor() {}

  async getUsers(): Promise<UserResponse[]> {
    try {
      const usersResponse: UserResponse[] = USERS.map((user) => {
        return {
          id: user.UserID,
          role: user.Role,
          userName: user.UserName,
          fullName: user.FullName,
          phoneNumber: user.PhoneNumber,
          email: user.Email,
          address: user.Address,
          createdAt: user.CreatedAt,
          updatedAt: user.UpdatedAt,
          status: user.Status,
        };
      });
      return usersResponse;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }

  async getUserById(id: number): Promise<UserResponse | undefined> {
    try {
      const user: User | undefined = USERS.find((user) => user.UserID === id);
      if (!user) {
        return undefined;
      }
      const userResponse: UserResponse = {
        id: user.UserID,
        role: user.Role,
        userName: user.UserName,
        fullName: user.FullName,
        phoneNumber: user.PhoneNumber,
        email: user.Email,
        address: user.Address,
        createdAt: user.CreatedAt,
        updatedAt: user.UpdatedAt,
        status: user.Status,
      };
      return userResponse;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }

  async getUserByUsernameOrEmail(usernameOrEmail: string): Promise<User | undefined> {
    try {
      const user: User | undefined = USERS.find(
        (user) => user.UserName === usernameOrEmail || user.Email === usernameOrEmail,
      );
      return user;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }

  async verifyPassword(password: string, hash: string): Promise<boolean> {
    try {
      return await comparePassword(password, hash);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }
}

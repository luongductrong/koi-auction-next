/** @format */

// src/services/userService.ts
import { User } from '../models/user';
import { users } from '../data/users';

export class UserService {
  constructor() {}

  async getUsers(): Promise<User[]> {
    return users;
  }
}

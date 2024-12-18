/** @format */
import type User from '../models/user';

export const USERS: User[] = [
  {
    UserID: 1,
    Role: 'Admin',
    UserName: 'admin',
    FullName: 'Admin',
    PhoneNumber: '0123456789',
    Email: 'admin@admin.koi',
    Password: '$2a$12$LHlBeTwwqrgWMozhI542qedLM8kifnwQZXH9tlTunHKNf2zb0f3Gm', // 1
    Address: 'Admin Address',
    CreatedAt: '2021-09-01T00:00:00Z',
    UpdatedAt: '2021-09-01T00:00:00Z',
    Status: 'Active',
  },
  {
    UserID: 2,
    Role: 'Staff',
    UserName: 'staff',
    FullName: 'Staff',
    PhoneNumber: '0123456789',
    Email: 'staff@admin.koi',
    Password: '$2a$12$LHlBeTwwqrgWMozhI542qedLM8kifnwQZXH9tlTunHKNf2zb0f3Gm',
    Address: 'Staff Address',
    CreatedAt: '2021-09-01T00:00:00Z',
    UpdatedAt: '2021-09-01T00:00:00Z',
    Status: 'Active',
  },
  {
    UserID: 3,
    Role: 'Breeder',
    UserName: 'breeder',
    FullName: 'Breeder',
    PhoneNumber: '0123456789',
    Email: 'breeder@admim.koi',
    Password: '$2a$12$LHlBeTwwqrgWMozhI542qedLM8kifnwQZXH9tlTunHKNf2zb0f3Gm',
    Address: 'Breeder Address',
    CreatedAt: '2021-09-01T00:00:00Z',
    UpdatedAt: '2021-09-01T00:00:00Z',
    Status: 'Active',
  },
  {
    UserID: 4,
    Role: 'User',
    UserName: 'user',
    FullName: 'User',
    PhoneNumber: '0123456789',
    Email: 'user@admin.koi',
    Password: '$2a$12$LHlBeTwwqrgWMozhI542qedLM8kifnwQZXH9tlTunHKNf2zb0f3Gm',
    Address: 'User Address',
    CreatedAt: '2021-09-01T00:00:00Z',
    UpdatedAt: '2021-09-01T00:00:00Z',
    Status: 'Active',
  },
];

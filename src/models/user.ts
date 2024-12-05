/** @format */

export interface User {
  UserID: number;
  Role: 'Admin' | 'Staff' | 'Breeder' | 'User';
  UserName: string;
  FullName: string | null;
  PhoneNumber: string | null;
  Email: string | null;
  Password: string;
  Address: string | null;
  CreatedAt: string;
  UpdatedAt: string;
  Status: 'Active' | 'Inactive';
}

export interface UserResponse {
  id: number;
  role: 'Admin' | 'Staff' | 'Breeder' | 'User';
  userName: string;
  fullName: string | null;
  phoneNumber: string | null;
  email: string | null;
  address: string | null;
  createdAt: string;
  updatedAt: string;
  status: 'Active' | 'Inactive';
}

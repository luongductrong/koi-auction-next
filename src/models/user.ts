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

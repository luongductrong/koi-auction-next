/** @format */

import bcrypt from 'bcryptjs';

const saltRounds = process.env.NEXT_SALT_ROUNDS || '10';

// Function to hash password
export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, parseInt(saltRounds));
}

// Function to compare password with hash
export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}

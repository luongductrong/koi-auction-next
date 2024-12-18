/** @format */

import jwt from 'jsonwebtoken';

// Read the secret key from the environment variable or use a default value
const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-secret-key';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '15m';

// Function to generate a token
export function generateToken(payload: object): string {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: JWT_EXPIRES_IN });
}

export function verifyToken(token: string): object | string | null {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    console.error('Error verifying token', error);
    return null;
  }
}

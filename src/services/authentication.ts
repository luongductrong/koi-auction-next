/** @format */

import { NextRequest } from 'next/server';
import { verifyToken } from '@/utils/jwt';

interface Authentications {
  decodeToken(request: Request | NextRequest): Promise<any>;
  decodeRole(request: Request | NextRequest): Promise<string | null>;
  decodeId(request: Request | NextRequest): Promise<number | null>;
  roleBasedAccess(request: Request | NextRequest, accessRole: string[], accessId?: number): Promise<string>;
}

export class AuthenticationService implements Authentications {
  constructor() {}

  async decodeToken(request: Request | NextRequest) {
    const authHeader = request.headers.get('Authorization');
    const token = authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;
    if (!token) {
      return null;
    }
    return verifyToken(token);
  }

  async decodeRole(request: Request | NextRequest) {
    const user = await this.decodeToken(request);
    if (user && typeof user === 'object' && user !== null && 'role' in user && typeof user.role === 'string') {
      return user.role;
    }
    return null;
  }

  async decodeId(request: Request | NextRequest) {
    const user = await this.decodeToken(request);
    if (user && typeof user === 'object' && user !== null && 'id' in user && typeof user.id === 'number') {
      return user.id;
    }
    return null;
  }

  async roleBasedAccess(request: Request | NextRequest, accessRole: string[], accessId?: number) {
    const user = await this.decodeToken(request);

    if (user && typeof user === 'object' && user !== null && 'role' in user && typeof user.role === 'string') {
      if (accessRole.includes(user.role)) {
        return '200';
      }
      if (accessId && 'id' in user && typeof user.id === 'number' && user.id === accessId) {
        return '200';
      }
      return '403';
    }
    return '401';
  }
}

/** @format */

// app/api/swagger/route.ts
import swaggerSpec from '@/app/api-docs/swagger';

export async function GET() {
  return new Response(JSON.stringify(swaggerSpec), {
    headers: { 'Content-Type': 'application/json' },
  });
}

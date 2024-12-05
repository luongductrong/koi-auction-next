/** @format */

// app/components/ApiDocs.tsx
'use client';

import dynamic from 'next/dynamic';
import swaggerSpec from '@/app/api-docs/swagger';

const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false });

import 'swagger-ui-react/swagger-ui.css';

export default function ApiDocs() {
  return <SwaggerUI spec={swaggerSpec} />;
}

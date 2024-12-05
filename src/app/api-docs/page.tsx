/** @format */

// app/components/ApiDocs.tsx
'use client';

import dynamic from 'next/dynamic';
import swaggerSpec from '@/app/api-docs/swagger';
import Loading from '@/components/Loading';

const SwaggerUI = dynamic(() => import('swagger-ui-react'), {
  ssr: false,
  loading: () => (
    <div className="h-screen w-screen flex justify-center items-center">
      <Loading color="primary" size="large" />
    </div>
  ), // Loading UI
});

import 'swagger-ui-react/swagger-ui.css';

export default function ApiDocs() {
  return <SwaggerUI spec={swaggerSpec} />;
}

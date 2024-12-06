/** @format */

// app/components/ApiDocs.tsx
'use client';

import dynamic from 'next/dynamic';
import swaggerSpec from '@/app/swagger-ui/swagger';
import Loading from '@/components/loading';

const SwaggerUI = dynamic(() => import('swagger-ui-react'), {
  ssr: false,
  loading: () => (
    <div className="h-screen w-screen flex justify-center items-center">
      <Loading color="primary" size="large" textClassName="font-bold">
        Loading API documentation...
      </Loading>
    </div>
  ), // Loading UI
});

import 'swagger-ui-react/swagger-ui.css';

export default function ApiDocs() {
  return <SwaggerUI spec={swaggerSpec} />;
}

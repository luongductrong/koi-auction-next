/** @format */

'use client';

import React from 'react';
import Loading from '@/components/loading';

const LoadingDemo = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-8 p-4">
        <h1 className="text-2xl font-bold mb-4">Loading Component Demo</h1>

        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Small Loading (Primary)</h2>
            <Loading size="small" color="primary" />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Default Loading (Secondary)</h2>
            <Loading size="default" color="secondary" />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Large Loading (Success)</h2>
            <Loading size="large" color="success" />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Default Loading (Danger)</h2>
            <Loading color="danger" />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Default Loading (Warning)</h2>
            <Loading color="warning" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingDemo;

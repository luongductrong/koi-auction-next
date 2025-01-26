/** @format */
import { type Metadata } from 'next';
import SwaggerContent from './content';

export const metadata: Metadata = {
  title: 'Swagger UI | API Documentation',
  description: 'Explore the API documentation for Koi Auction application.',
  icons: [
    {
      rel: 'icon',
      url: '/favicon-swagger.png',
    },
    {
      rel: 'apple-touch-icon',
      url: '/favicon-swagger.png',
    },
  ],
};

export default function SwaggerPage() {
  return <SwaggerContent />;
}

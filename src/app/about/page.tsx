/** @format */

import { type Metadata } from 'next';
import AboutContent from './content';

export const metadata: Metadata = {
  title: 'About Us | Our Platform',
  description: 'Learn about our platform, our commitments, and why you should choose us.',
};

export default function AboutPage() {
  return <AboutContent />;
}

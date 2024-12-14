/** @format */

import React from 'react';

interface LanguageIconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
}

export default function LanguageIcon({ className, width = '800px', height = '800px', style }: LanguageIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="3"
      stroke="#000000"
      fill="none"
      className={className}
      style={style}
    >
      <path d="M34.53,14.59s-1.6,18.21-24,32.78" strokeLinecap="round" />
      <line x1="7.35" y1="14.59" x2="41.46" y2="14.59" strokeLinecap="round" />
      <line x1="24.4" y1="9.08" x2="24.4" y2="14.59" strokeLinecap="round" />
      <path d="M16.76,22.05S25.2,36.8,32,41.33" strokeLinecap="round" />
      <path d="M33.55,54.92l10.74-25a.89.89,0,0,1,1.63,0l10.73,25" strokeLinecap="round" />
      <line x1="37.25" y1="46.3" x2="52.96" y2="46.3" strokeLinecap="round" />
    </svg>
  );
}

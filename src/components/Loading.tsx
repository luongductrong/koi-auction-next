/** @format */

import React from 'react';

interface LoadingProps {
  size?: 'small' | 'default' | 'large';
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
}

const Loading: React.FC<LoadingProps> = ({ size = 'default', color = 'primary' }) => {
  const sizeClasses = {
    small: 'w-4 h-4 border-2',
    default: 'w-8 h-8 border-4',
    large: 'w-12 h-12 border-4',
  };

  const colorClasses = {
    primary: 'border-blue-500',
    secondary: 'border-gray-500',
    success: 'border-green-500',
    danger: 'border-red-500',
    warning: 'border-yellow-500',
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`${sizeClasses[size]} ${colorClasses[color]} border-t-transparent rounded-full animate-spin`}
      ></div>
    </div>
  );
};

export default Loading;

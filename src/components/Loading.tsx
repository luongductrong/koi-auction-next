/** @format */

import React from 'react';

interface LoadingProps extends Omit<React.HTMLProps<HTMLDivElement>, 'size'> {
  size?: 'small' | 'default' | 'large';
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  textClassName?: string;
  children?: React.ReactNode;
}

const Loading: React.FC<LoadingProps> = ({
  size = 'default',
  color = 'primary',
  className,
  textClassName,
  style,
  children,
  ...props
}) => {
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
    <div className="flex flex-col justify-center items-center">
      <div
        {...props}
        style={style}
        className={`${sizeClasses[size]} ${colorClasses[color]} border-t-transparent rounded-full animate-spin ${className}`}
      ></div>
      {children && <div className={`mt-2 text-center ${textClassName}`}>{children}</div>}
    </div>
  );
};

export default Loading;

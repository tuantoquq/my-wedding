import React from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'desc' | string;

type Props = {
  className?: string;
  variant: Variant;
  children?: React.ReactNode;
};

export default function Typography({
  className = '',
  variant,
  children,
  ...rest
}: Props & React.HTMLAttributes<HTMLParagraphElement>) {
  switch (variant) {
    case 'h1':
      return (
        <h1
          className={`text-4xl sm:text-4xl md:text-[2.5rem] lg:text-5xl font-semibold ${className}`}
          {...rest}
        >
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2
          className={`text-[1.75rem] sm:text-3xl md:text-3xl lg:text-4xl font-semibold ${className}`}
          {...rest}
        >
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3
          className={`text-lg sm:text-xl md:text-xl lg:text-2xl font-medium ${className}`}
          {...rest}
        >
          {children}
        </h3>
      );
    case 'h4':
      return (
        <p
          className={`text-sm sm:text-sm md:text-base lg:text-lg font-semibold ${className}`}
          {...rest}
        >
          {children}
        </p>
      );
    case 'desc':
      return (
        <p
          className={`text-sm sm:text-base md:text-base lg:text-lg !leading-6 md:!leading-7 font-normal text-center text-description ${className}`}
          {...rest}
        >
          {children}
        </p>
      );
    default: {
      return (
        <p
          className={`text-xs sm:text-sm md:text-base lg:text-lg font-normal ${className}`}
          {...rest}
        >
          {children}
        </p>
      );
    }
  }
}

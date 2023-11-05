import Typography from '@/libs/Typography';
import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <Typography className="capitalize mb-8" variant='h1'>
      {children}
    </Typography>
  );
}

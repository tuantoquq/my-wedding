import Typography from '@/libs/Typography';
import Image from 'next/image';
import React from 'react';
import couple from '@/public/couple.png';

type SectionHeadingProps = {
  children: React.ReactNode,
  className?: string
};

export const SectionHeadingImage = ({ children, className }: SectionHeadingProps) => {
  return (
    <div className={`mt-0 mb-8 flex flex-col justify-center items-center ${className}`}>
      <Image alt="couple" src={couple} className="md:w-[10rem] xs:w-[8rem]" />
      <Typography className="capitalize" variant="h1">
        {children}
      </Typography>
    </div>
  );
};

export const SectionHeading = ({ children, className }: SectionHeadingProps) => {
  return (
    <Typography className={`capitalize mb-8 ${className}`} variant="h1">
      {children}
    </Typography>
  );
};

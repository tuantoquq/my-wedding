import Typography from '@/libs/Typography';
import Image from 'next/image';
import React from 'react';
import couple from '@/public/couple.png';

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="mt-0 flex flex-col justify-center items-center">
      <Image alt="couple" src={couple} className="md:w-[10rem] xs:w-[8rem]" />
      <Typography className="capitalize mb-8" variant="h1">
        {children}
      </Typography>
    </div>
  );
}

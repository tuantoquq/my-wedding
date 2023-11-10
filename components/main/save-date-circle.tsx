'use client';
import React from 'react';
import Typography from '@/libs/Typography';
import { Dosis } from 'next/font/google';

const dosis = Dosis({ subsets: ['latin'] });

export default function SaveDateCircle() {
  return (
    <div className="relative">
      <div
        className={` ${dosis.className} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-52 md:w-48 sm:w-44 xs:w-40 aspect-square rounded-full border-2 border-[#ff7d7d] flex flex-col justify-center items-center gap-0 md:gap-2 bg-white/[.85]`}
      >
        <Typography
          variant="h3"
          className="!text-[#ff7d7d] drop-shadow-[1px_1px_1px_rgba(0,0,0,0.25)]"
        >
          SAVE THE DATE
        </Typography>
        <Typography
          variant="desc"
          className="!text-[#ff7d7d] lg:text-lg drop-shadow-[1px_1px_1px_rgba(0,0,0,0.25)]"
        >
          02/12/2023
        </Typography>
      </div>
    </div>
  );
}

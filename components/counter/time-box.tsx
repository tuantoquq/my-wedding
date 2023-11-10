import Typography from '@/libs/Typography';
import React from 'react';
import {
  Great_Vibes,
  Playball,
  Plus_Jakarta_Sans,
  Sriracha,
} from 'next/font/google';

const timeFont = Playball({ weight: '400', subsets: ['vietnamese'] });
// const timeTitle = Plus_Jakarta_Sans({ weight: '400', subsets: ['vietnamese'] });
type TimeBoxProps = {
  time: string;
  title: string;
};

export default function TimeBox({ time, title }: TimeBoxProps) {
  return (
    <div
      className="flex flex-col p-2 md:gap-5 xs:gap-2 justify-center items-center border-2 rounded-2xl border-title bg-cs-green-300
    md:min-h-[10rem] xs:min-h-[7rem] 
    md:min-w-[9rem] xs:min-w-[6.5rem]"
    >
      <Typography
        variant="desc"
        className={`font-light md:!text-[3.25rem] xs:!text-[2.5rem] text-title/[.75] ${timeFont.className}`}
        suppressHydrationWarning
      >
        {time}
      </Typography>
      <Typography
        variant="h3"
        className={`font-normal text-cs-green-900 `}
      >
        {title}
      </Typography>
    </div>
  );
}

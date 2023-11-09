import Typography from '@/libs/Typography';
import React from 'react';
import {
  Great_Vibes,
  Playball,
  Plus_Jakarta_Sans,
  Sriracha,
} from 'next/font/google';

const timeFont = Playball({ weight: '400', subsets: ['vietnamese'] });
const timeTitle = Plus_Jakarta_Sans({ weight: '400', subsets: ['vietnamese'] });
type TimeBoxProps = {
  time: string;
  title: string;
};

export default function TimeBox({ time, title }: TimeBoxProps) {
  return (
    <div
      className="flex flex-col p-2 md:gap-10 xs:gap-5 justify-center items-center border-2 rounded-2xl border-title bg-cs-green-300
    md:min-h-[10rem] xs:min-h-[7rem] 
    md:min-w-[9rem] xs:min-w-[6.5rem]"
    >
      <Typography
        variant="desc"
        className={`font-light md:!text-6xl xs:!text-5xl text-title/[.75] ${timeFont.className}`}
      >
        {time}
      </Typography>
      <Typography
        variant="h3"
        className={`font-normal text-cs-green-900 ${timeTitle.className}`}
      >
        {title}
      </Typography>
    </div>
  );
}

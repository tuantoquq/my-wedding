'use client';
import React, { useEffect, useState } from 'react';
import TimeBox from './time-box';
import { SectionHeadingImage } from '@/layout/section-heading';
import Typography from '@/libs/Typography';
import Divider from '@/layout/divider';

export function CountdownTimer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2023-12-01T23:59:59');
    const interval = setInterval(() => {
      const now = new Date();
      let difference = targetDate.getTime() - now.getTime();
      if (difference < 0) {
        difference = -difference;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getStringTime(time: number) {
    if (time < 10) {
      return `0${time}`;
    }
    return time.toString();
  }

  return (
    <div
      className="text-center sm:pt-10 w-full flex flex-col items-center 
      before:absolute before:w-full before:h-full before:bg-auto before:bg-[url('/white-flower.png')] before:bg-center before:bg-no-repeat before:opacity-70"
    >
      <SectionHeadingImage className="mt-10 !mb-0 z-50">
        Save the date
      </SectionHeadingImage>
      <div className="flex justify-center items-center gap-4 min-h-[3rem] z-50">
        <Divider className="md:h-[3px] xs:h-[2px] md:w-15 xs:w-10 !bg-cs-green-900" />
        <Typography
          variant="h3"
          className="font-normal text-cs-green-900 xs:!text-2xl md:!text-3xl italic"
        >
          02/12/2023
        </Typography>
        <Divider className="md:h-[3px] xs:h-[2px] md:w-15 xs:w-10 !bg-cs-green-900" />
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 gap-6 w-fit z-50">
        <TimeBox time={getStringTime(days)} title="Ngày" />
        <TimeBox time={getStringTime(hours)} title="Giờ" />
        <TimeBox time={getStringTime(minutes)} title="Phút" />
        <TimeBox time={getStringTime(seconds)} title="Giây" />
      </div>
    </div>
  );
}

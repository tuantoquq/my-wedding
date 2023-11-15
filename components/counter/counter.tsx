'use client';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import TimeBox from './time-box';
import { SectionHeadingImage } from '@/layout/section-heading';
import Typography from '@/libs/Typography';
import Divider from '@/layout/divider';

export function CountdownTimer() {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateTimeRemaining() {
    const targetDate = moment('2023-12-01T23:59:59'); // Replace with your target date
    const now = moment().utcOffset('+07:00', true);
    const duration = moment.duration(targetDate.diff(now));

    const totalSeconds = duration.asSeconds();

    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }
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
        <TimeBox time={getStringTime(timeRemaining.days)} title="Ngày" />
        <TimeBox time={getStringTime(timeRemaining.hours)} title="Giờ" />
        <TimeBox time={getStringTime(timeRemaining.minutes)} title="Phút" />
        <TimeBox time={getStringTime(timeRemaining.seconds)} title="Giây" />
      </div>
    </div>
  );
}

import { Button } from '@/libs/Button';
import Typography from '@/libs/Typography';
import React from 'react';
import { FaClock } from 'react-icons/fa';
import { FaC, FaLocationDot } from 'react-icons/fa6';

export type PartyItemProps = {
  house: 'NHÀ TRAI' | 'NHÀ GÁI';
  hour: string;
  minute: string;
  date: string;
  address: string;
  location: string;
};

export default function PartyItem({
  house,
  hour,
  minute,
  date,
  address,
  location,
}: PartyItemProps) {
  return (
    <div
      className={`basis-full sm:basis-5/12 lg:basis-1/3 fhd:basis-[28%] mb-10`}
    >
      <div className="z-10 flex flex-col gap-5 pb-5 md:pb-10 lg:px-16 items-center bg-cs-green-300 h-full w-full shadow-[0_0px_25px_0px_rgba(0,0,0,0.2)]">
        <Typography
          variant="h3"
          className="!font-bold md:!text-3xl xs:!text-2xl mt-10"
        >
          {house}
        </Typography>
        <Typography variant="h4">
          ĐƯỢC TỔ CHỨC VÀO LÚC {hour} GIỜ {minute}
          {"'"}
        </Typography>
        <div className="flex justify-center items-center flex-row gap-2">
          <FaClock className="text-description" />
          <Typography
            variant="h3"
            className="!font-semibold !text-2xl xs:!text-xl"
          >
            {date}
          </Typography>
        </div>
        <Typography variant="desc" className="!italic">
          -- Tức Ngày 19 Tháng 10 Năm Quý Mão --
        </Typography>
        <div className="flex justify-center items-center flex-row gap-2">
          <FaLocationDot className="text-description" />
          <Typography variant="desc">{address}</Typography>
        </div>
        <Button onClick={() => window.open(location)} className="mt-3">
          Xem bản đồ
        </Button>
        <Typography variant="desc" className="!italic">
          Rất hân hạnh được đón tiếp!
        </Typography>
      </div>
    </div>
  );
}

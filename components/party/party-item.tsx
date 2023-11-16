import { Button } from '@/libs/Button';
import Typography from '@/libs/Typography';
import React from 'react';
import { FaClock } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

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
      className={`basis-full sm:basis-5/12 lg:basis-[35%] fhd:basis-[30%] mb-10`}
    >
      <div
        className={`z-10 flex flex-col gap-5 pb-5 md:pb-10 lg:px-16 items-center
       h-full w-full shadow-[0_0px_25px_0px_rgba(0,0,0,0.2)] relative
       bg-cover bg-no-repeat  ${
         house === 'NHÀ TRAI'
           ? "bg-[center_top_35%] bg-[url('https://i.imgur.com/Zzy4jTv.jpg')]"
           : "bg-[center_top_25%] bg-[url('https://i.imgur.com/LrBeJJ4.jpg')]"
       }
       rounded-lg
       `}
      >
        <div className="w-full h-full absolute z-10 bg-cs-green-300 opacity-[65%] rounded-lg"></div>
        <Typography
          variant="h3"
          className="!font-bold md:!text-3xl xs:!text-2xl mt-10 z-20"
        >
          {house}
        </Typography>
        <Typography variant="h4" className="z-20">
          ĐƯỢC TỔ CHỨC VÀO LÚC {hour} GIỜ {minute}
          {"'"}
        </Typography>
        <div className="flex justify-center items-center flex-row gap-2 z-20">
          <FaClock className="text-secondary-cl" />
          <Typography
            variant="h3"
            className="!font-semibold !text-2xl xs:!text-xl"
          >
            {date}
          </Typography>
        </div>
        <Typography
          variant="desc"
          className="!italic z-20 !font-semibold !text-gray-700"
        >
          -- Tức Ngày 19 Tháng 10 Năm Quý Mão --
        </Typography>
        <div className="flex justify-center items-center flex-row gap-2 z-20">
          <FaLocationDot className="text-secondary-cl" />
          <Typography
            variant="desc"
            className="!font-semibold !text-secondary-cl"
          >
            {address}
          </Typography>
        </div>
        <Button onClick={() => window.open(location)} className="mt-3 z-20">
          Xem bản đồ
        </Button>
        <Typography
          variant="desc"
          className="!italic z-20 !font-semibold !text-gray-600"
        >
          Rất hân hạnh được đón tiếp!
        </Typography>
      </div>
    </div>
  );
}

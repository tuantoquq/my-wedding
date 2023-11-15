import React from 'react';
import Image from 'next/image';
import Typography from '@/libs/Typography';
import { Button } from '@/libs/Button';
import { FaClock } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import moment from 'moment';

type Props = {
  item: {
    image: any;
    title: string;
    date: string;
    time: string;
    location: string;
    mapUrl: string;
  };
};

export default function ItemEvent({
  item: { image, title, time, date, location, mapUrl },
}: Props) {
  const currentDate = moment();
  const dateMoment = moment(date, 'DD/MM/YYYY');

  return (
    <div className={`basis-full sm:basis-5/12 lg:basis-1/3 mb-10 `}>
      <div className="z-10 flex flex-col gap-5 pb-5 md:pb-10 items-center bg-cs-green-300 h-full w-full shadow-[0_0px_25px_0px_rgba(0,0,0,0.2)]">
        <div className="w-full shrink-0 flex justify-center relative">
          <Image
            className="w-full aspect-square rounded-lg object-center object-cover shadow-none"
            src={image}
            priority
            alt=""
          />
          <div className="w-[85%] flex justify-end aspect-square border-2 border-cs-green-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-cs-green-500/90 w-min h-min px-3 py-2">
              <Typography variant="desc" className="font-medium">
                {date}
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <Typography className="font-medium mb-3" variant="h3">
            {title}
          </Typography>
          {currentDate > dateMoment ? (
            <></>
          ) : (
            <>
              <div className="flex flex-row gap-2 items-center justify-center">
                <FaClock className="text-description" />
                <Typography variant="desc" className="md:!text-sm">
                  {time}
                </Typography>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center">
                <FaLocationDot className="text-description" />
                <Typography variant="desc" className="md:!text-sm">
                  {location}
                </Typography>
              </div>
              <Button onClick={() => window.open(mapUrl)} className="mt-3">
                Xem bản đồ
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

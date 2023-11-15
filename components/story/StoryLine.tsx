import React from 'react';
import Image from 'next/image';
import Typography from '@/libs/Typography';

type Props = {
  title: string;
  description: string;
  year: string | Array<string>;
  index: number;
  image: any;
};

export default function StoryLine({
  image,
  title,
  description,
  year,
  index,
}: Props) {
  return index % 2 === 0 ? (
    <div
      className={`z-10 w-full p-5 sm:p-10 flex flex-col md:flex-row gap-5 relative items-center shadow-[0_0px_80px_-20px_rgba(0,0,0,0.2)] justify-between`}
    >
      <div className="basis-full md:basis-5/12 shrink-0 flex justify-center">
        <Image
          className="w-full aspect-square rounded-lg object-center object-cover shadow-none"
          src={image}
          priority
          alt=""
        />
      </div>

      {typeof year === 'string' ? (
        <div className="w-20 h-7 flex justify-center items-center rounded-md bg-cs-green-700">
          <Typography className="font-medium text-description" variant="desc">
            {year}
          </Typography>
        </div>
      ) : (
        <div className="w-20 h-14 flex flex-col justify-center items-center rounded-md bg-cs-green-700">
          <Typography className="font-medium text-description" variant="desc">
            {year[0]}
          </Typography>
          <Typography className="font-medium text-description" variant="desc">
            {year[1]}
          </Typography>
        </div>
      )}

      <div className="basis-full md:basis-5/12">
        <Typography className="font-medium pb-5" variant="h3">
          {title}
        </Typography>
        <div className="bg-cs-green-100 relative md:px-10 p-5 rounded-2xl">
          <Typography variant="desc">{description}</Typography>
        </div>
      </div>
    </div>
  ) : (
    <div
      className={`z-10 w-full p-5 sm:p-10 flex flex-col md:flex-row-reverse gap-5 items-center shadow-[0_0px_80px_-20px_rgba(0,0,0,0.2)] justify-between relative`}
    >
      <div className="basis-full md:basis-5/12 shrink-0 flex justify-center">
        <Image
          className="w-full aspect-square rounded-lg object-center object-cover shadow-none"
          src={image}
          priority
          alt=""
        />
      </div>

      <div className="w-20 h-7 flex justify-center items-center rounded-md bg-cs-green-700">
        <Typography className="font-medium text-description" variant="desc">
          {year}
        </Typography>
      </div>

      <div className="basis-full md:basis-5/12">
        <Typography className="font-medium pb-5" variant="h3">
          {title}
        </Typography>
        <div className="bg-cs-green-100 relative md:px-10 p-5 rounded-2xl">
          <Typography variant="desc">{description}</Typography>
        </div>
      </div>
    </div>
  );
}

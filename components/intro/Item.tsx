import React from 'react';
import Image from 'next/image';
import Typography from '@/libs/Typography';
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

type ItemProps = {
  image: any;
  description?: string;
  name: string;
  facebook: string;
  instagram: string;
};

export default function Item({
  image,
  description,
  name,
  facebook,
  instagram,
}: ItemProps) {
  return (
    <div className="basis-1/2 h-full flex flex-col relative justify-center items-center">
      <Image
        className="xs:w-64 xs:h-64 sm:w-80 sm:h-80 rounded-full border-4 border-cs-green-700 z-10 object-center object-cover"
        src={image}
        priority
        alt=""
      />

      <div className="bg-cs-green-100 relative xs:-mt-32 sm:-mt-40 xs:pt-36 sm:pt-48 pb-10 md:px-10 px-5 rounded-2xl flex flex-col gap-2 md:gap-5 h-full">
        <Typography className="font-medium" variant="h2">
          {name}
        </Typography>
        <Typography variant="desc" className="h-[6rem]">
          {description}
        </Typography>
        <div className="flex flex-row justify-center items-center gap-2">
          <Link href={`${facebook}`}>
            <FaFacebook className="text-3xl text-secondary-cl" />
          </Link>
          <Link href={`${instagram}`}>
            <FaInstagram className="text-3xl text-secondary-cl " />
          </Link>
        </div>
      </div>
    </div>
  );
}

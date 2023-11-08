import Image, { StaticImageData } from 'next/image';
import React from 'react';

type AlbumImageProps = {
  imageUrl: StaticImageData;
};
export default function AlbumImage({ imageUrl }: AlbumImageProps) {
  return (
    <div className='h-[24rem] lg:h-[32rem] flex justify-center items-center px-20 bg-transparent'>
      <Image
        src={imageUrl}
        alt="My wedding images"
        quality={95}
        priority
        className="h-full w-full rounded-lg shadow-2xl transition
      hover:shadow-3xl hover:scale-105 duration-300 ease-in-out object-contain object-center
      hover:cursor-pointer bg-transparent"
      />
    </div>
  );
}

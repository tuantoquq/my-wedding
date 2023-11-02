import Image, { StaticImageData } from 'next/image';
import React from 'react';

type AlbumImageProps = {
  imageUrl: StaticImageData;
};
export default function AlbumImage({ imageUrl }: AlbumImageProps) {
  return (
    <Image
      src={imageUrl}
      alt="My wedding images"
      quality={95}
      className="w-1/2 h-1/2 rounded-lg shadow-2xl transition
      hover:shadow-3xl hover:scale-105 duration-300 ease-in-out object-cover object-center
      hover:cursor-pointer"
    />
  );
}

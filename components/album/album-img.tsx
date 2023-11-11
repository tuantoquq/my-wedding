'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useRef } from 'react';

type AlbumImageProps = {
  imageUrl: StaticImageData;
};

function AlbumImage({ imageUrl }: AlbumImageProps) {

  return (
    <AnimatePresence mode='popLayout' >
      <motion.div
        key={imageUrl.src}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type:'spring',
          duration: 3
        }}
        className='h-[24rem] sm:h-[28rem] lg:h-[32rem] flex justify-center items-center px-10 bg-transparent'
      >
        <Image
          src={imageUrl}
          alt="My wedding images"
          quality={95}
          priority
          className="h-full w-full rounded-lg shadow-2xl transition
      hover:shadow-3xl hover:scale-105 duration-300 ease-in-out object-contain object-center
      hover:cursor-pointer bg-transparent"
        />
      </motion.div>
    </AnimatePresence>
  );
}

export default AlbumImage;
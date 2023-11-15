'use client';

import { albumUrls } from '@/utils/data';
import { AnimatePresence, motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

type AlbumImageProps = {
  selected: number;
};

function AlbumImage({ selected }: AlbumImageProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={selected}
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: 'linear',
          duration: 0.4,
        }}
        className="h-[24rem] sm:h-[28rem] lg:h-[32rem] flex justify-center items-center px-10 bg-transparent"
      >
        <Image
          src={albumUrls[selected]}
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

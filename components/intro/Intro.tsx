'use client';

import React from 'react';
import { useSectionInView } from '@/hooks/hooks';
import Item from './Item';
import { couple } from '@/utils/data';
import Image from 'next/image';
export default function Intro() {
  const { ref } = useSectionInView({ sectionName: 'Giới thiệu' });
  const { groom, bride } = couple;

  return (
    <section
      ref={ref}
      className="w-full bg-cs-green-300 text-center pb-20 pt-32 md:pt-40 "
      id="intro"
    >
      <div className="w-full xs:px-5 sm:px-10 lg:px-40 flex xs:flex-col md:flex-row justify-between gap-10 relative">
        <Item
          image={groom.image}
          description={groom.description}
          name={groom.name}
          facebook={groom.facebook}
          instagram={groom.instagram}
        />

        <div className="w-full h-auto md:absolute lg:top-0 left-0 right-0 flex justify-center sm:top-[40%] z-50">
          <Image
            src={'/icon/heart-1@2x.png'}
            alt=""
            className="lg:w-40 md:w-34 w-32 h-auto animate-[heartBeat_2s_linear_infinite]"
            width={2275}
            height={1365}
          />
        </div>

        <Item
          image={bride.image}
          description={bride.description}
          name={bride.name}
          facebook={bride.facebook}
          instagram={bride.instagram}
        />
      </div>
    </section>
  );
}

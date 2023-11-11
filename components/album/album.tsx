'use client';

import React, { useState, useRef } from 'react';
import { useSectionInView } from '@/hooks/hooks';
import { albums } from '@/utils/data';
import AlbumImage from './album-img';
import { SectionHeading } from '@/layout/section-heading';
import Gallery from '@/libs/Slide/Gallery';
import Typography from '@/libs/Typography';

export default function Album() {
  const { ref } = useSectionInView({ sectionName: 'Album cưới' });
  const [selected, setSelected] = useState<number>(0);

  return (
    <section ref={ref} className="text-center pb-10" id="album">
      <SectionHeading className='sm:!mb-2 md:!mb-4 mt-10 md:mt-20'>Album Cưới</SectionHeading>
      <Typography variant="desc" className="mb-12">Dưới đây là demo album cưới của chúng mình...</Typography>
      <div className="flex gap-4 flex-wrap justify-center width-full">
        <AlbumImage selected={selected} />
        <Gallery
          items={[...albums]}
          selected={selected}
          onSelect={setSelected}
        />
      </div>
    </section>
  );
}

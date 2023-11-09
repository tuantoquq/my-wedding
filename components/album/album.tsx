'use client';

import React, { useState } from 'react';
import { useSectionInView } from '@/hooks/hooks';
import { albums } from '@/utils/data';
import AlbumImage from './album-img';
import { SectionHeading } from '@/layout/section-heading';
import Gallery from '@/libs/Slide/Gallery';
export default function Album() {
  const { ref } = useSectionInView({ sectionName: 'Album cưới' });
  const [selected, setSelected] = useState<number>(0);

  return (
    <section ref={ref} className="mb-28 text-center sm:mb-20 " id="album">
      <SectionHeading>Album Cưới</SectionHeading>
      <div className="mb-20">Dưới đây là demo album cưới của chúng tôi...</div>
      <div className="flex gap-4 flex-wrap justify-center">
        <AlbumImage imageUrl={albums[selected]} />
        <Gallery
          items={[...albums]}
          selected={selected}
          onSelect={setSelected}
        />
      </div>
    </section>
  );
}

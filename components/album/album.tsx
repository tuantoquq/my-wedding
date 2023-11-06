'use client';

import React from 'react';
import { useSectionInView } from '@/hooks/hooks';
import { albums } from '@/utils/data';
import AlbumImage from './album-img';
import SectionHeading from '../../layout/section-heading';

export default function Album() {
  const { ref } = useSectionInView({ sectionName: 'Album cưới' });

  return (
    <section
      ref={ref}
      className="mb-28 text-center sm:mb-20 "
      id="album"
    >
      <SectionHeading>Album Cưới</SectionHeading>
      <div className="mb-20">Dưới đây là demo album cưới của chúng tôi...</div>
      <div className="flex gap-4 flex-wrap justify-center">
        {albums.map((album, index) => (
          <React.Fragment key={index}>
            <AlbumImage imageUrl={album} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

'use client';
import React from 'react';
import { useSectionInView } from '@/hooks/hooks';
import { albumUrls } from '@/utils/data';
import { SectionHeadingImage } from '@/layout/section-heading';
import Typography from '@/libs/Typography';
import ImageGrid from './image-grid';

export default function Gallery() {
  const { ref } = useSectionInView({ sectionName: 'Album cưới' });

  return (
    <section ref={ref} className="text-center pb-10" id="album">
      <SectionHeadingImage className="sm:!mb-2 md:!mb-4 mt-20">
        Album Cưới
      </SectionHeadingImage>
      <Typography variant="desc" className="mb-12">
        Dưới đây là demo album cưới của chúng mình...
      </Typography>
      <ImageGrid images={albumUrls} />
    </section>
  );
}

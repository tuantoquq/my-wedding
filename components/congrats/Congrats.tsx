'use client';
import { useSectionInView } from '@/hooks/hooks';
import { SectionHeadingImage } from '@/layout/section-heading';
import React from 'react';
export default function Congrats() {
  const { ref } = useSectionInView({ sectionName: 'Lời cảm ơn' });

  return (
    <section
      ref={ref}
      className="max-w-[50rem] text-center sm:pt-10"
      id="congrats"
    >
      <SectionHeadingImage className='mt-10'>Lời Cảm Ơn</SectionHeadingImage>
      
    </section>
  );
}

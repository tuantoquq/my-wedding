'use client';
import { useSectionInView } from '@/hooks/hooks';
import SectionHeading from '@/layout/section-heading';
import React from 'react';
export default function Congrats() {
  const { ref } = useSectionInView({ sectionName: 'Lời cảm ơn' });

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-20"
      id="congrats"
    >
      <SectionHeading>Lời Cảm Ơn</SectionHeading>
    </section>
  );
}

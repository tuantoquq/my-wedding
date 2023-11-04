'use client';

import React from 'react';
import { useSectionInView } from '@/hooks/hooks';
import SectionHeading from '../../layout/section-heading';


export default function Events() {
  const { ref } = useSectionInView({ sectionName: 'Sự kiện' });

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-20 "
      id="events"
    >
      <SectionHeading>Sự Kiện</SectionHeading>
      <div className="flex gap-4 flex-wrap justify-center">
        1234
      </div>
    </section>
  );
}

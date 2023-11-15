'use client';

import React from 'react';
import { useSectionInView } from '@/hooks/hooks';
import { SectionHeading } from '@/layout/section-heading';
import { events } from '@/utils/data';
import ItemEvent from './ItemEvent';

export default function Events() {
  const { ref } = useSectionInView({ sectionName: 'Sự kiện' });

  return (
    <section
      ref={ref}
      className="w-full bg-white text-center sm:pt-10 mt-10"
      id="events"
    >
      <SectionHeading className="mt-10 md:mt-15 !mb-[3rem]">
        Ngày trọng đại của chúng mình
      </SectionHeading>
      <div className="w-full sm:px-10 xs:px-5 md:px-32 lg:px-48 sm:gap-5 md:gap-10 lg:gap-14 flex flex-wrap flex-row justify-center relative">
        {events.map((item, index) => (
          <ItemEvent key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

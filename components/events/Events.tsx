'use client';

import React from 'react';
import { useSectionInView } from '@/hooks/hooks';
import SectionHeading from '../../layout/section-heading';
import { events } from '@/utils/data';
import ItemEvent from './ItemEvent';


export default function Events() {
  const { ref } = useSectionInView({ sectionName: 'Sự kiện' });

  return (
    <section
      ref={ref}
      className="sm:mb-32 xs:mb-10 w-full bg-white text-center pb-20 pt-10"
      id="events"
    >
      <SectionHeading>Sự Kiện</SectionHeading>
      <div className="w-full px-5 sm:px-10 md:px-32 lg:px-48 flex flex-wrap flex-row justify-center relative">
        {
          events.map((item, index) => (
            <ItemEvent key={index} item={item} />
          ))
        }
      </div>
    </section>
  );
}

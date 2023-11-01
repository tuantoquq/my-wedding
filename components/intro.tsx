'use client';

import React from 'react';
import { useSectionInView } from '@/libs/hooks';
export default function Intro() {
  const { ref } = useSectionInView({ sectionName: 'Giới thiệu' });
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="intro"
    >
      <h3 className="font-semibold text-lg text-blue-500">
        Our Wedding website is coming soon ...
      </h3>
    </section>
  );
}

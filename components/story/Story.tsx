'use client';

import React from 'react';
import { useSectionInView } from '@/hooks/hooks';
import { storyLine } from '@/utils/data';
import SectionHeading from '../../layout/section-heading';


export default function Story() {
  const { ref } = useSectionInView({ sectionName: 'Album cưới' });

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-20 scroll-mt-[100rem]"
      id="story"
    >
      <SectionHeading>Chuyện Tình Yêu Chúng Mình</SectionHeading>
      <div className="flex gap-4 flex-wrap justify-center">
        {storyLine.map((chapter, index) => (
          <React.Fragment key={index}>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

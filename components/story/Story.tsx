'use client';

import React from 'react';
import { useSectionInView } from '@/hooks/hooks';
import { storyLine } from '@/utils/data';
import SectionHeading from '@/layout/section-heading';
import StoryLine from './StoryLine';
import { useWindowSize } from '@/hooks/useWindowSize';
import Welcome from './Welcome';

export default function Story() {
  const { ref } = useSectionInView({ sectionName: 'Chuyện tình yêu' });
  const { isBelowMd } = useWindowSize();

  return (
    <section
      ref={ref}
      className="sm:mb-32 xs:mb-10 w-full bg-white text-center pb-20 pt-10"
      id="story"
    >
      <SectionHeading>Chuyện Tình Yêu Chúng Mình</SectionHeading>
      <div className="w-full px-5 sm:px-10 lg:px-48 flex flex-col justify-between gap-10 relative">
        {storyLine.map((chapter, index) => (
          <React.Fragment key={index}>
            <StoryLine {...chapter} index={index} />
          </React.Fragment>
        ))}
        {!isBelowMd && (
          <div className="bg-cs-green-700 rounded-full absolute w-[3px] h-full top-0 left-1/2 -translate-x-1/2 z-5" />
        )}
      </div>
      <Welcome />
    </section>
  );
}

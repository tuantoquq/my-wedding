'use client';

import React from 'react';
import { useSectionInView } from '@/hooks/hooks';
import { SectionHeading } from '@/layout/section-heading';
import WishForm from './wish-form';
import WishList from './wish-list';

export default function Wishes() {
  const { ref } = useSectionInView({ sectionName: 'Lời chúc' });
  return (
    <section ref={ref} className="max-w-[100rem] text-center mt-10" id="wishes">
      <SectionHeading className="mt-10 md:mt-20">
        Gửi Lời Yêu Thương
      </SectionHeading>
      <div
        className="flex gap-2 justify-center
      sm:items-stretch sm:flex-col 
      xs:items-center xs:flex-col 
      md:items-stretch  md:flex-row"
      >
        <div className="xs:px-5 md:w-1/2">
          <WishForm />
        </div>
        <div className="xs:w-full xs:px-5 md:w-1/2">
          <WishList />
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { useSectionInView } from '@/libs/hooks';
import SectionHeading from '../section-heading';
import WishForm from './wish-form';
import WishList from './wish-list';
export default function Wishes() {
  const { ref } = useSectionInView({ sectionName: 'Lời chúc' });
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[100rem] sm:mb-20 scroll-mt-[100rem]"
      id="wishes"
    >
      <SectionHeading>Sổ lưu bút</SectionHeading>
      <div className="flex flex-row gap-2">
        <WishForm />
        <WishList />
      </div>
    </section>
  );
}

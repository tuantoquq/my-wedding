'use client';

import React from 'react';
import { useSectionInView } from '@/hooks/hooks';
import { SectionHeading } from '@/layout/section-heading';
import WishForm from './wish-form';
import WishList from './wish-list';

export default function Wishes() {
  const { ref } = useSectionInView({ sectionName: 'Lời chúc' });
  const [isNeedReload, setIsNeedReload] = React.useState(false);
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[100rem] sm:mb-20 pt-[10rem] text-center"
      id="wishes"
    >
      <SectionHeading>Sổ lưu bút</SectionHeading>
      <div
        className="flex gap-2 justify-center
      sm:items-stretch sm:flex-col 
      xs:items-center xs:flex-col 
      md:items-stretch  md:flex-row"
      >
        <div className="xs:px-5 md:w-1/2">
          <WishForm
            callDone={(status: any) => {
              setIsNeedReload(status);
            }}
          />
        </div>
        <div className="xs:w-full xs:px-5 md:w-1/2">
          <WishList reload={isNeedReload} />
        </div>
      </div>
    </section>
  );
}

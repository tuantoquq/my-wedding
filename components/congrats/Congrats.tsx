'use client';
import { useSectionInView } from '@/hooks/hooks';
import { SectionHeadingImage } from '@/layout/section-heading';
import Typography from '@/libs/Typography';
import React from 'react';
export default function Congrats() {
  const { ref } = useSectionInView({ sectionName: 'Lời cảm ơn' });

  return (
    <section
      ref={ref}
      className="mb-16 max-w-[50rem] text-center sm:pt-10"
      id="congrats"
    >
      <SectionHeadingImage className="mt-10">Lời Cảm Ơn</SectionHeadingImage>
      <Typography variant="desc">
        {`Chúng mình xin chân thành cảm ơn các anh, chị, em và các bạn đã đến và
        chúc mừng chúng mình trong ngày lễ trọng đại này. Trong lúc công việc
        bận rộn, nếu có gì thiếu xót mong mọi người bỏ qua và thông cảm cho
        chúng mình nhé! Cảm ơn mọi người rất nhiều!!!
        💚💚💚`}
      </Typography>
    </section>
  );
}

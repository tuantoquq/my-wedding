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
      <Typography variant="desc" className="p-6">
        Tuấn và Bích xin gửi lời cảm ơn chân thành tới Bố Mẹ, Gia đình, các Anh
        Chị Em, Bạn bè hai bên đã luôn dõi theo, ủng hộ và chúc phúc cho hành
        trình yêu nhau và đến bến bờ hạnh phúc của chúng con/chúng mình. Tuấn và
        Bích hy vọng tình yêu thương của tất cả mọi người sẽ luôn đong đầy để
        chúng con/chúng mình sẽ luôn vững vàng trên hành trình vun đắp hạnh phúc
        đến đầu bạc răng long… Chúc cho tất cả những người thân yêu xung quanh
        thật nhiều niềm vui và sức khoẻ. Hẹn gặp mọi người tại ngày cưới của
        Tuấn và Bích nhé!
      </Typography>
      <p>💚💚💚💚</p>
    </section>
  );
}

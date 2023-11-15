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
        Tuấn và Bích xin gửi lời cảm ơn chân thành tới Bố Mẹ, Gia đình hai bên,
        tới các Anh Chị Em, Bạn bè đã luôn dõi theo, ủng hộ và chúc phúc cho
        hành trình yêu nhau của chúng con/chúng mình để hành trình đó đến được
        bến bờ hạnh phúc. Tuấn và Bích hy vọng sẽ luôn được nhận tình yêu thương
        của tất cả mọi người để hành trình này của chúng con/chúng mình tiếp tục
        hạnh phúc đến mãi mãi… Chúc cho mọi người thật nhiều niềm vui và sức
        khoẻ. Xin hẹn gặp mọi người tại đám cưới của Tuấn và Bích nhe!
      </Typography>
      <p>💚💚💚</p>
    </section>
  );
}

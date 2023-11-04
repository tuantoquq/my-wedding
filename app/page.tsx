import Album from '@/components/album/album';
import Intro from '@/components/intro/intro';
import SectionDivider from '@/layout/section-divider';
import Wishes from '@/components/wish/wishes';
import Story from '@/components/story/Story';
import Events from '@/components/events/Events';
import Congrats from '@/components/congrats/Congrats';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      {/* <SectionDivider /> */}
      <Story />
      {/* <SectionDivider/> */}
      <Events />
      {/* <SectionDivider /> */}
      <Album />
      {/* <SectionDivider /> */}
      <Wishes />
      {/* <SectionDivider /> */}
      <Congrats />
    </main>
  );
}

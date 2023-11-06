import Album from '@/components/album/album';
import Intro from '@/components/intro/Intro';
import SectionDivider from '@/layout/section-divider';
import Wishes from '@/components/wish/wishes';
import Story from '@/components/story/Story';
import Events from '@/components/events/Events';
import Congrats from '@/components/congrats/Congrats';
import Carousel from '@/libs/Slide/Carousel';
import { slides } from '@/utils/data';
import SaveDateCircle from '@/components/main/save-date-circle';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Carousel slides={slides} />
      <SaveDateCircle />
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

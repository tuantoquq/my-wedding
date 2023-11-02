import Album from '@/components/album/album';
import Intro from '@/components/intro';
import SectionDivider from '@/components/section-divider';
import Wishes from '@/components/wish/wishes';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <SectionDivider />
      <Album />
      <Wishes />
    </main>
  );
}

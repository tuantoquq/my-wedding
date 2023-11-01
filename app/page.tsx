import Album from '@/components/album';
import Intro from '@/components/intro';
import SectionDivider from '@/components/section-divider';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <SectionDivider />
      <Album />
    </main>
  );
}

import Album from '@/components/album/album';
import Intro from '@/components/intro/Intro';
import Divider from '@/layout/divider';
import Wishes from '@/components/wish/wishes';
import Story from '@/components/story/Story';
import Events from '@/components/events/Events';
import Congrats from '@/components/congrats/Congrats';
import Carousel from '@/libs/Slide/Carousel';
import { slides } from '@/utils/data';
import SaveDateCircle from '@/components/main/save-date-circle';
import 'react-toastify/dist/ReactToastify.css';
// import HeartFalling from '@/components/main/heart-fall';
import { CountdownTimer } from '@/components/counter/counter';
import FeatureButtons from '@/components/feature-btns/feature-btns';
import Gift from '@/components/gift/gift';
import dynamic from 'next/dynamic';
import { ToastContainer } from 'react-toastify';

const HeartFalling = dynamic(() => import('@/components/main/heart-fall'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Carousel slides={slides} />
      <SaveDateCircle />
      <HeartFalling />
      <Intro />
      <CountdownTimer />
      <FeatureButtons />
      <Story />
      <Events />
      <Album />
      <Wishes />
      <Congrats />
      <Gift />
      <ToastContainer />
    </main>
  );
}

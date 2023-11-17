'use client';
import React from 'react';
import { BsVolumeMuteFill, BsVolumeUpFill } from 'react-icons/bs';
import Typography from '@/libs/Typography';

export default function Footer() {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [isPause, setIsPause] = React.useState(true);
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleMouseClick = (pause: boolean) => {
    setIsPause(pause);
    if (pause) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
  };
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; tuannha & bichnobi 2023. All right reserved.
      </small>
      <p className="text-xs">
        <span className="font-normal">
          Thanks for supporting us to build this website @doanhlinh.
        </span>
      </p>
      <div
        className={`fixed z-[100] md:bottom-10 md:left-10 xs:bottom-5 xs:left-5 flex opacity-80 p-4 gap-2 hover:cursor-pointer text-[1.35rem]
        bg-green-500 text-white justify-center items-center rounded-full hover:opacity-100 ${
          isPause ? 'bg-red-600' : 'bg-green-600'
        }
        `}
      >
        <div
          className={`absolute rounded-full ${
            isPause ? 'bg-red-300' : 'bg-green-300'
          } animate-[borderTransform_1.5s_linear_infinite] z-[80] opacity-40`}
        ></div>
        {isVisible && (
          <Typography
            variant="desc"
            className={`absolute w-[15rem] md:left-10 xs:left-5 top-0 bottom-0 !font-semibold
          !text-black animate-slide-in-right
          text-center justify-center items-center flex z-[10]
           `}
          >
            Bấm vào đây để phát nhạc!
          </Typography>
        )}
        <audio
          controls
          src="https://res.cloudinary.com/devoro1vn/video/upload/v1698862626/wedding_music.mp3"
          autoPlay={!isPause}
          hidden
          className="scale-90 z-[90]"
          loop
          ref={audioRef}
        ></audio>
        {isPause ? (
          <BsVolumeMuteFill
            className="z-[90] overflow-hidden"
            onClick={() => handleMouseClick(!isPause)}
          />
        ) : (
          <BsVolumeUpFill
            className="z-[90] overflow-hidden"
            onClick={() => handleMouseClick(!isPause)}
          />
        )}
      </div>
    </footer>
  );
}

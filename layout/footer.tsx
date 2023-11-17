'use client';
import React from 'react';
import { BsVolumeMuteFill, BsVolumeUpFill } from 'react-icons/bs';
import Typography from '@/libs/Typography';

export default function Footer() {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [isPause, setIsPause] = React.useState(true);
  const [isVisible, setIsVisible] = React.useState(true);
  const [isClose, setIsClose] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  React.useEffect(() => {
    const timerClose = setTimeout(() => {
      setIsClose(true);
    }, 4000);

    return () => {
      clearTimeout(timerClose);
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
        className={`fixed z-[100] md:bottom-10 md:left-10 xs:bottom-5 xs:left-5 flex opacity-80 hover:cursor-pointer
        text-white justify-start rounded-full hover:opacity-100 
        `}
      >
        <div
          className={`absolute rounded-full h-full aspect-square pointer-events-none ${
            isPause ? 'bg-red-300' : 'bg-green-300'
          } animate-[borderTransform_1.5s_linear_infinite] z-[95] opacity-40`}
        ></div>
        <div
          className={`flex relative justify-center items-center rounded-full z-[90]  flex-row-reverse overflow-x-hidden`}
        >
          {isVisible && (
            <Typography
              variant="desc"
              className={`p-2.5 -ml-12 !font-semibold md:w-[17rem] md:pl-14 xs:w-[15rem] xs:pl-10
          !text-black ${
            isClose ? 'animate-slide-in-left' : 'animate-slide-in-right'
          }
          bg-white
          ${
            isPause ? 'border-red-600' : 'border-green-600'
          } border-2 rounded-3xl
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
            <div className="bg-red-600 text-[1.25rem] p-4 rounded-full z-[90]">
              <BsVolumeMuteFill onClick={() => handleMouseClick(!isPause)} />
            </div>
          ) : (
            <div className="bg-green-600 text-[1.25rem] p-4 rounded-full z-[90]">
              <BsVolumeUpFill onClick={() => handleMouseClick(!isPause)} />
            </div>
          )}
        </div>
        {isPause ? (
          <div className="bg-red-600 text-[1.25rem] p-4 rounded-full z-[100] pointer-events-none absolute">
            <BsVolumeMuteFill />
          </div>
        ) : (
          <div className="bg-green-600 text-[1.25rem] p-4 rounded-full z-[100] pointer-events-none absolute">
            <BsVolumeUpFill />
          </div>
        )}
      </div>
    </footer>
  );
}

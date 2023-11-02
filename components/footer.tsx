'use client';
import React from 'react';
import { BsVolumeMuteFill, BsVolumeUpFill } from 'react-icons/bs';

export default function Footer() {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [isPause, setIsPause] = React.useState(true);

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
        className={`fixed bottom-10 right-10 flex opacity-80 p-4 gap-2 hover:cursor-pointer text-[1.35rem]
        bg-green-500 text-white items-center rounded-full hover:opacity-100 ${
          isPause ? 'bg-red-500' : 'bg-green-500'
        }`}
        onClick={() => handleMouseClick(!isPause)}
      >
        <audio
          controls
          src="https://res.cloudinary.com/devoro1vn/video/upload/v1698862626/music_smeyse.mp3"
          autoPlay
          hidden
          className="scale-90"
          loop
          ref={audioRef}
        ></audio>
        {isPause ? <BsVolumeMuteFill /> : <BsVolumeUpFill />}
      </div>
    </footer>
  );
}

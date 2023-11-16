import Modal from '@/libs/modal';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

type ImageItemProps = {
  imgProps: StaticImageData;
  alt: string;
};
export default function ImageItem({ imgProps, alt }: ImageItemProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // modal wedding gift
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex justify-center items-start">
      <Image
        src={{
          src: imgProps.src,
          width: imgProps.width / 8,
          height: imgProps.height / 8,
        }}
        alt={alt}
        onClick={openModal}
        priority
        className="h-full w-full rounded-sm shadow-2xl transition
  hover:cursor-pointer bg-transparent"
      />

      <Modal
        onClose={closeModal}
        open={isModalOpen}
        classNameChildren="!px-0 xs:!p-2 md:!p-2"
        classNameHeader="!absolute !-top-5 !-right-5 !h-6 !w-6 !z-50"
      >
        <div
          className={`flex relative justify-center items-center p-0 w-[21rem] ${
            imgProps.width > imgProps.height ? 'md:w-[40rem]' : 'md:w-[30rem]'
          } `}
        >
          <Image
            src={imgProps}
            alt={alt}
            priority
            className="object-contain object-center rounded-lg"
          />
        </div>
      </Modal>
    </div>
  );
}

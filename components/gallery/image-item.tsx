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
        src={imgProps}
        alt={alt}
        onClick={openModal}
        priority
        className="h-full w-full rounded-sm shadow-2xl transition
  hover:cursor-pointer bg-transparent"
      />

      <Modal
        onClose={closeModal}
        open={isModalOpen}
        classNameChildren="!px-0 xs:!pb-7 md:!pb-10"
      >
        <div
          className={`flex relative justify-center items-center p-0 ${
            imgProps.width > imgProps.height
              ? 'md:w-[40rem] xs:w-[23rem]'
              : 'md:w-[30rem] xs:w-[22rem]'
          } `}
        >
          <Image
            src={imgProps}
            alt={alt}
            priority
            className="object-contain object-center rounded-lg xs:w-5/6 xs:h-5/6 md:h-6/7"
          />
        </div>
      </Modal>
    </div>
  );
}

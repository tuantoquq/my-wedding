'use client';
import Image from 'next/image';
import React from 'react';
import giftImg from '@/public/gift.png';
import Modal from '@/libs/modal';
import { banks } from '@/utils/data';
import GiftCard from './gift-card';
export default function Gift() {
  const [isModalWeddingGiftOpen, setIsModalWeddingGiftOpen] =
    React.useState(false);

  const openModalWeddingGift = () => {
    setIsModalWeddingGiftOpen(true);
  };
  const closeModalWeddingGift = () => {
    setIsModalWeddingGiftOpen(false);
  };
  return (
    <section className="mb-5">
      <div className="flex justify-center items-center">
        <button
          className="hover:cursor-pointer transition
      hover:shadow-3xl hover:scale-110 duration-300 ease-in-out"
          onClick={openModalWeddingGift}
        >
          <Image alt="gift" src={giftImg} className="w-10 h-10" />
        </button>
        <Modal
          open={isModalWeddingGiftOpen}
          onClose={closeModalWeddingGift}
          classNameChildren="!px-5"
          title="Hộp mừng cưới"
          classNameTitle="text-white py-2"
          classNameHeader="bg-title rounded-t-md"
        >
          <div className="flex md:flex-row xs:flex-col justify-center items-center gap-2 w-full p-2">
            {banks.map((bank, index) => (
              <React.Fragment key={index}>
                <GiftCard
                  bankName={bank.bankName}
                  cardHolder={bank.cardHolder}
                  type={bank.type}
                  cardNumber={bank.cardNumber}
                  image={bank.image}
                />
              </React.Fragment>
            ))}
          </div>
        </Modal>
      </div>
    </section>
  );
}

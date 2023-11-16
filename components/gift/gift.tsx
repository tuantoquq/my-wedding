'use client';
import Image from 'next/image';
import React from 'react';
import giftImg from '@/public/gift.jpg';
import Modal from '@/libs/modal';
import { banks } from '@/utils/data';
import GiftCard from './gift-card';
import Typography from '@/libs/Typography';
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
    <section className="mb-20">
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center flex-col gap-3">
          <Typography
            variant="h4"
            className="!text-cs-green-900 md:!text-2xl xs:!text-xl"
          >
            Gửi quà cho cô dâu ❤️ chú rể ở đây nhé!
          </Typography>
          <button
            className="hover:cursor-pointer transition-all animate-[gift_2s_linear_infinite]"
            onClick={openModalWeddingGift}
          >
            <Image alt="gift" src={giftImg} className="w-20 h-20 rounded-xl" />
          </button>
        </div>
        <Modal
          open={isModalWeddingGiftOpen}
          onClose={closeModalWeddingGift}
          classNameChildren="!px-5"
          title="Hộp quà cưới"
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

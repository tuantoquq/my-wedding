'use client';
import { useSectionInView } from '@/hooks/hooks';
import SectionHeading from '@/layout/section-heading';
import React from 'react';
import image0093 from '@/public/HUY00093.jpg';
import Image from 'next/image';
import Typography from '@/libs/Typography';
import { Button } from '@/libs/Button';
import Modal from '@/libs/modal';
import RadioButton from '@/libs/radio-button';
import { BsCheckCircleFill } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import { FaSpinner } from 'react-icons/fa';
import GiftCard from '../gift/gift-card';
import { banks } from '@/utils/data';
import { appendRowData, getIDs } from '@/services/spreadsheet';
enum GUEST {
  GROOM_GUEST = 'GROOM_GUEST',
  BRIDE_GUEST = 'BRIDE_GUEST',
}
const originalIcon = (
  <BsCheckCircleFill
    className="text-lg opacity-80 transition-all 
group-hover:translate-x-1 group-hover:-translate-y-1"
  />
);

const loadingIcon = (
  <FaSpinner className="text-xs opacity-80 transition-all animate-spin" />
);
export default function Congrats() {
  const { ref } = useSectionInView({ sectionName: 'Lời cảm ơn' });
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(GUEST.GROOM_GUEST);
  const [guestName, setGuestName] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  // modal wedding gift
  const [isModalWeddingGiftOpen, setIsModalWeddingGiftOpen] =
    React.useState(false);

  const openModalWeddingGift = () => {
    setIsModalWeddingGiftOpen(true);
  };
  const closeModalWeddingGift = () => {
    setIsModalWeddingGiftOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOptionChange = (value: GUEST) => {
    setSelectedOption(value);
  };

  const handleGuestNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setGuestName(event.target.value);
  };

  const confirmationSubmit = async (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    event.preventDefault();
    if (!guestName) {
      toast.error('Vui lòng nhập tên của bạn!', {
        position: 'top-center',
        autoClose: 2000,
      });
    } else {
      try {
        setIsLoading(true);
        const newestIds = await getIDs();
        const rowSubmit = {
          STT: newestIds,
          'Guest name': guestName,
          Type: selectedOption,
          Number: 1,
        };
        await appendRowData(rowSubmit);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
        setIsModalOpen(false);
        setGuestName('');
        toast.success(
          'Cảm ơn bạn đã xác nhận tham dự đám cưới của chúng tôi!',
          {
            position: 'top-center',
            autoClose: 2000,
          },
        );
      }
    }
  };
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-20"
      id="congrats"
    >
      <SectionHeading>Lời Cảm Ơn</SectionHeading>
      <div className="flex gap-2 justify-center items-center">
        <Button
          onClick={openModal}
          endIcon={originalIcon}
          type="button"
          className="w-[14rem]"
        >
          Xác nhận tham dự
        </Button>

        <Modal open={isModalOpen} onClose={closeModal}>
          <div className="flex flex-col gap-4 xs:gap-1 ">
            <div className="flex justify-center items-center">
              <Image
                className="xs:w-48 xs:h-48 sm:w-60 sm:h-60 rounded-full border-4 border-cs-green-700 z-10 object-center object-cover"
                src={image0093}
                priority
                alt=""
              />
            </div>
            <Typography variant="h3" className="text-black font-extrabold">
              Xác nhận tham dự
            </Typography>
            <Typography variant="desc" className="text-black font-normal">
              đám cưới của
            </Typography>
            <Typography variant="h2" className="text-black font-bold">
              Nguyễn Tuấn & Trương Bích
            </Typography>
            <input
              placeholder="Nhập tên của bạn"
              className="text-center h-14 border-b-secondary px-3 bg-white focus:outline-none"
              required
              value={guestName}
              onChange={handleGuestNameChange}
            ></input>
            <div className="flex md:flex-row xs:flex-col justify-center items-center p-3 gap-3">
              <RadioButton
                label="Khách nhà trai"
                checked={selectedOption === GUEST.GROOM_GUEST}
                onChange={() => handleOptionChange(GUEST.GROOM_GUEST)}
              />
              <RadioButton
                label="Khách nhà gái"
                checked={selectedOption === GUEST.BRIDE_GUEST}
                onChange={() => handleOptionChange(GUEST.BRIDE_GUEST)}
              />
            </div>
            <div className="flex justify-center items-center md:mt-4">
              {isLoading ? (
                <Button
                  className="items-center"
                  type="submit"
                  endIcon={loadingIcon}
                ></Button>
              ) : (
                <Button
                  className="items-center"
                  type="submit"
                  onClick={confirmationSubmit}
                >
                  Xác nhận
                </Button>
              )}
            </div>
          </div>
        </Modal>
      </div>

      <div className="flex gap-2 justify-center items-center">
        <Button
          onClick={openModalWeddingGift}
          type="button"
          className="w-[14rem]"
        >
          Mừng cưới
        </Button>
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
      <ToastContainer />
    </section>
  );
}

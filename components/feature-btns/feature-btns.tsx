'use client';
import { useSectionInView } from '@/hooks/hooks';
import React from 'react';
import image0093 from '@/public/HUY00093.jpg';
import Image from 'next/image';
import Typography from '@/libs/Typography';
import { Button } from '@/libs/Button';
import Modal from '@/libs/modal';
import RadioButton from '@/libs/radio-button';
import { BsCheckCircleFill } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';
import { appendRowData, getIDs } from '@/services/spreadsheet';
import Link from 'next/link';
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
const wishSubmitIcon = (
  <FaPaperPlane
    className="text-xs opacity-80 transition-all 
group-hover:translate-x-1 group-hover:-translate-y-1"
  />
);

const loadingIcon = (
  <FaSpinner className="text-xs opacity-80 transition-all animate-spin" />
);
export default function FeatureButtons() {
  const { ref } = useSectionInView({ sectionName: 'Lời cảm ơn' });
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(GUEST.GROOM_GUEST);
  const [guestName, setGuestName] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  // modal wedding gift
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
      className="text-center sm:mb-20 w-full bg-cs-green-300 md:py-10 xs:py-5"
      id="congrats"
    >
      <div className="flex md:flex-row xs:flex-col md:gap-10 xs:gap-3 justify-center items-center">
        <Link href={'#wishes'}>
          <Button endIcon={wishSubmitIcon} type="button" className="w-[14rem] !font-medium">
            Gửi lời chúc
          </Button>
        </Link>
        <Button
          onClick={openModal}
          endIcon={originalIcon}
          type="button"
          className="w-[14rem] !font-medium"
        >
          Xác nhận tham dự
        </Button>

        <Modal open={isModalOpen} onClose={closeModal}>
          <div className="flex flex-col md:gap-4 xs:gap-1 xs:w-[20rem] md:w-[24rem]">
            <div className="flex justify-center items-center">
              <Image
                className="xs:w-48 xs:h-48 sm:w-60 sm:h-60 rounded-full border-4 border-cs-green-700 z-10 object-[center_top] object-cover"
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
            <Typography variant="h2" className="xs:!text-2xl text-black font-bold">
              Nguyễn Tuấn & Trương Bích
            </Typography>
            <input
              placeholder="Nhập tên của bạn"
              className="text-center md:h-14 xs:h-10 border-b-secondary px-3 bg-white focus:outline-none"
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
      <ToastContainer />
    </section>
  );
}

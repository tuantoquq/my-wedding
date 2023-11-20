import { Button } from '@/libs/Button';
import Typography from '@/libs/Typography';
import { useSocket } from '@/provider/socket-provider';
import { WishData } from '@/services/types';
import React, { FormEvent } from 'react';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
const originalIcon = (
  <FaPaperPlane
    className="text-xs opacity-80 transition-all 
group-hover:translate-x-1 group-hover:-translate-y-1"
  />
);

const loadingIcon = (
  <FaSpinner className="text-xs opacity-80 transition-all animate-spin" />
);

export default function WishForm() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const { socket } = useSocket();
  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      const dataSubmit = Object.fromEntries(
        formData.entries(),
      ) as unknown as WishData;
      socket.emit('addWish', dataSubmit);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setIsSubmitted(!isSubmitted);
      const guestNameEle = document.getElementById('name') as HTMLInputElement;
      const wishEle = document.getElementById('wish') as HTMLInputElement;
      guestNameEle.value = '';
      wishEle.value = '';
      toast.success('Thanks for give us wishes!', {
        hideProgressBar: true,
        position: 'top-center',
        autoClose: 2000,
      });
    }
  };
  const hanldleChangeGuestNamePlaceholder = (placeholder: string) => {
    const guestNameEle = document.getElementById('name') as HTMLInputElement;
    guestNameEle.placeholder = placeholder;
  };
  return (
    <div
      className="flex items-center bg-white text-center flex-col mt-2 md:mt-10  w-full
    border-dashed border-[2px] border-secondary-cl p-4 rounded-md md:h-[480px] xs:h-[400px]"
    >
      <Typography className="font-semibold" variant="desc">
        Cảm ơn bạn rất nhiều vì đã gửi những lời chúc tốt đẹp nhất đến đám cưới
        của chúng mình!
      </Typography>
      <Typography className="font-normal italic text-[14px]" variant="desc">
        -- Điền đầy đủ tên hoặc ghi chú để chúng mình biết rằng bạn là ai nhé!
        --
      </Typography>
      <form
        className="flex flex-col md:mt-10 xs:mt-2 w-full p-6"
        onSubmit={submitForm}
      >
        <input
          type="text"
          name="guestName"
          id="name"
          className="md:h-[3.5rem] xs:h-[3rem] border-b-secondary px-3 bg-white focus:outline-none rounded-none"
          placeholder="Nhập họ tên *"
          onFocus={() =>
            hanldleChangeGuestNamePlaceholder('VD: Thảo - Bạn thân cô dâu')
          }
          onBlur={() => hanldleChangeGuestNamePlaceholder('Nhập họ tên *')}
          required
        />
        <textarea
          name="content"
          id="wish"
          className="md:h-[9rem] xs:h-[7rem] my-3 border-b-secondary p-3 bg-white focus:outline-none rounded-none"
          placeholder="Nhập lời chúc của bạn *"
          maxLength={4000}
          required
        />
        <div className="flex justify-center items-center">
          <Button
            type="submit"
            endIcon={isLoading ? loadingIcon : originalIcon}
          >
            Gửi lời chúc
          </Button>
        </div>
      </form>
    </div>
  );
}

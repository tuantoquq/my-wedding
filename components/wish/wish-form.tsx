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
  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      const dataSubmit = Object.fromEntries(
        formData.entries(),
      ) as unknown as WishData;
      await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify(dataSubmit),
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      event.currentTarget?.reset();
      toast.success('Thanks for give us wishes!', {
        hideProgressBar: true,
        position: 'top-right',
        autoClose: 2000,
      });
    }
  };
  return (
    <div
      className="flex items-center bg-white text-center flex-col mt-10 w-1/2 
    border-dashed border-[2px] border-secondary-cl p-4 rounded-md"
    >
      <p className="font-normal">
        Cảm ơn bạn rất nhiều vì đã gửi những lời chúc tốt đẹp nhất đến đám cưới
        của chúng tôi!
      </p>
      <p className="font-normal italic text-[14px]">
        (Điền đầy đủ tên hoặc ghi chú để chúng mình biết rằng bạn là ai nhéee)
      </p>
      <form className="flex flex-col mt-10 w-full p-6" onSubmit={submitForm}>
        <input
          type="text"
          name="guestName"
          id="name"
          className="h-14 border-b-secondary px-3 bg-white focus:outline-none "
          placeholder="Nhập họ tên *"
          required
        />
        <textarea
          name="content"
          id="wish"
          className="h-36 my-3 border-b-secondary p-3 bg-white focus:outline-none"
          placeholder="Nhập lời chúc của bạn *"
          maxLength={4000}
          required
        />
        <button
          type="submit"
          className="group h-[3rem] w-[10rem] bg-secondary-cl
          text-primary-cl rounded-full
          flex flex-row justify-center items-center gap-2 transition-all
          focus:scale-110 hover:scale-110 hover:bg-primary-cl active:scale-105 hover:text-secondary-cl
          hover:border-secondary-cl border-2 border-primary-cl"
        >
          Gửi lời chúc {isLoading ? loadingIcon : originalIcon}
        </button>
      </form>
    </div>
  );
}

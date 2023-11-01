'use client';

import React, { FormEvent } from 'react';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/libs/hooks';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { sendWishes } from '@/actions/sendEmail';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const originalIcon = (
  <FaPaperPlane
    className="text-xs opacity-70 transition-all 
group-hover:translate-x-1 group-hover:-translate-y-1"
  />
);

const loadingIcon = (
  <FaSpinner className="text-xs opacity-70 transition-all animate-spin" />
);
export default function Contact() {
  const { ref } = useSectionInView({ sectionName: 'Wishes' });
  const [isLoading, setIsLoading] = React.useState(false);
  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    setIsLoading(true);
    await sendWishes(formData);
    setIsLoading(false);
    toast.success('Thank you for sending our wishes!', {
      hideProgressBar: true,
      position: 'top-right',
      autoClose: 2000,
    });
  };
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <ToastContainer />
      <SectionHeading>Send to Our beautiful wishes</SectionHeading>
      <p className="text-gray-700">
        Fill in the form below to send good wishes to us
      </p>

      <form className="flex flex-col mt-10" onSubmit={submitForm}>
        <input
          type="name"
          name="senderName"
          required
          maxLength={500}
          className="h-14 borderBlack px-4"
          placeholder="Your name"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Your message"
          name="message"
          required
          maxLength={4000}
        />
        <button
          type="submit"
          className="group h-[3rem] w-[8rem] bg-gray-900 
          text-white rounded-full outline-none 
          flex flex-row justify-center items-center gap-2 transition-all
          focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
        >
          Send {isLoading ? loadingIcon : originalIcon}
        </button>
      </form>
    </motion.section>
  );
}

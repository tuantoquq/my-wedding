import { ReactNode } from 'react';
import { BsX } from 'react-icons/bs';
import Typography from '../Typography';
import { motion } from 'framer-motion';
type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  className?: string;
  classNameChildren?: string;
  classNameTitle?: string;
  classNameHeader?: string;
};

export default function Modal({
  open,
  onClose,
  children,
  className = '',
  classNameChildren = '',
  classNameTitle = '',
  classNameHeader = '',
  title,
}: ModalProps) {
  if (!open) return null;
  return (
    <motion.div
      className={`fixed z-[999] inset-0 flex items-center justify-center ${className}`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: 0.125, type: 'spring' }}
    >
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg z-10 relative">
        <div className={`relative flex justify-center ${classNameHeader}`}>
          {title && (
            <Typography
              variant="desc"
              className={`font-semibold !text-xl ${classNameTitle}`}
            >
              {title}
            </Typography>
          )}
          <button
            onClick={onClose}
            className={`absolute right-2 top-2 rounded-full  ${
              title
                ? 'bg-none text-white hover:bg-gray-100 hover:text-black'
                : 'bg-white text-black hover:bg-gray-300'
            }`}
          >
            <BsX className="h-6 w-6" />
          </button>
        </div>
        <div
          className={`md:px-16 xs:px-4 md:py-10 pb-5 ${
            title ? 'xs:pt-2' : 'xs:pt-7'
          } ${classNameChildren}`}
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
}

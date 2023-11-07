import { ReactNode } from 'react';
import { BsX } from 'react-icons/bs';
type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

export default function Modal({
  open,
  onClose,
  children,
  className = '',
}: ModalProps) {
  if (!open) return null;
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${className}`}
    >
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg z-10 pt-2 px-2">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-white rounded-full hover:bg-gray-300"
          >
            <BsX className="h-6 w-6 text-black" />
          </button>
        </div>
        <div className="md:px-16 xs:px-4 md:py-5 xs:py-2">{children}</div>
      </div>
    </div>
  );
}

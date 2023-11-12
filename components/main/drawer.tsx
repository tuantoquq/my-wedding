import { ReactNode } from 'react';
import { BsX } from 'react-icons/bs';
import Typography from '@/libs/Typography';
import { AnimatePresence, motion } from 'framer-motion';
type ModalProps = {
    open: boolean;
    onClose: () => void;
    children?: ReactNode;
    title?: string;
    className?: string;
    classNameChildren?: string;
    classNameTitle?: string;
    classNameHeader?: string;
};

export default function Drawer({
    open,
    onClose,
    children,
    className = '',
    classNameChildren = '',
    classNameTitle = '',
    classNameHeader = '',
    title,
}: ModalProps) {
    return (
        <AnimatePresence>
            {open &&
                <motion.div
                    className={`fixed z-[9999] inset-0 flex items-center justify-center pointer ${className}`}
                    initial={{ opacity: 0, backdropFilter: 'blur(4px)' }}
                    animate={{ opacity: 1, backdropFilter: 'blur(4px)' }}
                    transition={{ duration: 0.5, type: 'spring' }}
                >
                    <div
                        className="fixed inset-0 bg-black/50"
                        onClick={onClose}
                    ></div>
                    <motion.div
                        className="bg-white z-10 w-full max-w-[15rem] sm:max-w-xs inset-y-0 right-0 absolute"
                        initial={{ right: -320 }}
                        animate={{ right: 0 }}
                        exit={{ right: -320 }}
                        transition={{ duration: 0.25, delay: 0.25, type: 'linear' }}
                    >
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
                                className={`absolute right-2 top-2 rounded-full  ${title
                                    ? 'bg-none text-white hover:bg-gray-100 hover:text-black'
                                    : 'bg-white text-description hover:bg-cs-green-700'
                                    }`}
                            >
                                <BsX className="h-6 w-6" />
                            </button>
                        </div>
                        <div
                            className={`px-4 md:py-10 pb-5 flex items-stretch ${title ? 'xs:pt-2' : 'xs:pt-7'} ${classNameChildren}`}
                        >
                            {children}
                        </div>
                    </motion.div>
                </motion.div>}
        </AnimatePresence>
    );
}

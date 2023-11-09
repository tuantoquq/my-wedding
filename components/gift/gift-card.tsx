import Typography from '@/libs/Typography';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { GoCopy, GoCheck } from 'react-icons/go';

type GiftCardProps = {
  bankName: string;
  cardNumber: string;
  cardHolder: string;
  image: StaticImageData;
  type: string;
};
export default function GiftCard({
  bankName,
  cardHolder,
  cardNumber,
  image,
  type,
}: GiftCardProps) {
  const [isCopied, setIsCopied] = React.useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(cardNumber.trim().replaceAll(' ', ''));
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  return (
    <div className="flex flex-col border-2 border-cs-green-900 bg-cs-green-500 rounded-md gap-2 p-2 w-1/2 md:min-w-[18rem] xs:min-w-[16rem] justify-center items-center">
      <Typography variant="desc" className="!text-lg font-medium">
        Mừng cưới đến {type === 'BRIDE' ? 'cô dâu' : 'chú rể'}
      </Typography>
      <div className="flex justify-center items-center self-center md:w-40 xs:w-32">
        <Image alt="qr" src={image} className="object-cover rounded-lg" />
      </div>
      <Typography variant="h4" className='!leading-4'>{bankName}</Typography>
      <Typography variant="h4" className='!leading-4'>{cardHolder}</Typography>
      <Typography variant="h4" className='!leading-4'>
        {cardNumber}{' '}
        <button onClick={copyToClipboard}>
          {!isCopied ? (
            <GoCopy className="ml-1 inline-block font-semibold hover:cursor-pointer md:text-xl xs:text-lg" />
          ) : (
            <GoCheck className="ml-1 inline-block font-semibold hover:cursor-pointer md:text-xl xs:text-lg" />
          )}
        </button>
      </Typography>
    </div>
  );
}

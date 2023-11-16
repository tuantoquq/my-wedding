import Typography from '@/libs/Typography';
import React from 'react';

export default function Welcome() {
  return (
    <div
      className="p-5 sm:p-16 md:p-24 mt-24 h-[18rem] sm:h-[24rem] md:h-[30rem] lg:h-[32rem] bg-cover bg-no-repeat bg-[center_top_18%] 
    md:bg-[center_top_14%] bg-[url('https://i.imgur.com/r8oTUg4.jpg')] 
    w-full flex flex-col gap-5 relative items-center justify-center"
    >
      <div className="w-full h-full bg-cs-green-900 absolute z-10 opacity-50"></div>
      <div className="flex justify-center items-center gap-1 w-full h-full flex-col xs:mb-15 xs:h-3/5">
        <Typography
          variant="h2"
          className="!mb-0 !text-[0.8rem] sm:!text-[1rem] lg:!text-[1.25rem] !text-white !font-light !z-20 !italic"
        >
          {`"Nhiều người nghĩ hạnh phúc là phải có nhà, có xe, có tiền, có danh vọng... `}
        </Typography>
        <Typography
          variant="h2"
          className="!mt-0 !text-[0.8rem] sm:!text-[1rem] lg:!text-[1.25rem] !text-white !font-light !z-20 !italic"
        >{`Nhưng với tôi, hạnh phúc nằm ở chữ 'không'. Đó là không tai họa, không ồn ào, không bệnh tật, không cãi vã, không đau đớn."`}</Typography>
      </div>
    </div>
  );
}

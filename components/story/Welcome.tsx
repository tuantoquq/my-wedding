import React from 'react';
import Image from 'next/image';

export default function Welcome() {

    return (
        <div className="p-5 sm:p-16 md:p-24 mt-24 h-[18rem] sm:h-[24rem] md:h-[30rem] lg:h-[32rem] bg-cover bg-no-repeat bg-[center_top_40%] md:bg-[center_top_35%] bg-[url('/HUY09969.jpg')] w-full flex flex-col gap-5 relative items-center justify-center relative">
            <div className="w-full h-full bg-cs-green-900 absolute z-10 opacity-50"></div>
            <h1 className='text-[2rem] sm:text-[3rem] lg:text-[4rem] text-white font-semibold z-20'>Welcome to our big day</h1>
            <h2 className='text-[0.8rem] sm:text-[1rem] lg:text-[1.25rem] text-white font-light z-20 italic'>
                “It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out”
            </h2>
        </div>
    );
}


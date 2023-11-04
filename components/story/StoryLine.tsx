import React from 'react';
import Image from 'next/image';

type Props = {
    title: string,
    description: string,
    year: number,
    index: number,
    image: any,
}

export default function StoryLine({ image, title, description, year, index }: Props) {

    return (
        <div className='z-10 w-full p-5 sm:p-10 flex flex-col md:flex-row gap-5 relative items-center shadow-[0_0px_80px_-20px_rgba(0,0,0,0.2)] justify-between relative'>
            <div className='basis-full md:basis-5/12 shrink-0 flex justify-center'>
                <Image
                    className='w-52 h-52 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-lg object-center object-cover shadow-none'
                    src={image}
                    alt=''
                />
            </div>

            <div className='w-14 h-7 flex justify-center items-center rounded-md bg-cs-green-700'>
                <p className='font-medium text-description'>{year}</p>
            </div>

            <div className='basis-full md:basis-5/12'>
                <h3 className='font-medium pb-5'>{title}</h3>
                <div className='bg-cs-green-100 relative md:px-10 p-5 rounded-2xl'>
                    <p className='sm:text-base xs:text-sm font-light text-center text-description'>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}


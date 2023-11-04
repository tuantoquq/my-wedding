import React from 'react';
import Image from 'next/image';

type Props = {
    image: any,
    descrition?: string,
    name: string,
    facebook?: string,
    instagram?: string,
}

export default function Item({ image, descrition, name }: Props) {

    return (
        <div className='flex-auto flex flex-col relative justify-center items-center'>
            <Image
                className='xs:w-64 xs:h-64 sm:w-80 sm:h-80 rounded-full border-4 border-cs-green-700 z-10 object-center object-cover'
                src={image}
                alt=''
            />

            <div className='bg-cs-green-100 relative xs:-mt-32 sm:-mt-40 xs:pt-40 sm:pt-48 pb-10 md:px-10 px-5 rounded-2xl'>
                <h2 className='font-medium'>{name}</h2>
                <p className='sm:text-base xs:text-sm font-light text-center text-description'>
                    {descrition}
                </p>
            </div>
        </div>
    );
}


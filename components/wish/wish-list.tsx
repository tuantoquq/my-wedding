'use client';
import React, { useState, useEffect } from 'react';
import WishCard from './wish-card';
import { WishData } from '@/services/types';
import { FaSpinner } from 'react-icons/fa';

type WishListProps = {
  reload: boolean;
};
export default function WishList({ reload }: WishListProps) {
  const [listWishes, setListWishes] = useState<WishData[]>([]);
  useEffect(() => {
    const fetchWishes = async () => {
      const res = await fetch('/api/comments');
      const data = await res.json();
      setListWishes(data?.data);
    };
    fetchWishes();
  }, [reload]);
  return (
    <div
      className={`flex bg-white flex-col md:mt-10 xs:mt-1 border-[3px] w-full
      border-secondary-cl rounded-md gap-2 md:h-[480px] xs:h-[400px] overflow-auto ${
        listWishes?.length ? '' : ' justify-center items-center align-middle'
      }'}`}
    >
      {listWishes?.length ? (
        listWishes.map((wish, index) => (
          <React.Fragment key={index}>
            <WishCard guestName={wish.guestName} content={wish.content} />
          </React.Fragment>
        ))
      ) : (
        <div className="flex w-full md:w-[500px] justify-center items-center">
          <FaSpinner className="text-xl opacity-80 transition-all animate-spin" />
        </div>
      )}
    </div>
  );
}

import { WishData } from '@/libs/types';
import React from 'react';

export default function WishCard({ guestName, content }: WishData) {
  return (
    <div className="group">
      <div className="flex flex-col items-start justify-start text-black w-full group-even:bg-secondary-cl-2 p-4 gap-1">
        <h3 className="font-bold">{guestName}</h3>
        <p className="font-normal whitespace-pre-line">{content}</p>
      </div>
    </div>
  );
}

import Typography from '@/libs/Typography';
import { WishData } from '@/services/types';
import React from 'react';

export default function WishCard({ guestName, content }: WishData) {
  return (
    <div className="group">
      <div className="flex flex-col items-start justify-start text-black w-full group-even:bg-cs-green-500 p-4 gap-1">
        <Typography variant="h4">{guestName}</Typography>
        <Typography
          className="font-normal whitespace-pre-line text-start"
          variant="desc"
        >
          {content}
        </Typography>
      </div>
    </div>
  );
}

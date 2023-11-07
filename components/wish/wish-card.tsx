import Typography from '@/libs/Typography';
import { WishData } from '@/services/types';
import React from 'react';

export default function WishCard({ guestName, content }: WishData) {
  return (
    <div className="group">
      <div className="flex flex-col items-start justify-start text-black w-full group-even:bg-secondary-cl-2 p-4 gap-1">
        <Typography className="font-semibold" variant="h4">
          {guestName}
        </Typography>
        <Typography className="font-normal whitespace-pre-line" variant="desc">
          {content}
        </Typography>
      </div>
    </div>
  );
}

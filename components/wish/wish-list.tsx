import React from 'react';
import WishCard from './wish-card';
import { WishData } from '@/services/types';

export default function WishList() {
  const [listWishes, setListWishes] = React.useState<WishData[]>([]);
  React.useEffect(() => {
    const fetchWishes = async () => {
      const res = await fetch('/api/comments');
      const data = await res.json();
      setListWishes(data?.data);
    };
    fetchWishes();
  });
  return (
    <div
      className="flex bg-white flex-col mt-10 w-1/2 border-[3px]
     border-secondary-cl rounded-md gap-2 max-h-[30rem] overflow-auto"
    >
      {listWishes?.length ? (
        listWishes.map((wish, index) => (
          <React.Fragment key={index}>
            <WishCard guestName={wish.guestName} content={wish.content} />
          </React.Fragment>
        ))
      ) : (
        <p>Chưa có lời chúc nào</p>
      )}
    </div>
  );
}

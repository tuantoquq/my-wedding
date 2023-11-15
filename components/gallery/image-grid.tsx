import { StaticImageData } from 'next/image';
import React from 'react';
import ImageItem from './image-item';
import { useWindowSize } from '@/hooks/useWindowSize';

type ImageGridProps = {
  images: Array<StaticImageData>;
};
const MAX_COLS = 4;
const MAX_COLS_BELOW_SM = 2;
export default function ImageGrid({ images }: ImageGridProps) {
  const { isBelowSm } = useWindowSize();
  function getColumns(colIndex: number, maxCols: number) {
    return images.filter((img, index) => index % maxCols === colIndex);
  }
  return isBelowSm ? (
    <div className="grid grid-cols-2 gap-2 p-5">
      {[getColumns(0, MAX_COLS_BELOW_SM), getColumns(1, MAX_COLS_BELOW_SM)].map(
        (column, idx) => (
          <div className="flex flex-col gap-2" key={idx}>
            {column.map((img, index) => (
              <React.Fragment key={index}>
                <ImageItem imgProps={img} alt="image album" />
              </React.Fragment>
            ))}
          </div>
        ),
      )}
    </div>
  ) : (
    <div className="grid grid-cols-4 gap-4 md:p-10 xs:p-5">
      {[
        getColumns(0, MAX_COLS),
        getColumns(1, MAX_COLS),
        getColumns(2, MAX_COLS),
        getColumns(3, MAX_COLS),
      ].map((column, idx) => (
        <div className="flex flex-col gap-4" key={idx}>
          {column.map((img, index) => (
            <React.Fragment key={index}>
              <ImageItem imgProps={img} alt="image album" />
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
}

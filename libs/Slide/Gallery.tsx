'use client'

import { useWindowSize } from "@/hooks/useWindowSize";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState, useRef, useMemo } from "react";
import {
    BsFillArrowRightCircleFill,
    BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { SwipeProvider } from "../Events/SwipeProvider";

type Props = {
    items: string[] | StaticImport[],
    selected: number,
    onSelect: (item: number, ...arg: any[]) => any,
}

export default function Gallery({ items, selected, onSelect }: Props) {
    const ref = useRef<HTMLDivElement>(null)
    const [translateX, setTranslateX] = useState<number>(0);
    const { isBelowLg, isBelowSm } = useWindowSize();
    const imagesPerPage = useMemo(() => isBelowLg ? 3 : 5, [isBelowLg]);

    const previousPage = () => {
        if (selected === 0) {
            setTranslateX(ref.current ? ref.current?.clientWidth * Math.floor((items.length - 1) / imagesPerPage) : 0);
            onSelect(items.length - 1);
        }
        else {
            if (selected < Math.ceil(imagesPerPage / 2) + 1) {
                setTranslateX(0);
            }
            else if (Math.floor((selected - 3) / imagesPerPage) !== Math.floor((items.length - 1) / imagesPerPage) || selected < items.length - Math.floor(imagesPerPage / 2)) {
                setTranslateX(ref.current ? ref.current?.clientWidth * (selected - 1 - Math.floor(imagesPerPage / 2)) / imagesPerPage : 0);
            }

            onSelect(selected - 1);
        }
    };

    const nextPage = () => {
        if (selected === items.length - 1) {
            setTranslateX(0)
            onSelect(0);
        }
        else {
            if (selected < Math.ceil(imagesPerPage / 2) - 1) {
                setTranslateX(0);
            }
            else if (Math.floor((selected + 1) / imagesPerPage) !== Math.floor((items.length - 1) / imagesPerPage) || selected < items.length - Math.floor(imagesPerPage / 2)) {
                setTranslateX(ref.current ? ref.current?.clientWidth * (selected + 1 - Math.floor(imagesPerPage / 2)) / imagesPerPage : 0);
            }

            onSelect(selected + 1);
        }
    };

    const selectImage = (index: number) => {
        onSelect(index);
        if (index < Math.ceil(imagesPerPage / 2)) {
            setTranslateX(0);
        }
        else if (Math.floor(index / imagesPerPage) !== Math.floor((items.length - 1) / imagesPerPage) || index < items.length - Math.floor(imagesPerPage / 2)) {
            setTranslateX(ref.current ? ref.current?.clientWidth * (index - Math.floor(imagesPerPage / 2)) / imagesPerPage : 0);
        }
    }

    const swipe = (distance: number) => {
        setTranslateX(prev => {
            if (prev + distance <= 0) {
                return 0;
            }

            if (ref.current && prev + distance >= ref.current?.clientWidth * Math.floor((items.length - 1) / imagesPerPage)) {
                return ref.current?.clientWidth * Math.floor((items.length - 1) / imagesPerPage);
            }

            return prev + distance;
        })
    }

    return (
        <SwipeProvider onSwipeLeft={swipe} onSwipeRight={swipe} sensitivity={50}>
            <div className="group overflow-hidden relative w-full h-auto px-8 sm:px-16 md:px-24 lg:px-32 py-10">
                <div
                    ref={ref}
                    className={`w-full flex flex-row transition-all duration-1000`}
                    style={{
                        transform: `translateX(-${translateX}px)`,
                    }}
                >
                    {items.map((s, index) => (
                        <div
                            key={index}
                            className={`aspect-[2/3] min-w-[33.333%]  lg:min-w-[20%] px-3`}
                        >
                            <Image
                                onClick={() => selectImage(index)}
                                src={s}
                                alt=''
                                priority
                                className={`h-full object-center object-cover rounded-md lg:rounded-2xl
                                transition-all duration-500 ${index === selected ? 'opacity-100 scale-105' : 'opacity-50'} 
                                shadow-[0_0px_25px_0px_rgba(0,0,0,0.2)] cursor-pointer`}
                            />
                        </div>
                    ))}
                </div>

                {!isBelowSm &&
                    <>
                        <div className="hidden absolute top-0 left-0 h-full w-full justify-between items-center group-hover:flex text-cs-green-900 px-10 sm:text-2xl md:text-3xl lg:text-5xl pointer-events-none">
                            <button onClick={previousPage}>
                                <BsFillArrowLeftCircleFill className="hover:text-cs-green-700 pointer-events-auto" />
                            </button>
                            <button onClick={nextPage}>
                                <BsFillArrowRightCircleFill className="hover:text-cs-green-700 pointer-events-auto" />
                            </button>
                        </div>
                    </>
                }
            </div>
        </SwipeProvider>
    );
}
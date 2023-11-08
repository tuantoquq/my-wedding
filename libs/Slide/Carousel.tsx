'use client'

import { useWindowSize } from "@/hooks/useWindowSize";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
    BsFillArrowRightCircleFill,
    BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { SwipeProvider } from "../Events/SwipeProvider";

type Props = {
    slides: string[] | StaticImport[],
}

export default function Carousel({ slides }: Props) {
    const [current, setCurrent] = useState<number>(0);
    const { isBelowSm } = useWindowSize();

    const previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    const nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    useEffect(() => {
        const autoNext = setTimeout(() => {
            if (current === slides.length - 1) setCurrent(0);
            else setCurrent(current + 1);
        }, 4000);

        return () => {
            clearTimeout(autoNext)
        }

    }, [current, slides.length])


    return (
        <SwipeProvider onSwipeLeft={nextSlide} onSwipeRight={previousSlide}>
            <div className="group overflow-hidden relative w-full sm:aspect-[2/1] aspect-[3/2]">
                <div
                    className={`w-full flex transition-all duration-1000`}
                    style={{
                        transform: `translateX(-${current * 100}%)`,
                    }}
                >
                    {slides.map((s, index) => (
                        <Image
                            key={index}
                            src={s}
                            alt=''
                            priority
                            className={`w-full h-full object-center object-contain pointer-events-none transition-all duration-500 ${index === current ? 'opacity-100' : 'opacity-30'}`}
                        />
                    ))}
                </div>

                {!isBelowSm &&
                    <>
                        <div className="hidden absolute top-0 h-full w-full justify-between items-center group-hover:flex text-cs-green-900 px-10 sm:text-2xl md:text-3xl lg:text-4xl">
                            <button onClick={previousSlide}>
                                <BsFillArrowLeftCircleFill className="hover:text-cs-green-700" />
                            </button>
                            <button onClick={nextSlide}>
                                <BsFillArrowRightCircleFill className="hover:text-cs-green-700" />
                            </button>
                        </div>

                        {/* <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                        {slides.map((_, i) => (
                            <div
                                onClick={() => {
                                    setCurrent(i);
                                }}
                                key={"circle" + i}
                                className={`rounded-full sm:w-8 md:w-10 aspect-[10/1] cursor-pointer  ${i == current ? "bg-white" : "bg-gray-500"}`}
                            />
                        )
                        )}
                    </div> */}
                    </>
                }
            </div>
        </SwipeProvider>
    );
}
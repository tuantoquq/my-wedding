'use client'

import { useWindowSize } from "@/hooks/useWindowSize";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { useState, useRef, useMemo, createRef, useEffect } from "react";
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


export default class Gallery extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    selectImage = (index: number) => {
        this.props.onSelect(index);
    }

    componentDidUpdate(): void {
        const elementStart = document.getElementById(`item-${this.props.selected}`)?.offsetLeft ?? 0;
        const wrapper = document.getElementById('album-wrapper');
        const wrapperWidth = wrapper?.clientWidth ?? 0;
        wrapper?.scrollTo({ top: 0, left: elementStart - wrapperWidth / 2, behavior: 'smooth' });
    }

    render(): React.ReactNode {
        return (
            // <SwipeProvider onSwipe={swipe} sensitivity={50}>
            <div
                className="group overflow-hidden relative px-10"
            >
                <div
                    id="album-wrapper"
                    className={`flex flex-row transition-all duration-200 overflow-x-auto overflow-y-hidden snap-x py-10 md:px-10`}
                >
                    {this.props.items.map((s, index) => (
                        <div
                            id={`item-${index}`}
                            key={index}
                            className={`snap-center aspect-[8/9] min-w-[33.333%] lg:min-w-[20%] px-3 flex justify-center items-center`}
                        >
                            <Image
                                onClick={() => {
                                    this.selectImage(index);
                                }}
                                src={s}
                                alt=''
                                priority
                                className={`h-full object-center object-cover rounded-md lg:rounded-2xl
                            transition-all duration-500 ${index === this.props.selected ? 'opacity-100 scale-105' : 'opacity-50'} 
                            shadow-[0_0px_25px_0px_rgba(0,0,0,0.2)] cursor-pointer hover:scale-105`}
                            />
                        </div>
                    ))}
                </div>
                {/* 
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
            } */}
            </div>
            // </SwipeProvider>
        );
    }
}
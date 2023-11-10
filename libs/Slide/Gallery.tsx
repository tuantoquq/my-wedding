'use client'

import { useWindowSize } from "@/hooks/useWindowSize";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface InjectedProps {
    isBelowSm?: boolean;
    isBelowMd?: boolean;
    isBelowLg?: boolean;
}

interface Props extends InjectedProps {
    items: string[] | StaticImport[],
    selected: number,
    onSelect: (item: number, ...arg: any[]) => any,
}

class Gallery extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    selectImage = (index: number) => {
        this.props.onSelect(index);
    }

    nextImage = setInterval(() => {
        const nextIndex = (this.props.selected + 1) % this.props.items.length;
        this.props.onSelect(nextIndex);
    }, 5000);

    componentDidUpdate(): void {
        const element = document.getElementById(`item-${this.props.selected}`)
        const elementStart = element?.offsetLeft ?? 0;
        const elementWidth = element?.offsetWidth ?? 0;
        const wrapper = document.getElementById('album-wrapper');
        // const wrapperWidth = wrapper?.clientWidth ?? 0;
        wrapper?.scrollTo({ top: 0, left: elementStart - elementWidth * (this.props.isBelowLg ? 1 : 2), behavior: 'smooth' });
    }

    componentWillUnmount(): void {
        clearInterval(this.nextImage);
    }

    shouldComponentUpdate(nextProps: Readonly<Props>): boolean {
        if (this.props.selected !== nextProps.selected) {
            clearInterval(this.nextImage);
            // reset next image interval
            this.nextImage = setInterval(() => {
                const nextIndex = (this.props.selected + 1) % this.props.items.length;
                this.props.onSelect(nextIndex);
            }, 5000);

            return true;
        }

        return false;
    }

    render(): React.ReactNode {
        return (
            <div
                className="group overflow-hidden relative sm:px-10 md:px-20"
            >
                <div
                    id="album-wrapper"
                    className={`flex flex-row transition-all duration-200 overflow-x-auto overflow-y-hidden snap-x py-10 sm:px-5`}
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
            </div>
        );
    }
}

// HOC
function withHook<T extends Props>(Component: React.ComponentType<T>) {    
    return function WrappedComponent(props: Omit<T, keyof InjectedProps>) {
        const { windowSize, ...value } = useWindowSize();
        return <Component {...(props as T)} {...value} />;
    }
}

export default withHook(Gallery);
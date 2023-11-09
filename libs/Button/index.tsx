import React from 'react';

type Props = {
    children?: React.ReactNode | null | undefined,
    startIcon?: React.ReactElement | undefined,
    endIcon?: React.ReactElement | undefined,
    className?: string,
    onClick?: (event: React.MouseEvent<HTMLElement>) => void,
    type?: "submit" | "button" | "reset" | undefined
}

export function Button({ children, startIcon, endIcon, className = '', type, onClick }: Props) {
    return (
        <button
            type={type}
            className={`
                group h-[3rem] lg:h[3.5-rem] w-[10rem] bg-secondary-cl
                text-primary-cl rounded-full
                text-sm sm:text-sm md:text-base lg:text-lg !leading-6 md:!leading-7 font-normal text-center
                flex flex-row justify-center items-center gap-2 transition-all
                focus:scale-110 hover:scale-110 hover:bg-primary-cl active:scale-105 hover:text-secondary-cl
                hover:border-secondary-cl border-2 border-primary-cl
                ${className}
            `}
            onClick={onClick}
        >
            {startIcon}
            {children}
            {endIcon}
        </button>
    )
}
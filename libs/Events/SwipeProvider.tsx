import React, { useRef } from 'react';

type Props = {
    children: React.ReactNode,
    onSwipeLeft?: () => any,
    onSwipeRight?: () => any,
}

export const SwipeProvider = ({ children, onSwipeLeft, onSwipeRight }: Props) => {
    const touchStart = useRef<number>(0)
    const touchEnd = useRef<number>(0)

    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        touchEnd.current = 0; // otherwise the swipe is fired even with usual touch events
        touchStart.current = e.targetTouches[0].clientX;
    }

    const onTouchMove = (e: React.TouchEvent) => {
        touchEnd.current = e.targetTouches[0].clientX;
    }

    const onTouchEnd = () => {
        if (!touchStart.current || !touchEnd.current) return
        const distance = touchStart.current - touchEnd.current
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance
        if (isLeftSwipe && onSwipeLeft) {
            onSwipeLeft();
        }
        if (isRightSwipe && onSwipeRight) {
            onSwipeRight();
        }
    }

    return (
        <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} className='w-full h-auto'>
            {children}
        </div>
    )
}
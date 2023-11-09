import React, { useRef } from 'react';

type Props = {
    children: React.ReactNode,
    onSwipeLeft?: (...arg: any[]) => any,
    onSwipeRight?: (...arg: any[]) => any,
    onSwipe?: (...arg: any[]) => any,
    sensitivity?: number,
}

export const SwipeProvider = ({ children, onSwipeLeft, onSwipeRight, onSwipe, sensitivity = 10 }: Props) => {
    const duration = useRef<{ start: number, end: number }>({
        start: 0,
        end: 0
    })
    const touchStart = useRef<number>(0)
    const touchEnd = useRef<number>(0)

    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        duration.current.start = Date.now();
        touchEnd.current = 0; // otherwise the swipe is fired even with usual touch events
        touchStart.current = e.targetTouches[0].clientX; 
    }

    const onTouchMove = (e: React.TouchEvent) => {
        console.log(e);
        
        touchEnd.current = e.targetTouches[0].clientX;
        const distance = touchStart.current - touchEnd.current
        const distance_ = distance * (sensitivity / 1000);
        if (onSwipe) {
            onSwipe(distance_);
        }
    }

    const onTouchEnd = () => {
        duration.current.end = Date.now()
        if (!touchStart.current || !touchEnd.current) return
        const distance = touchStart.current - touchEnd.current
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance
        const distance_ = distance * 1000 * (sensitivity / 100) / (duration.current.end - duration.current.start)
        if (isLeftSwipe && onSwipeLeft) {
            onSwipeLeft(distance_);
        }
        if (isRightSwipe && onSwipeRight) {
            onSwipeRight(distance_);
        }
    }

    return (
        <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} className='w-full h-auto'>
            {children}
        </div>
    )
}
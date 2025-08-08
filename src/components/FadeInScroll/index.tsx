'use client'

import React, {useEffect, useRef, useState} from "react";

interface FadeInOnScrollProps{
    children: React.ReactNode;
    direction?: 'up' | 'left' | 'right';
    delay?: number; 
}

export const FadeInOnScrollProps: React.FC<FadeInOnScrollProps>=({
    children,
    direction = 'up',
    delay = 0,
})=>{
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false)

    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry])=>{
                if (entry.isIntersecting) {
                    setIsVisible(true);
                        observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }
        
        return()=> observer.disconnect();
    },[])

    const baseClasses = 'transform transition-all duration-700 ease-out opacity-0';
    const visiBleClasses = 'opacity-100 translate-x-0 translate-y-0';

    const directionClasses = {
        up:'translate-y-[32]',
        left:'translate-x-[-50px]',
        right:'translate-x-10',
    };

    return(
        <div
        ref={ref}
        style={{ transitionDelay: `${delay}ms`}}
        className={`${baseClasses} ${directionClasses[direction]} ${
            isVisible ? visiBleClasses : ''
            }`}
        >
            {children}
        </div>
    )
}
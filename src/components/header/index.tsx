'use client'

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const slides = [
   {
      title1: 'A sua melhor Consultoria em ',
      title2: 'Gestão.',
      description: 'A forma mais fácil de impulsionar o seu negócio com soluções modernas e eficientes.',
      image: 'assets/banner-1.jpg',
   },
   {
      title1: 'Estratégias inteligentes para impulsionar ',
      title2: 'o crescimento do seu negócio.',
      description: 'Maximize os seus resultados com nossa consultoria especializada.',
      image: 'assets/banner-2.webp',
   },
];

export const Header = () => {
   const [activeIndex, setActiveIndex] = useState(0);

   // Auto slide a cada 5 segundos
   useEffect(() => {
      const interval = setInterval(() => {
         setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
   }, []);

   const goToSlide = (index: number) => {
      setActiveIndex(index);
   };

   return (
      <div className="w-full pt-20 relative overflow-hidden bg-white bg-no-repeat bg-fixed bg-cover bg-center transition-all duration-1000 ease-in-outs" style={{
         backgroundImage: `url(${slides[activeIndex].image})`
      }}>

         <div className="w-full h-fit relative">
            <div className="flex transition-transform duration-700 ease-in-out"
               style={{
                  transform: `translateX(-${activeIndex * 100}%)`,
                  //backgroundImage: `url(${slides[activeIndex].image})`
               }}
            >
               {slides.map((slide, index) => (
                  <div key={index} className="w-full min-w-full flex flex-col lg:flex-row gap-8 px-20">
                     <div className={`flex flex-col gap-5 max-w-xl ${activeIndex ? 'text-white' : 'text-black'}`}>
                        <h1 className="text-4xl md:text-5xl font-bold text-center md:text-start">
                           {slide.title1}
                           <span className="text-[#026865]">{slide.title2}</span>
                        </h1>
                        <p className={`text-lg text-center md:text-start ${activeIndex ? 'text-white' : 'text-black'}`}>{slide.description}</p>
                        <div className="flex gap-2 justify-center items-center md:justify-start md:items-start">
                           <Link href={'/#contacto'} className="py-2 px-4 bg-[#026865] text-white rounded-lg shadow-md hover:opacity-90 transition">Entre em Contacto</Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            {/* Indicadores */}
            <div className="gap-2 flex justify-center mt-28">
               {slides.map((_, index) => (
                  <button
                     key={index}
                     className={`w-4 h-4 rounded-full cursor-pointer ${index === activeIndex ? 'bg-[#07EA37]' : 'bg-white'} transition-all duration-700`}
                     onClick={() => goToSlide(index)}
                  />
               ))}
            </div>
            
            <hr className="mt-10 text-gray-500" />

         </div>


      </div>
   );
};

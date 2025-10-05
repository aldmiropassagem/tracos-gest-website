'use client'
import React from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { event } from '@/constante';
import TitleHeader from '@/components/TitleHeader';

gsap.registerPlugin(ScrollTrigger)


export const Eventos = () => {
  useGSAP(()=>{
    // Animation using gsap
  gsap.fromTo(
    ".event-img",
    {x: -100,
      opacity:0,
    },
    {
      x: 0,
      opacity:1,
      duration:1.2,
      ease:"power2.inOut",
      scrollTrigger:{
        trigger:".event-img",
        start:"top 80%",
        toggleActions:"play none none reverse"
      }
    }
  );

  // Animation Title and p
  gsap.fromTo(
    ".event-text h2, .event-text p",
    {
      y:40,
      opacity:0,
    },
    {
      y:0,
      opacity:1,
      duration:1,
      stagger:0.3,
      ease:"power2.out",
      delay:0.2,
      scrollTrigger:{
        trigger:".event-text",
        start: "top 85%",
        toggleActions:"play none none reverse"
      }
    }
  );
  })
  return (
    <section id="events" className="flex flex-col  items-center  justify-center w-full pt-40 pb-14 px-4 sm:px-6 lg:px-10 xl:px-20 hero-layout mt-64  bg-black-200">
  <TitleHeader
  title='Eventos'
  />
      
      <div className="w-full max-w-screen-xl mx-auto ">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-10 ">
          
          <div 
          className='img flex items-center justify-center w-full max-w-md h-auto'>
            
            <Image
              src="/assets/fipe.png"
              alt="FIPE"
              width={600}
              height={150}
              className="event-img w-full h-auto object-contain"
              loading="lazy"
              quality={100}
            />
           
          </div>

          <div className="event-text w-full   max-w-2xl text-justify">
            
            <h2 className='font-semibold text-lg mb-2 '>Sobre a FIPE</h2>
            <div
            className='text-sm sm:text-base leading-relaxed'>
             {event.map(({desc, strong})=>(
              <div key={desc} className='event-text'>
                <p>
                   <strong>A FIPE - Feira de Inteligência e Política Económica </strong> {strong}
                </p>
                <br /> 
                <p>{desc}</p>
              </div>
             ))}
             
            </div>
           
          </div>

        </div>
      </div>
    </section>
  );
};
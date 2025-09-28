"use client"

import { words } from '@/constante'
import React from 'react'
import Button from '../Button'
import Cube from '../models/Cube'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'


export const Header = () => {
   useGSAP(() => {
      gsap.fromTo(
         ".hero-text h1",
         { y: 50, opacity: 0 },
         { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
      )
   })
   return (
      <section className='services relative overflow-hidden'>
         <div className='block absolute top-1/2 left-0 w-[960px] h-[380] translate-x-[-290px] -translate-y-1/2 rotate-90'>
            <Image
               src="/images/bg-outlines.svg"
               width={960}
               height={380}
               alt="outline"
               className="relative z-2"
            />


            <Image
               src="/images/bg-outlines-fill.png"
               width={960}
               height={380}
               alt="outline"
               className="absolute inset-0 mix-blend-soft-light opacity-5"
            />
         </div>

         <div className='hero-layout'>
            {/* Left Hero */}
            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
               <div className='flex flex-col gap-7'>
                  <div className='hero-text'>
                     <h1>
                        Moldando
                        <span className='slide'>
                           <span className='wrapper'>
                              {words.map((word, index) => (
                                 <span key={`${word.text}-${index}`} className='flex items-center md:gap-3 pb-2'>
                                    <Image
                                       src={word.imgPath}
                                       alt={word.text}

                                       width={48}
                                       height={48}

                                       className='xl:size-12 md:size-7 md:p-2 p-1 rounded-full bg-white-50'
                                    />
                                    <span>{word.text}</span>
                                 </span>
                              ))}
                           </span>
                        </span>
                     </h1>
                     <h1>Em Estratégias</h1>
                     <h1>para resultados reais</h1>
                  </div>
                  <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
                     Moldamos ideias em projectos que entregam resultados
                  </p>

                  <Button
                     className="md:w-80 md:h-16 w-60 h-12"
                     id='button'
                     text="Nossos Serviços"
                  />
               </div>
            </header>

            {/* Right Side model 3D */}
            <figure>
               <div className='hero-3d-layout'>
                  <Cube />
               </div>
            </figure>
         </div>
      </section>
   )
}


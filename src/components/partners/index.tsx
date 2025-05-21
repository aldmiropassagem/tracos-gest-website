import React from 'react';
import { Logo } from '../navbar/logo';
import Image from 'next/image';

export const Partners = () => {
   return (
      <>
         <section className='flex flex-col items-center justify-center relative pt-20 px-20 '>
            <h2 className='text-4xl font-bold text-center mb-6 text-[#026865]'>
               Clientes & Parceiros
            </h2>
            <p className='w-[800px] text-lg text-center mb-6'>
               Conheça os nossos principais Clientes e Parceiros de negócios.
            </p>
            <div className='flex gap-x-10 justify-center items-center w-full'>
               <div className='flex flex-col items-center justify-center'>
                  <Logo />
                  <p className="text-lg font-semibold">
                     Company 1
                  </p>
               </div>
               <div className='flex flex-col items-center justify-center'>
                  <Image
                     src='/assets/acacias-logo.png'
                     alt='Acácias Branding'
                     width={20}
                     height={20}
                     className='w-full h-full'
                     sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                     loading='eager'
                     quality={100}
                     style={{ objectFit: "cover" }}
                  />
               </div>
            </div>

         </section>

      </>
   );
};

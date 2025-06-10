import React from 'react';
import Image from 'next/image';

export const Partners = () => {
   return (
      <section id="parceiros" className="w-full flex flex-col items-center justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-10 xl:px-20">
         <div className="flex flex-col justify-center items-center max-w-screen-xl mx-auto w-full">

            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-[#026865]">
               Parceiros
            </h2>

            <p className="text-base sm:text-lg text-center mb-6 max-w-3xl text-gray-700">
               Conheça os nossos principais Parceiros de Negócios.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 mt-10 w-full">
               <div className="flex items-center justify-center w-[120px] sm:w-[150px] h-[100px] sm:h-[150px]">
                  <Image
                     src='/assets/aldwan.png'
                     alt='Aldwan Solutions'
                     width={20}
                     height={20}
                     sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                     className='w-fit h-fit'
                     loading='lazy'
                     quality={100}
                     style={{ objectFit: "cover" }}
                  />
               </div>
               <div className="flex items-center justify-center w-[120px] sm:w-[150px] h-[100px] sm:h-[150px]">
                  <Image
                     src='/assets/acacias-logo.png'
                     alt='Acácias Branding'
                     width={20}
                     height={20}
                     sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                     className='w-fit h-fit'
                     loading='lazy'
                     quality={100}
                     style={{ objectFit: "cover" }}
                  />
               </div>
            </div>
         </div>

      </section>
   );
};

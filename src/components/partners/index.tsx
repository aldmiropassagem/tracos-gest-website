import React from 'react';
import {Logo} from '../navbar/logo';

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
            <div className='flex gap-6 content-center w-full whitespace-pre'>
               <div className='flex flex-col items-center justify-center'>
                  <div className='flex justify-center items-center'>
                     <Logo />
                     <p className="text-lg font-semibold">
                        Company 1
                     </p>
                  </div>
               </div>
               <div className='flex flex-col items-center justify-center'>
                  <div className='flex justify-center items-center'>
                     <Logo />
                     <p className="text-lg font-semibold">
                        Company 1
                     </p>
                  </div>
               </div>
               <div className='flex flex-col items-center justify-center'>
                  <div className='flex justify-center items-center'>
                     <Logo />
                     <p className="text-lg font-semibold">
                        Company 1
                     </p>
                  </div>
               </div>
               <div className='flex flex-col items-center justify-center'>
                  <div className='flex justify-center items-center'>
                     <Logo />
                     <p className="text-lg font-semibold">
                        Company 1
                     </p>
                  </div>
               </div>               
            </div>

         </section>

         <hr className='absolute inset-0 left-0 mt-5' />
      </>
   );
};

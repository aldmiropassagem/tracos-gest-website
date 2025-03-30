import React from 'react';
import {Logo} from '../navbar/logo';

export const Trusted = () => {
   return (
      <>
         <div className='flex flex-col items-center justify-center relative pt-20 px-6 '>
            <h2 className='text-4xl font-bold text-center mb-6'>
               Trusted by over 10000+ customers
            </h2>
            <p className='w-[800px] text-lg text-center mb-6'>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='grid grid-cols4 gap-6 content-center w-full whitespace-pre'>
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
               <div className='flex flex-col items-center justify-center'>
                  <div className='flex justify-center items-center'>
                     <Logo />
                     <p className="text-lg font-semibold">
                        Company 1
                     </p>
                  </div>
               </div>
               
            </div>
         </div>

         <hr className='absolute inset-0 left-0 mt-5' />
      </>
   );
};

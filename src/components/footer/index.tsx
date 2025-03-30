import React from 'react';
import {Logo} from '../navbar/logo';

export const Footer = () => {
   return (
      <div className='bg-gray-100 py-20 px-6'>
        
         <footer className='bg-white w-full'>
            <div className='flex flex-wrap gap-2 items-center justify-center'>
               <div className='w-full flex flex-col items-center justify-center'>
                  <Logo />
                  <div className='flex flex-col items-center justify-center pt-4'>
                     
                        <span className='text-gray-600'>
                           First Link
                        </span>
                     
                  </div>
               </div>
               <div className='flex flex-col gap-2 items-center justify-center pt-20'>
                  <h5>Resources</h5>
                  <ul className='gap-2'>
                     <li>
                           First Link
                     </li>
                     <li>
                           Second Link
                     </li>
                     <li>
                           Third Link
                     </li>
                  </ul>
               </div>
               <div className='flex flex-col gap-2 items-center justify-center pt-20'>
                  <h5>Contact</h5>
                  <ul className='gap-2'>
                     <li>
                           First Link
                     </li>
                  </ul>
               </div>
               <div className='flex flex-col gap-2 items-center justify-center pt-20'>
                  <h5>Legal</h5>
                  <ul className='gap-2'>
                     <li>
                           First Link
                     </li>
                  </ul>
               </div>
            </div>
            <div className='px-10'
            >
               <hr className='mt-14 flex justify-center' />
               <div className='flex flex-wrap gap-2 items-center justify-between pt-20'>
                  <div className='flex flex-wrap gap-2 items-center justify-center'>
                     <Logo />
                     <Logo />
                     <Logo />
                     <Logo />
                  </div>
                  <div className='gap-2'>
                     <span>
                        Terms of Service
                     </span>
                     <span>
                        Privacy Policy
                     </span>
                  </div>
                  <div className='gap-2'>
                     <p>
                        © Copyright 2021 Acme Inc.
                     </p>
                  </div>
               </div>
            </div>
         </footer>
      </div>
   );
};

import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';

export const Features3 = () => {
   return (
      <>
         <div className='px-6 pb-14'
         >
            <div className='flex flex-col items-center justify-center pt-20'>
               
               <p className='text-blue-600'>
                  Awesome Feature
               </p>
               <h3>Your title here</h3>
               <span className='text-center text-gray-600'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  condimentum, nisl ut aliquam lacinia, nisl nisl aliquet nisl,
                  nec
               </span>
            </div>
            <div className='flex flex-col gap-2 items-center justify-center pt-20'>
               <div className='w-[500px]'>
                  
                     <div className='gap-0.5'>
                        <BoxIcon />
                        <div className='felx flex.col'>
                           <h5>Your Title</h5>
                           <span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed condimentum, nisl ut aliquam lacinia,
                              nisl nisl aliquet nisl, nec
                           </span>
                        </div>
                     </div>
                  
               </div>
               <div className='w-[500px]'>
                 
                     <div className='gap-0.5'>
                        <BoxIcon />
                        <div className='flex flex-col'>
                           <h5>Your Title</h5>
                           <span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed condimentum, nisl ut aliquam lacinia,
                              nisl nisl aliquet nisl, nec
                           </span>
                        </div>
                     </div>
               </div>
            </div>
            <div className='flex flex-wrap gap-2 items-center justify-center pt-20'>
               <div className='w-[500px]'>
                     <div className='gap-0.5'>
                        <BoxIcon />
                        <div className='flex flex-col'>
                           <h5>Your Title</h5>
                           <span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed condimentum, nisl ut aliquam lacinia,
                              nisl nisl aliquet nisl, nec
                           </span>
                        </div>
                     </div>
               </div>
               <div className='w-[500px]'>
                     <div className='gap-0.5'>
                        <BoxIcon />
                        <div className='flex flex-col'>
                           <h5>Your Title</h5>
                           <span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed condimentum, nisl ut aliquam lacinia,
                              nisl nisl aliquet nisl, nec
                           </span>
                        </div>
                     </div>
               </div>
            </div>
         </div>

         <hr className='absolute inset-p left-0 mt-5' />
            
      </>
   );
};

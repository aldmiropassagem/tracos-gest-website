import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {FeatureIcon} from '../icons/FeatureIcon';

export const Features1 = () => {
   return (
      <>
         <div className='flex flex-col gap-1 pt-20 justify-center items-center px-6 sm:justify-around sm:px-32 md:px-64'>
            <div className='flex flex-col'>
               <span>
                  Awesome Feature
               </span>
               <h3>Your title here</h3>
               <span className='w-[400px]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  condimentum, nisl ut aliquam lacinia, nisl nisl aliquet nisl,
                  nec tincidunt nisl lorem eu nunc. Sed euismod, nisl ut aliquam
                  lacinia,
               </span>

               <div className='py-10 gap-2'>
                  <BoxIcon />
                  <div className='flex flex-col'>
                     <h4>
                        Your title here
                     </h4>
                     <span className='max-w-[400px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed condimentum, nisl ut aliquam lacinia, nisl nisl
                        aliquet nisl,
                     </span>
                  </div>
               </div>
               <div className='py-10 gap-2'>
                  <BoxIcon />
                  <div className='flex flex-col'>
                     <h4>
                        Your title here
                     </h4>
                     <span className='max-w-[400px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed condimentum, nisl ut aliquam lacinia, nisl nisl
                        aliquet nisl,
                     </span>
                  </div>
               </div>
               <div className='py-10 gap-2'>
                  <BoxIcon />
                  <div className='flex flex-col'>
                     <h4>
                        Your title here
                     </h4>
                     <span className='max-w-[400px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed condimentum, nisl ut aliquam lacinia, nisl nisl
                        aliquet nisl,
                     </span>
                  </div>
               </div>
            </div>
            <div className='flex justify-center items-center'>
               <FeatureIcon />
            </div>
         </div>
         <hr className='absolute inset-0 left-0 mt-4' />
      </>
   );
};

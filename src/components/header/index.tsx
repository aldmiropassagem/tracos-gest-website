import React from 'react';

export const Header = () => {
   return (
      <>
         <div className='w-full flex gap-4 px-6 items-center justify-center pt-20'>
            <div className='flex flex-col gap-5 text-black'>
               <div className='w-[600px]'>
                  <h1 className='inline text-5xl font-bold'>
                     A sua melhor Consultoria em {' '}
                  </h1>
                 
                  <h1 className='inline text-5xl font-bold text-[#026865]'>
                     Gestão.
                  </h1>
               </div>

               <p className='text-lg w-[400px] text-gray-500'>
                  The easiest way to build React Landing page in seconds. Save
                  time and focus on your project.
               </p>

               <div className='flex flex-wrap gap-2'>
                  <button className='py-2 px-3 bg-[#026865] text-white rounded-lg cursor-pointer'>Entre em Contacto</button>
               </div>
            </div>
            <img src="mock.png" className='flex bg-contain w-[775px] h-[500px] items-center justify-center' />            
         </div>

            <div className='flex gap-2 justify-center items-center'>
               <div className='bg-[#026865] rounded-full w-4 h-4 cursor-pointer'></div>
               <div className='bg-gray-400 rounded-full w-4 h-4 cursor-pointer'></div>
               <div className='bg-gray-400 rounded-full w-4 h-4 cursor-pointer'></div>
            </div>
         <hr className='mt-10 text-gray-500' />
         
      </>
   );
};

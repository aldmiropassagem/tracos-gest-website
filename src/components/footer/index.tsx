import React from 'react';
import Image from 'next/image';
import {Logo} from '../navbar/logo';

export const Footer = () => {
   return (
        
         <footer className='text-white px-6 bg-[#026865] p-10 flex flex-col'>
         <div className='flex w-full gap-x-20 mb-20'>
            <div className='flex flex-col space-y-2'>
               <Image src="/assets/logo-white.jpeg" alt="Footer logo" width={100} height={100} />
               <p>
                  A sua melhor experiência em gestão.
               </p>
            </div>
            <div className='flex gap-x-56 items-start justify-start'>
               <div className='flex flex-col gap-2'>
                  <h5 className='font-bold'>Mapa do Site</h5>
                  <ul className='gap-y-2'>
                     <li>
                        Página Inicial
                     </li>
                     <li>
                        Serviços
                     </li>
                     <li>
                        Eventos
                     </li>
                     <li>
                        Blog
                     </li>
                     <li>
                        Contacto
                     </li>
                  </ul>
               </div>
            
               <div className='flex flex-col gap-2'>
                  <h5 className='font-bold'>Links Úteis</h5>
                  <ul className='gap-2'>
                     <li>
                        First Link
                     </li>
                  </ul>
               </div>
               <div className='flex flex-col gap-2'>
                  <h5 className='font-bold'>Contactos</h5>
                  <ul className='gap-2'>
                     <li>
                        923 xxx xxx
                     </li>
                  </ul>
               </div>
            </div>
      </div>
      <div className='px-10'>
            <hr className='flex justify-center' />
            <div className='flex flex-wrap gap-2 items-center justify-between pt-4'>
               <div className='flex flex-wrap gap-2 items-center justify-center'>
                  <Logo />
                  <Logo />
               </div>
               <ul className='gap-2 flex justify-center items-center'>
                  <li>
                     Termos de Serviços
                  </li>
                  <div className='w-1 h-1 bg-white rounded-full'></div>
                  <li>
                     Política de Privacidade
                  </li>
               </ul>
               <div className='gap-2'>
                  <p>
                     © Copyright 2025 Traços Gest, Lda.
                  </p>
               </div>
            </div>
         </div>
         </footer>
   )
}

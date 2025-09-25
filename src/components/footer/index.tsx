import React from 'react';
import Image from 'next/image';
import ScrollToTopButton from './scroll-to-top-component';

export const Footer = () => {
   return (
      <footer id='contact' className='opacity-85 text-white bg-[#026865] px-4 sm:px-6 lg:px-10 py-10 flex flex-col w-full mt-24'>

         <div className='flex flex-col lg:flex-row w-full gap-10 lg:gap-20 mb-16'>
            <div className='flex flex-col space-y-2 max-w-sm'>
               <Image src="/assets/logo-white.svg" alt="Footer logo" width={100} height={100} />
               <p className='text-sm sm:text-base'>A sua melhor experiência em gestão.</p>
            </div>

            <div className='flex flex-col sm:flex-row flex-wrap gap-10 lg:gap-20 w-full justify-between'>

               <div className='flex flex-col gap-2'>
                  <h5 className='font-bold'>Mapa do Site</h5>
                  <ul className='space-y-1 text-sm sm:text-base'>
                     <li>Inicio</li>
                     <li>Serviços</li>
                     <li>Eventos</li>
                  </ul>
               </div>

               <div className='flex flex-col gap-2'>
                  <h5 className='font-bold'>Links Úteis</h5>
                  <ul className='space-y-1 text-sm sm:text-base'>
                     <li>Termos de Serviços</li>
                     <li>Política de Privacidade</li>
                  </ul>
               </div>



               <div className='flex flex-col gap-2 max-w-md'>
                  <h5 className='font-bold'>Contactos</h5>
                  <ul className='space-y-3 text-sm sm:text-base'>
                     <li className='flex items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>
                        <span>(+244) 923 352 514</span>
                     </li>
                     <li className='flex items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin-house-icon lucide-map-pin-house"><path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" /><path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" /><path d="M18 22v-3" /><circle cx="10" cy="10" r="3" /></svg>
                        <span>Rua João Belo, Benguela, Benguela</span>
                     </li>
                     <li className='flex items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
                        <span>geral.gest@tracosgroup.com</span>
                     </li>
                  </ul>
               </div>

            </div>
         </div>

         <hr className='border-white/30' />

         <div className='flex flex-col items-center justify-center gap-4 pt-6'>
            <div className='flex gap-4'>
               <svg className="w-6 h-6 hover:text-[#07EA37] cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
               <svg className="w-6 h-6 hover:text-[#07EA37] cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </div>

            <p className='text-center text-sm sm:text-base'>
               © 2025 - Traços Group - Todos Direitos Reservados.
            </p>
         </div>

         <ScrollToTopButton />
      </footer>
   );
};
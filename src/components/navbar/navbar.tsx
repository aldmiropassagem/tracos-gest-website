'use client'

import React, { useState } from 'react';
import { Logo } from './logo';
//import {useTheme as useNextTheme} from 'next-themes';
//import {useTheme} from 'nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import {
   Dialog,
   DialogPanel,
} from '@headlessui/react'
import {
   Bars3Icon,
   XMarkIcon,
} from '@heroicons/react/24/outline'


export const Nav = () => {
   const pathname = usePathname() // Obter a rota atual
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


   const isActive = (path: string) => pathname === path ? 'text-[#026865] font-semibold' : 'text-gray-900' // Verificar rota ativa
   //const {setTheme} = useNextTheme();
   //const {isDark, type} = useTheme();

   const closeMobileMenu = () => setMobileMenuOpen(false)


   const menuItems = [
      { title: 'Página Inicial', href: '/' },
      { title: 'Serviços', href: '/#servicos' },
      { title: 'Eventos', href: '/#eventos' },
      { title: 'Parceiros', href: '/#parceiros' },
      { title: 'Contacto', href: '/#contacto' },
      { title: 'Blog', href: '/#blog' },
      { title: 'Sobre', href: '/sobre' },
   ];

   return (
      <header className="bg-white sticky top-0 shadow-md z-50 bg-opacity-90">
         <nav
            aria-label="Global"
            className='mx-auto w-full h-20 flex items-center justify-between px-10'
         >
            <div className='flex items-center gap-2'>
               <Link href='/' onClick={closeMobileMenu}>
                  <Logo />
               </Link>
            </div>

            <div className="flex lg:hidden">
               <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="-m-1 inline-flex items-center justify-center rounded-md p-2 text-gray-700"
               >
                  <span className="sr-only">Abrir menu principal</span>
                  <Bars3Icon aria-hidden="true" className="h-6 w-6" />
               </button>
            </div>

            <div className='hidden lg:flex relative items-center justify-between w-[60%] float-end'>
               {menuItems.map((item) => (
                  <li key={item.title} className='w-full flex text-start gap-4'>
                     <Link href={item.href} className={`hover:font-semibold hover:text-[#026865] transform-cpu transition-all duration-700 ${isActive(item.href)}`}>
                        {item.title}
                     </Link>
                  </li>
               ))}
            </div>
         </nav>

         <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            {/* Fundo escurecido com mais opacidade */}
            <div className="fixed inset-0 z-40 bg-black bg-opacity-50" />

            {/* Painel lateral do menu mobile */}
            <DialogPanel className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg p-6 overflow-y-auto z-50 min-h-screen flex flex-col">
               <div className="flex items-center justify-between">
                  <button
                     onClick={() => setMobileMenuOpen(false)}
                     className="-m-1 inline-flex items-center justify-center rounded-md p-2 text-gray-700"
                  >
                     <span className="sr-only">Fechar menu</span>
                     <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
               </div>

               <div className="mt-6 flex flex-col space-y-4">
                  {menuItems.map((item) => (
                     <Link
                        key={item.title}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={`hover:font-semibold hover:text-[#026865] transition duration-300 text-base ${isActive(item.href)}`}
                     >
                        {item.title}
                     </Link>
                  ))}
               </div>
            </DialogPanel>
         </Dialog>

      </header>
   );
};

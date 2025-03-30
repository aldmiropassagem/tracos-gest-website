import React from 'react';
import {Logo} from './logo';
//import {useTheme as useNextTheme} from 'next-themes';
//import {useTheme} from 'nextui-org/react';
import {GithubIcon} from '../icons/GithubIcon';
import Link from 'next/link';

export const Nav = () => {
   //const {setTheme} = useNextTheme();
   //const {isDark, type} = useTheme();
   const menuItems = [
      {title: 'Página Inicial', href: '/'},
      {title: 'Sobre', href: '/sobre'},
      {title: 'Produtos', href: '/produtos'},
      {title: 'Serviços', href: '/servicos'},
      {title: 'Eventos', href: '/eventos'},
      {title: 'Blog', href: '/blog'},
      {title: 'Contato', href: '/contato'},
   ];

   return (
      <nav
         className='w-full h-20 flex items-center justify-between bg-white dark:bg-gray-900 dark:text-gray-200 shadow-md px-10'
      >
         <div className='flex items-center gap-2'>
            <Link href='/'>
                <Logo />
            </Link>
         </div>

         <div className='flex items-center justify-between w-[60%] float-end'>
            {menuItems.map((item) => (
               <ul key={item.title} className='w-full flex text-start gap-4'>
                  <Link href={item.title} className='hover:font-semibold hover:text-[#026865] transition duration-500 trasi'>
                     {item.title}
                  </Link>
               </ul>
            ))}
         </div>
      </nav>
   );
};

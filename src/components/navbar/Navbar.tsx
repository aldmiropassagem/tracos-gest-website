'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Logo } from '../navbar/logo'
import { navLinks } from '@/constante'
import { Menu } from 'lucide-react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/16/solid'

export const Nav = () => {
   const [scrolled, setScrolled] = useState(false)
   const [isOpen, setIsOpen] = useState(false)

   useEffect(()=>{
    const handleScrolled = ()=>{
         const isScrolled = window.scrollY > 10;
          setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScrolled);

    return ()=> window.removeEventListener("scroll", handleScrolled)
   },[])

   const closeMenu = ()=> setIsOpen(false)
  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
         {!isOpen && (
             <Link className='logo' href={"/"}>
         <Logo />
         </Link>
         )}
        

         <nav className="desktop">
            <ul>
               {navLinks.map(({title, href})=>(
                  <li key={title} className='group'>
                     <Link href={href}>
                     <span>{title}</span>
                     <span className='underline'></span>
                     </Link>
                  </li>
               ))}
            </ul>
             </nav>
            <Link href={"/#contact"} className='contact-btn group hidden lg:block'>
            <div className='inner'>
               <span>Contate-nos</span>
            </div>
            </Link>
            <div className="flex lg:hidden">
  {!isOpen && ( // só mostra o botão se o menu NÃO estiver aberto
    <button
      type="button"
      onClick={() => setIsOpen(true)}
      className="mt-2 inline-flex items-center justify-center rounded-md p-2 text-white hover:text-gray-300"
    >
      <span className="sr-only">Abrir menu</span>
      <Menu className="h-7 w-7" aria-hidden="true" />
    </button>
  )}
</div>

      </div>
      <Dialog open= {isOpen} onClose={setIsOpen} className="lg:hidden ">

         <div className='fixed inset-0 z-40 bg-black opacity-90'>
            <DialogPanel className="fixed inset-y-0 right-0 w-64 bg-black-50 shadow-lg p-6 z-50 flex flex-col">
               <div className='flex items-center justify-between mb-6'>
                  {isOpen &&(
                     <Link className='logo lg:hidden' href={"/"}>
                      <Logo/>
                     </Link>
                    
                  )}
                  

                  <button onClick={()=> setIsOpen(false)}
                  className='-m-2 p-2 text-white'
                     >
                        <span className='sr-only'>Close Menu</span>
                        <XMarkIcon className='h-6 w-6' aria-hidden = "true"/>
                  </button>
               </div>

               {/* Link Mobile */}
               <div className='flex flex-col space-y-4'>
                  {navLinks.map(({title, href})=>(
                     <Link
                     key={title}
                     href={href}
                     onClick={closeMenu}
                     className=' text-white font-semibold'
                     >
                        {title}
                     </Link>
                     
                  ))}
               </div>

               <div className='mt-auto pt-6'>
                  <Link
                  href={"/#contact"}
                  onClick={closeMenu}
                  className='w-full block bg-[#26865] text-white py-2 rounded-md text-center hover:bg-[#014d4b] transition'
                  >
                     Contacte-nos
                  </Link>
               </div>
            </DialogPanel>

         </div>
      </Dialog>
    </header>
  )
}


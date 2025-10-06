'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  // Estado para controlar a visibilidade do botão
  const [showButton, setShowButton] = useState(false);

  // Função que verifica a posição de rolagem
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    // Exibe o botão quando a rolagem atingir 30% da página
    if (scrollPosition / (documentHeight - windowHeight) > 0.3) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Listener para o evento de rolagem
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Limpeza do listener ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0, // Rola suavemente para o topo
      behavior: 'smooth',
    });
  };

  return (
    <>

        <Link legacyBehavior href={"https://api.whatsapp.com/send?phone=244923352514"}>
        <a target="_blank" rel="noopener noreferrer">
          <button className="fixed bottom-20 right-4 z-50 flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[#01D054] text-white shadow-lg hover:opacity-90 hover:shadow-xl  transform transition-all duration-300 active:scale-95 md:bottom-24 animate-bounce sm:right-6 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32" fill="none">10
              <path d="M16.0003 0.166626C7.28109 0.166626 0.166959 7.28076 0.166959 16C0.166959 18.635 0.883429 21.0214 1.92811 23.176L0.2118 29.2959C0.208553 29.3067 0.205461 29.3175 0.202522 29.3284C-0.153466 30.7524 1.24789 32.1537 2.67184 31.7977C2.68271 31.7948 2.69353 31.7917 2.70431 31.7885L8.82272 30.0737C11.0021 31.1845 13.3965 31.8333 16.0003 31.8333C24.7195 31.8333 31.8336 24.7192 31.8336 16C31.8336 7.28076 24.7195 0.166626 16.0003 0.166626ZM16.0003 2.54163C23.4311 2.54163 29.4586 8.56916 29.4586 16C29.4586 23.4308 23.4311 29.4583 16.0003 29.4583C13.5797 29.4583 11.4198 28.88 9.45203 27.7868C9.1786 27.6351 8.85634 27.5973 8.55522 27.6817L2.6672 29.333L4.31857 23.445C4.39976 23.155 4.3677 22.8449 4.22889 22.5776C3.19029 20.5746 2.54196 18.3965 2.54196 16C2.54196 8.56916 8.56949 2.54163 16.0003 2.54163ZM10.7756 8.95382C10.5381 8.95382 10.0625 9.03267 9.74582 9.42851C9.34998 9.82434 8.4006 10.7743 8.4006 12.5952C8.4006 14.416 9.74674 16.2372 9.90508 16.4746C10.1426 16.7121 12.517 20.6714 16.3961 22.1756C19.5628 23.4422 20.1955 23.2041 20.908 23.125C21.6205 23.0458 23.1256 22.1743 23.4423 21.3035C23.7589 20.3535 23.7592 19.6416 23.7592 19.5625C23.6801 19.4041 23.4423 19.2461 23.0464 19.0878C22.6506 18.8503 20.75 17.9797 20.4333 17.8214C20.0375 17.6631 19.8003 17.5833 19.5628 17.9791C19.3253 18.375 18.6128 19.2461 18.3753 19.4836C18.217 19.7211 17.9795 19.7208 17.5836 19.5625C17.267 19.325 15.9997 18.9288 14.5747 17.6621C13.3872 16.633 12.6753 15.4464 12.4378 15.0506C12.2003 14.6547 12.4372 14.4172 12.5955 14.2589C12.7538 14.1006 12.9923 13.8625 13.1506 13.625C13.3881 13.3875 13.3881 13.2285 13.5464 12.991C13.7048 12.7535 13.6256 12.5169 13.5464 12.3586C13.4673 12.2003 12.6756 10.3003 12.3589 9.58777C12.0423 8.95443 11.7259 8.95382 11.4884 8.95382H10.7756Z" fill="white"/>
            </svg>
            
          </button>
        </a> 
        </Link>
      {/* Botão de rolagem para o topo */}
      {showButton && (
        <button
          onClick={handleClick} // Ativa o scroll suave
          className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[#026865] text-white  text-xl md:text-4xl shadow-lg hover:opacity-90 hover:shadow-xl transform transition-all duration-300 active:scale-95 sm:bottom-6 sm:right-6 border-[#07EA37] border cursor-pointer animate-pulse"
        >
          &#9650; {/* Ícone de seta para cima */}
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;

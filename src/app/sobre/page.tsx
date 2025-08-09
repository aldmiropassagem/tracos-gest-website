'use client'
import React, { useEffect, useState } from 'react';
import { BoxIcon } from '../../components/icons/BoxIcon';
import { FeatureIcon } from '../../components/icons/FeatureIcon';
import Link from 'next/link';
import { FadeInOnScrollProps } from '@/components/FadeInScroll';



const slides = [
     {
         title1: "Sobre - Traços Gest",
         title2: "Consultoria de gestão e negócios",
        description:'Ser reconhecida como uma referência no mercado',
         image: 'assets/bannerAbout-2.jpg',
     
     },
  
     {
         title1: "Empresa de consultoria de gestão e negócios",
         title2: "Com um olhar no futuro",
        description:'criando um legado de sucesso e crescimento para todos os nossos parceiros.',
         image: 'assets/banner-2.jpg',
     }
]



export default function About() {
   const [activeIndex, setActiveIndex] = useState(0);
  
     // Auto slide a cada 5 segundos
     useEffect(() => {
        const interval = setInterval(() => {
           setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
     }, []);
  
     const goToSlide = (index: number) => {
        setActiveIndex(index);
     };
  return (
    <>
      <section>
         <div className="w-full pt-20 relative overflow-hidden bg-white bg-no-repeat bg-fixed bg-cover bg-center transition-all duration-1000 ease-in-outs" style={{
         backgroundImage: `url(${slides[activeIndex].image})`
      }}>

         <div className="w-full h-fit relative">
            <div className="flex transition-transform duration-700 ease-in-out"
               style={{
                  transform: `translateX(-${activeIndex * 100}%)`,
                  //backgroundImage: `url(${slides[activeIndex].image})`
               }}
            >
               {slides.map((slide, index) => (
                  <div key={index} className="w-full min-w-full flex flex-col lg:flex-row gap-8 px-20">
                     <div className={`flex flex-col gap-5 max-w-xl ${activeIndex ? 'text-white' : 'text-black'}`}>
                        <h1 className="text-4xl md:text-5xl font-bold text-center md:text-start">
                           {slide.title1}
                           <span className="text-[#026865]">{slide.title2}</span>
                        </h1>
                        <p className={`text-lg text-center md:text-start ${activeIndex ? 'text-white' : 'text-black'}`}>{slide.description}</p>
                        <div className="flex gap-2 justify-center items-center md:justify-start md:items-start">
                           
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            {/* Indicadores */}
            <div className="gap-2 flex justify-center mt-28">
               {slides.map((_, index) => (
                  <button
                     key={index}
                     className={`w-4 h-4 rounded-full cursor-pointer ${index === activeIndex ? 'bg-[#07EA37]' : 'bg-white'} transition-all duration-700`}
                     onClick={() => goToSlide(index)}
                  />
                  
               ))}
            </div>
           
            
            <hr className="mt-10 text-gray-500" />

         </div>


      </div>
      </section>

      <section className="w-full flex flex-col-reverse md:flex-row gap-10 pt-20 px-6 md:px-10 xl:px-20 items-center">
        <div className="w-full flex flex-col text-justify">
          <FadeInOnScrollProps direction='up'>
          <h3 className="text-2xl text-[#026865] font-semibold mb-2 mt-4">Quem Somos?</h3>
          
          
          <span>
            A Traços Gest é uma empresa de consultoria de gestão e negócios, especializada em apoiar as organizações a
            alcançarem seu potencial através de soluções personalizadas e estratégicas. Com uma equipa de consultores
            experientes, nosso foco consiste em transformar desafios em oportunidades, promovendo o crescimento
            sustentável e a excelência operacional de nossos clientes.
          </span>
          
          <span className="mt-4">
            A nossa abordagem é focada na inovação, análise detalhada e uma execução pragmática, adaptando-nos às
            necessidades de cada cliente e ao contexto específico em que operam.
          </span>
           </FadeInOnScrollProps>
        </div>
       
        <div className="w-full flex justify-center items-center">
          <FeatureIcon />
         
        </div>
        
      </section>

      <section className="flex flex-col xl:flex-row justify-between items-start px-6 md:px-10 xl:px-20 gap-8 text-justify">
        <FadeInOnScrollProps direction='left'>
        <div className="py-10 max-w-full xl:max-w-[400px]">
          <div className="flex gap-2 items-center mb-2">
            <BoxIcon />


            <p className="text-xl text-[#026865] font-semibold">Missão</p>
          </div>
          <span>
            Nossa missão consiste em fornecer uma consultoria de excelência que impulsione o sucesso dos nossos clientes,
            através da aplicabilidade de metodologias eficazes, estratégias inovadoras e soluções personalizadas que
            atendam às reais necessidades do mercado.
          </span>
        </div>
</FadeInOnScrollProps>

        <div className="py-10 max-w-full xl:max-w-[400px]">
          <FadeInOnScrollProps direction='left'>
          <div className="flex gap-2 items-center mb-2">
            <BoxIcon />
            <p className="text-xl text-[#026865] font-semibold">Visão</p>
          </div>
          <span>
            Ser reconhecida como uma referência no mercado de consultoria de gestão e negócios, contribuindo de forma
            significativa para o crescimento e inovação das empresas com as quais trabalhamos. Acreditamos que cada
            organização tem o potencial para alcançar novos horizontes, e estamos comprometidos em ser parceiros
            estratégicos para o sucesso a longo prazo.
          </span>
          </FadeInOnScrollProps>
        </div>

        <div className="py-10 max-w-full xl:max-w-[400px]">
          <FadeInOnScrollProps direction='left'>
          <div className="flex gap-2 items-center mb-2">
            <BoxIcon />
            <p className="text-xl text-[#026865] font-semibold">Valores</p>
          </div>
          <span>
            Pautamo-nos por um conjunto de valores que guiam a nossa forma de trabalhar e de nos relacionarmos com os
            nossos clientes e colaboradores:
          </span>
          <ul className="mt-2 pl-6 list-disc text-justify">
            <li>
              <strong>Compromisso com a excelência: </strong>
              <span>Buscamos sempre os mais altos padrões de qualidade em todos os projectos.</span>
            </li>
            <li>
              <strong>Inovação contínua: </strong>
              <span>
                Acreditamos que a adaptação constante e a implementação de soluções inovadoras são essenciais para o
                sucesso.
              </span>
            </li>
            <li>
              <strong>Integridade: </strong>
              <span>Agimos com transparência e ética, construindo relações de confiança com nossos parceiros.</span>
            </li>
            <li>
              <strong>Sustentabilidade: </strong>
              <span>
                Priorizamos soluções que promovam um crescimento responsável e sustentável, tanto para as empresas como
                para a sociedade.
              </span>
            </li>
          </ul>
          </FadeInOnScrollProps>
        </div>
      </section>

      <section className="flex flex-col xl:flex-row justify-center px-6 md:px-10 xl:px-20 gap-10 border-t-2 border-[#026865] text-justify">
        <div className="py-10 max-w-full xl:max-w-[500px]">

          <FadeInOnScrollProps direction='left'>
          <div className="flex gap-2 items-center mb-2">
            <BoxIcon />
            <p className="text-xl text-[#026865] font-semibold">Objectivos</p>
          </div>
          <ol className="mt-2 pl-6 list-decimal">
            <li>
              Proporcionar soluções personalizadas que atendam às necessidades únicas de cada cliente, maximizando sua
              competitividade no mercado;
            </li>
            <li>
              Apoiar a transformação digital das empresas, capacitando-as a utilizar a tecnologia de forma estratégica
              para melhorar seus processos e resultados.
            </li>
            <li>
              Aumentar a eficiência operacional dos nossos clientes, identificando oportunidades de otimização de
              processos e redução de custos.
            </li>
            <li>
              Expandir o nosso portfólio de serviços, oferecendo consultoria em novas áreas estratégicas que atendam às
              tendências do mercado.
            </li>
            <li>
              Estabelecer parcerias de longo prazo, tornando-nos um pilar no desenvolvimento contínuo dos nossos clientes.
            </li>
          </ol>
          </FadeInOnScrollProps>
        </div>

        <div className="py-10 max-w-full xl:max-w-[500px]">
          <FadeInOnScrollProps direction='left'>
          <div className="flex gap-2 items-center mb-2">
            <BoxIcon />
            <p className="text-xl text-[#026865] font-semibold">Ambição</p>
          </div>
          <p className="mb-4">
            A Traços Gest almeja consolidar-se como líder no mercado de consultoria de gestão e negócios, sendo a escolha
            preferida das empresas que buscam soluções inovadoras e de alto impacto. A nossa ambição é expandir para novos
            mercados, oferecendo nossa expertise a uma gama mais ampla de indústrias e adaptando-nos constantemente às
            mudanças do mercado para continuar a fornecer soluções relevantes e eficazes.
          </p>
          <p>
            Com um olhar no futuro, queremos ser uma empresa reconhecida pela sua capacidade de gerar transformação real e
            sustentável, criando um legado de sucesso e crescimento para todos os nossos parceiros.
          </p>
          </FadeInOnScrollProps>
        </div>
      </section>
    </>
  );
}
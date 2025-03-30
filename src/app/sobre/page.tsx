import React from 'react';
import {BoxIcon} from '../../components/icons/BoxIcon';
import {FeatureIcon} from '../../components/icons/FeatureIcon';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Sobre - Traços Gest",
    description: "A Traços Gest é uma empresa de consultoria de gestão e negócios, especializada em apoiar as organizações a alcançarem seu potencial através de soluções personalizadas e estratégicas.",
  };

export default function About () {
   return (
      <>
      <section className='w-full h-80 flex justify-center items-center bg-gradient-to-l bg-[#026865]'>
        <h2 className='text-6xl text-white text-center font-semibold items-start'>
                  Sobre a Traços Gest
        </h2>
      </section>
         <section className='w-full flex gap-1 pt-20 justify-between items-center gap-x-10 px-20'>
            <div className='w-full flex flex-col'>
               
               <h3 className='text-2xl text-[#026865]  font-semibold mb-2 mt-4'>Quem Somos?</h3>
               <span className='text-justify'>
                  A Traços Gest é uma empresa de consultoria de gestão e negócios, 
                  especializada em apoiar as organizações a alcançarem seu potencial 
                  através de soluções personalizadas e estratégicas. Com uma equipa de consultores experientes, 
                  nosso foco consiste em transformar desafios em oportunidades, 
                  promovendo o crescimento sustentável e a excelência operacional de nossos clientes.
               </span>
               <span className='text-justify'>
                  A nossa abordagem é focada na inovação, 
                  análise detalhada e uma execução pragmática, 
                  adaptando-nos às necessidades de cada cliente e ao contexto específico em que operam.
               </span>
               
            </div>
            <div className='w-full flex justify-center items-center'>
               <FeatureIcon />
            </div>
         </section>

         <section className='flex justify-between items-start px-20 gap-8 text-justify'>
            <div className='py-10 gap-2 max-w-[400px]'>
                  <div className='flex gap-2'>
                  <BoxIcon />
                     <p className='text-xl text-[#026865] font-semibold'>
                        Missão
                     </p>
                  </div>
                  <span>
                     Nossa missão consiste em fornecer uma consultoria de excelência que impulsione 
                     o sucesso dos nossos clientes, através da aplicabilidade de metodologias eficazes, 
                     estratégias inovadoras e soluções personalizadas que atendam às reais necessidades do mercado.
                  </span>
               </div>

               <div className='py-10 gap-2 max-w-[400px]'>
                  <div className='flex gap-2'>
                  <BoxIcon />
                     <p className='text-xl text-[#026865] font-semibold'>
                        Visão
                     </p>
                  </div>
                  <span>
                     Ser reconhecida como uma referência no mercado de consultoria de gestão e negócios, 
                     contribuindo de forma significativa para o crescimento e inovação das empresas com as quais 
                     trabalhamos. Acreditamos que cada organização tem o potencial para alcançar novos horizontes, 
                     e estamos comprometidos em ser parceiros estratégicos para o sucesso a longo prazo.
                  </span>
               </div>

               <div className='py-10 gap-2 max-w-[400px]'>
                  <div className='flex gap-2'>
                  <BoxIcon />
                     <p className='text-xl text-[#026865] font-semibold'>
                        Valores
                     </p>
                  </div>
                  <span>
                     Pautamo-nos por um conjunto de valores que guiam a nossa forma de trabalhar e de nos 
                     relacionarmos com os nossos clientes e colaboradores:
                  </span>
                  <ul style={{ listStyleType: 'disc' }} className='mt-2 text-justify pl-6'>
                     <li>
                        <strong>Compromisso com a excelência: </strong>
                        <span>Buscamos sempre os mais altos padrões de qualidade em todos os projectos.</span>
                     </li>
                     <li>
                        <strong>Inovação contínua: </strong>
                        <span>Acreditamos que a adaptação constante e a implementação de soluções inovadoras são essenciais para o sucesso.</span>
                     </li>
                     <li>
                        <strong>Integridade: </strong>
                        <span>Agimos com transparência e ética, construindo relações de confiança com nossos parceiros.</span>
                     </li>
                     <li>
                        <strong>Sustentabilidade: </strong>
                        <span>
                           Priorizamos soluções que promovam um crescimento responsável e sustentável, 
                           tanto para as empresas como para a sociedade.
                        </span>
                     </li>
                  </ul>
                </div>
         </section>

         <section className='flex justify-center gap-x-20 items-start px-20 gap-8 text-justify border-t-2 border-[#026865]'>
                <div className='py-10 gap-2 max-w-[400px]'>
                  <div className='flex gap-2'>
                  <BoxIcon />
                     <p className='text-xl text-[#026865] font-semibold'>
                        Objectivos
                     </p>
                  </div>
                 
                  <ol type="1" className='mt-2 text-justify pl-6'>
                     <li>
                        1. Proporcionar soluções personalizadas que atendam às 
                        necessidades únicas de cada cliente, maximizando sua competitividade no mercado; 
                     </li>
                     <li>
                        2. Apoiar a transformação digital das empresas, capacitando-as a utilizar a tecnologia de 
                        forma estratégica para melhorar seus processos e resultados.
                     </li>
                     <li>
                        3. Aumentar a eficiência operacional dos nossos clientes, identificando oportunidades de 
                        otimização de processos e redução de custos.
                     </li>
                     <li>
                        4. Expandir o nosso portfólio de serviços, oferecendo consultoria em novas áreas estratégicas 
                        que atendam às tendências do mercado.
                     </li>
                     <li>
                        5. Estabelecer parcerias de longo prazo*, tornando-nos um pilar no desenvolvimento contínuo dos 
                        nossos clientes.
                     </li>
                  </ol>
                </div>

                <div className='py-10 gap-2 max-w-[400px]'>
                  <div className='flex gap-2'>
                  <BoxIcon />
                     <p className='text-xl text-[#026865] font-semibold'>
                        Ambição
                     </p>
                  </div>
                 
                  <p>
                    A Traços Gest almeja consolidar-se como líder no mercado de consultoria de gestão e negócios, sendo a 
                    escolha preferida das empresas que buscam soluções inovadoras e de alto impacto. A nossa ambição é 
                    expandir para novos mercados, oferecendo nossa expertise a uma gama mais ampla de indústrias e 
                    adaptando-nos constantemente às mudanças do mercado para continuar a fornecer soluções relevantes e 
                    eficazes.
                  </p>
                  <p>
                    Com um olhar no futuro, queremos ser uma empresa reconhecida pela sua capacidade de gerar transformação 
                    real e sustentável, criando um legado de sucesso e crescimento para todos os nossos parceiros.
                  </p>
                </div>
         </section>
      </>
   );
};

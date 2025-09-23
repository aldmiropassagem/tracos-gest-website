'use client'

import { FeatureIcon } from '../../components/icons/FeatureIcon';
import { ChartSpline, Crosshair, Eye, ScanEye, SquareCheckBig } from "lucide-react";

const header = [
     {
         title1: "Sobre - Traços Gest",
         title2: "Consultoria de gestão e negócios",
        description:'Ser reconhecida como uma referência no mercado',
         image: 'assets/bannerAbout-2.jpg',
     
     },
  
]

export default function About() {

  return (
    <>
      <section >
         <div  className="w-full h-[300px] md:h-[600px]   pt-20 relative overflow-hidden bg-no-repeat bg-fixed bg-cover bg-top" style={{
         backgroundImage: `url(${header[0].image})`
      }}>

         <div className="w-full h-fit relative">
            <div className="flex transition-transform "
               
            >
               {header.map((header, index) => (
                  <div key={index} className="w-full min-w-full flex flex-col lg:flex-row gap-8 px-20">
                     <div className={`flex flex-col gap-5 max-w-xl `}>
                        <h1 className="text-4xl md:text-5xl font-bold text-center md:text-start text-black">
                           {header.title1}
                           <span className="text-[#026865] ">{header.title2}</span>
                        </h1>
                        <p className={`text-lg text-center md:text-start text-white`}>{header.description}</p>
                        <div className="flex gap-2 justify-center items-center md:justify-start md:items-start">
                           
                        </div>
                     </div>
                  </div>
               ))}
            </div>

         </div>

      </div>
      </section>

      <section 
      className="w-full flex flex-col-reverse md:flex-row gap-10 pt-20 px-6 md:px-10 xl:px-20 items-center">
        <div  
        className="w-full flex flex-col text-justify">
          <h3  
          className={`text-2xl text-[#026865] font-semibold mb-2 mt-4 `}>Quem Somos?</h3>
          
          
          <span
          >
            A Traços Gest é uma empresa de consultoria de gestão e negócios, especializada em apoiar as organizações a
            alcançarem seu potencial através de soluções personalizadas e estratégicas. Com uma equipa de consultores
            experientes, nosso foco consiste em transformar desafios em oportunidades, promovendo o crescimento
            sustentável e a excelência operacional de nossos clientes.
          </span>
          
          <span 
          className={`mt-4 `}>
            A nossa abordagem é focada na inovação, análise detalhada e uma execução pragmática, adaptando-nos às
            necessidades de cada cliente e ao contexto específico em que operam.
          </span>
         
        </div>
       
        <div className={`w-full flex justify-center items-center `}>
          <FeatureIcon />
         
        </div>
        
      </section>

      <section 
      className="flex flex-col xl:flex-row justify-between items-start px-6 md:px-10 xl:px-20 gap-8 text-justify">
        
        <div  
        
        className={`py-10 max-w-full xl:max-w-[400px] `}>
          <div className="flex gap-2 items-center mb-2  text-[#026865]">
            <ChartSpline />


            <p className="text-xl text-[#026865] font-semibold">Missão</p>
          </div>
          <span>
            Nossa missão consiste em fornecer uma consultoria de excelência que impulsione o sucesso dos nossos clientes,
            através da aplicabilidade de metodologias eficazes, estratégias inovadoras e soluções personalizadas que
            atendam às reais necessidades do mercado.
          </span>
        </div>


        <div 
       
        className={`py-10 max-w-full xl:max-w-[400px] `}>
          
          <div className="flex gap-2 items-center mb-2  text-[#026865]">
            <Eye />
            <p className="text-xl text-[#026865] font-semibold">Visão</p>
          </div>
          <span>
            Ser reconhecida como uma referência no mercado de consultoria de gestão e negócios, contribuindo de forma
            significativa para o crescimento e inovação das empresas com as quais trabalhamos. Acreditamos que cada
            organização tem o potencial para alcançar novos horizontes, e estamos comprometidos em ser parceiros
            estratégicos para o sucesso a longo prazo.
          </span>
         
        </div>

        <div  
        className={`py-10 max-w-full xl:max-w-[400px] `}>
          
          <div className="flex gap-2 items-center mb-2  text-[#026865]">
            <SquareCheckBig />
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
         
        </div>
      </section>

      <section className="flex flex-col xl:flex-row justify-center px-6 md:px-10 xl:px-20 gap-10 border-t-2 border-[#026865] text-justify">
        <div 
        
        className="py-10 max-w-full xl:max-w-[500px]">
       
          <div className={`flex gap-2 items-center mb-2  text-[#026865] `}>
            <Crosshair />
            <p className="text-xl text-[#026865] font-semibold">Objectivos</p>
          </div>
          <ol className={`mt-2 pl-6 list-decimal `}>
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
         
        </div>

        <div 
        
        className={`py-10 max-w-full xl:max-w-[500px] `}>
         
          <div className="flex gap-2 items-center mb-2  text-[#026865]">
            <ScanEye />
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
          
        </div>
      </section>
    </>
  );
}
'use client'

import "animate.css"
import { useInView } from "react-intersection-observer";

import React from 'react';
import { BriefcaseBusiness, ChartGantt, FolderKanban, Handshake, LaptopMinimalCheck, Repeat, TrendingUp } from 'lucide-react';

export const Services = () => {

   const servicelist = [
      {
         icon:<ChartGantt/>,
         title: "Consultoria Estratégica", 
         description: "Ajudamos empresas a definir e implementar estratégias de longo prazo que garantem um crescimento sustentável e a criação de valor. A nossa consultoria estratégica envolve:",
          topics: [
            "Planeamento estratégico e análise de mercado;",
            "Definição de visão e objectivos corporativos;",
            "Expansão e internacionalização de negócios;",
            "Desenvolvimento de modelos de negócios inovadores."

         ]
      },
      {
         icon:<FolderKanban/>,
         title: "Gestão de Processos e Eficiência Operacional", 
         description: "Através da otimização de processos, identificamos oportunidades para melhorar a eficiência e reduzir custos. Os nossos serviços incluem:", 
         topics: [
            "Reengenharia de processos empresariais;",
            "Automação e digitalização de processos;",
            "Gestão da cadeia de suprimentos;",
            "Melhoria contínua e implementação de metodologias Lean e Six Sigma."
         ]
      },
      {
         icon:<LaptopMinimalCheck/>,
         title: "Transformação digital e inovação tecnológica", 
         description: "Ajudamos as empresas a se adaptarem à era digital, implementando tecnologias inovadoras para aprimorar a gestão e os resultados:", 
         topics: [
            "Implementação de sistemas de gestão ERP;",
            "Análise e gestão de dados empresariais (Business Intelligence);",
            "Estratégias de marketing digital e e-commerce.",
         ]
      },
      {
         icon:<Repeat/>,
         title: "Gestão de Mudanças", 
         description: "Apoiamos as empresas na gestão de mudanças organizacionais, garantindo que processos de reestruturação, fusões ou aquisições ocorram de maneira eficiente e sem impactos negativos:",
         topics: [
            "Planeamento e execução de mudanças organizacionais;",
            "Gestão de crises e turnaround empresarial;",
            "Desenvolvimento de liderança e programas de capacitação;",
            "Cultura organizacional e engajamento de colaboradores."
         ]
      },
    
      {
         icon:<BriefcaseBusiness/>,
         title: "Consultoria Financeira", 
         description: "Oferecemos suporte completo na gestão financeira, para garantir a saúde financeira e o crescimento sustentável dos negócios. Os serviços incluem:", 
         topics: [
            "Planeamento e gestão financeira estratégica;",
            "Análise de viabilidade de projetos e investimentos;",
            "Elaboração de planos de negócios; ",
            "Assessoria em gestão de riscos financeiros;",
            "Estruturação e reestruturação de dívidas e capital."
         ]
      },
      {
         icon:<TrendingUp/>,
         title: "Desenvolvimento de Pessoas e Liderança", 
         description: "Investimos no capital humano das empresas, desenvolvendo programas personalizados de capacitação e liderança, para maximizar o desempenho das equipes e líderes. Serviços incluem:", 
         topics: [
            "Programas de formação e desenvolvimento de competências;",
            "Coaching e mentoring para líderes;",
            "Desenvolvimento de planos de sucessão e gestão de talentos;",
            "valiação de desempenho e feedback 360°.",
         ]
      },
      {
         icon:<Handshake/>,
         title: "Sustentabilidade e Responsabilidade Social Corporativa", 
         description: "Ajudamos as empresas a implementar práticas sustentáveis e a integrar a responsabilidade social corporativa em sua estratégia de negócios. Os serviços incluem:", 
         topics: [
            "Consultoria em sustentabilidade e ESG (Environmental, Social, Governance);",
            "Implementação de políticas ambientais e sociais;",
            "Planejamento de ações de responsabilidade social;",
            "Certificação e relatórios de impacto socioambiental.",
         ]
      }
   ]

   const {ref, inView} = useInView({
    triggerOnce: true,
    threshold:0.2
  })


   return (
      <section id="servicos" className="w-full flex flex-col items-center justify-center relative pt-20 pb-10 px-6 sm:px-6 lg:px-10 xl:px-20  border-b-2 border-[#026865]">
         
         <div className="flex flex-col justify-center items-center max-w-screen-xl mx-auto">
           
            <h2
            ref={ref} 
            className={`text-3xl sm:text-4xl font-bold text-center mb-6 text-[#026865] transition-opacity duration-700 ${
        inView ? 'animate__animated animate__fadeInDownBig opacity-100': 'opacity-0'  }`}>
               Nossos Serviços
            </h2>

            <p
           
            className={`text-base sm:text-lg text-center mb-6 max-w-4xl text-gray-700 transition-opacity duration-700 ${
        inView ? 'animate__animated animate__fadeInDownBig animate__delay-1s opacity-100': 'opacity-0'  }`}>
               Na Traços Gest, oferecemos uma gama completa de serviços de consultoria de gestão e negócios,
               projectados para atender às diversas necessidades das empresas que buscam melhorar sua performance e
               alcançar novos níveis de sucesso. Nossa abordagem personalizada garante que cada solução seja adaptada às
               especificidades e desafios de cada cliente.
            </p>
           

           
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10 w-full transition-opacity duration-700'>
              {servicelist.map((item, index) => {
   const delayClass = `animate__delay-${Math.min(index, 3)}s`; // até 3s de delay

   return (
      <div
         key={`${item.title}-${index}`}
         className={`p-6 flex flex-col gap-5 border-2 border-gray-300 rounded-xl hover:border-[#026865] transition-all duration-700 shadow-sm hover:shadow-md text-sm bg-white
            ${inView ? `animate__animated animate__fadeInDown ${delayClass} opacity-100` : 'opacity-0'}`}
      >
         <div className="flex flex-col h-full text-[#026865]">
            {item.icon}
            <h4 className="text-lg sm:text-xl font-semibold text-[#026865] mb-2">
               {item.title}
            </h4>
            <p className="text-justify text-gray-700 mb-2">
               {item.description}
            </p>
            <ol className="font-semibold pl-4 space-y-1 mt-auto">
               {item.topics.map((topic, index) => (
                  <li key={index}><span className="text-[#026865]">•</span> {topic}</li>
               ))}
            </ol>
         </div>
      </div>
   );
})}

            </div>
          
         </div>
         
      </section>

   );
};

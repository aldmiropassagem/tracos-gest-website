import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';

export const Services = () => {

   const servicelist = [
      {title: "Consultoria Estratégica", description: "Ajudamos empresas a definir e implementar estratégias de longo prazo que garantem um crescimento sustentável e a criação de valor. A nossa consultoria estratégica envolve:", topics: [
         "Planeamento estratégico e análise de mercado;",
         "Definição de visão e objectivos corporativos;",
         "Expansão e internacionalização de negócios;",
         "Desenvolvimento de modelos de negócios inovadores."

      ]},
      {title: "Consultoria em Gestão de Processos e Eficiência Operacional", description: "Através da otimização de processos, identificamos oportunidades para melhorar a eficiência e reduzir custos. Os nossos serviços incluem:", topics: [
         "Reengenharia de processos empresariais;",
         "Automação e digitalização de processos;",
         "Gestão da cadeia de suprimentos;",
         "Melhoria contínua e implementação de metodologias Lean e Six Sigma."
      ]},
      {title: "Consultoria em transformação digital e inovação tecnológica", description: "Ajudamos as empresas a se adaptarem à era digital, implementando tecnologias inovadoras para aprimorar a gestão e os resultados:", topics: [
         "Implementação de sistemas de gestão ERP;",
         "Análise e gestão de dados empresariais (Business Intelligence);",
         "Estratégias de marketing digital e e-commerce.",
      ]},
      {title: "Consultoria em Gestão de Mudanças", description: "Apoiamos as empresas na gestão de mudanças organizacionais, garantindo que processos de reestruturação, fusões ou aquisições ocorram de maneira eficiente e sem impactos negativos:", topics: [
         "Planeamento e execução de mudanças organizacionais;",
         "Gestão de crises e turnaround empresarial;",
         "Desenvolvimento de liderança e programas de capacitação;",
         "Cultura organizacional e engajamento de colaboradores."
      ]},
      {title: "Consultoria em Gestão de Mudanças", description: "Apoiamos as empresas na gestão de mudanças organizacionais, garantindo que processos de reestruturação, fusões ou aquisições ocorram de maneira eficiente e sem impactos negativos:", topics: [
         "Planeamento e execução de mudanças organizacionais;",
         "Gestão de crises e turnaround empresarial;",
         "Desenvolvimento de liderança e programas de capacitação;",
         "Cultura organizacional e engajamento de colaboradores."
      ]},
      {title: "Consultoria Financeira", description: "Oferecemos suporte completo na gestão financeira, para garantir a saúde financeira e o crescimento sustentável dos negócios. Os serviços incluem:", topics: [
         "Planeamento e gestão financeira estratégica;",
         "Análise de viabilidade de projetos e investimentos;",
         "Elaboração de planos de negócios; ",
         "Assessoria em gestão de riscos financeiros;",
         "Estruturação e reestruturação de dívidas e capital."
      ]},  
      {title: "Consultoria em Desenvolvimento de Pessoas e Liderança", description: "Investimos no capital humano das empresas, desenvolvendo programas personalizados de capacitação e liderança, para maximizar o desempenho das equipes e líderes. Serviços incluem:", topics: [
         "Programas de formação e desenvolvimento de competências;",
         "Coaching e mentoring para líderes;",
         "Desenvolvimento de planos de sucessão e gestão de talentos;",
         "valiação de desempenho e feedback 360°.",
      ]},
      {title: "Consultoria em Sustentabilidade e Responsabilidade Social Corporativa", description: "Ajudamos as empresas a implementar práticas sustentáveis e a integrar a responsabilidade social corporativa em sua estratégia de negócios. Os serviços incluem:", topics: [
         "Consultoria em sustentabilidade e ESG (Environmental, Social, Governance);",
         "Implementação de políticas ambientais e sociais;",
         "Planejamento de ações de responsabilidade social;",
         "Certificação e relatórios de impacto socioambiental.",
      ]}
   ]
   

   return (
      <>
         <section className='flex w-full flex-col items-center justify-center relative pt-20 py-10 px-20 border-b-2 border-[#026865]'>
            <div className='flex flex-col justify-center items-center'>
            <h2 className='text-4xl font-bold text-center mb-6 text-[#026865]'>
               Nossos Serviços
            </h2>
            <p className='w-[800px] text-lg text-center mb-6'>
               Na Traços Gest, oferecemos uma gama completa de serviços de consultoria de gestão e negócios, 
               projectados para atender às diversas necessidades das empresas que buscam melhorar sua performance e 
               alcançar novos níveis de sucesso. Nossa abordagem personalizada garante que cada solução seja adaptada às 
               especificidades e desafios de cada cliente.
            </p>
               
               
                  <div  className='grid grid-cols-3 gap-x-10 py-10 px-20'>
                  {servicelist.map((item)=>
                     <div key={item.title} className='p-4 flex flex-col gap-5 py-10 w-96 m-4 border-2 border-gray-300 rounded-xl hover:border-[#026865] cursor-pointer transition duration-300 shadow text-sm'>
                        
                        <div className='flex flex-col'>
                           <BoxIcon />
                           <h4 className='text-xl font-semibold text-[#026865] mb-4'>
                              {item.title}
                           </h4>
                           <p className='text-justify'>
                             {item.description}
                           </p>
                           <ol type='1' className='font-semibold pl-4 mt-1'>
                              {item.topics.map((topic, index) => (
                                  <li key={index}><span>•</span> {topic}</li>
                              ))}
                           </ol>
                        </div>
                     </div>
                     )}
                  </div>
            </div>
         </section>
      </>
   );
};

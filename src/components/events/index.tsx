import React from 'react';
import Image from 'next/image';

export const Eventos = () => {
  return (
    <section id="eventos" className="flex flex-col items-center justify-center w-full pt-20 pb-14 px-4 sm:px-6 lg:px-10 xl:px-20 mt-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-[#026865]">
        Eventos
      </h2>

      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-10">
          
          <div className="flex items-center justify-center w-full max-w-md h-auto">
            <Image
              src="/assets/fipe.png"
              alt="FIPE"
              width={600}
              height={150}
              className="w-full h-auto object-contain"
              loading="lazy"
              quality={100}
            />
          </div>

          <div className="w-full max-w-2xl text-justify">
            <h5 className="text-[#026865] font-semibold text-lg mb-2">Sobre a FIPE</h5>
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
              <strong>A FIPE - Feira de Inteligência e Política Económica</strong>, é um evento de referência dedicado à promoção do conhecimento, inovação e diálogo estratégico nas áreas da inteligência económica, análise de dados e formulação de políticas públicas.
              Realizada anualmente, a FIPE reúne especialistas, decisores políticos, académicos, empresas e instituições, criando uma plataforma dinâmica para a partilha de ideias, experiências e soluções que impulsionam o desenvolvimento sustentável e a competitividade económica. <br /><br />
              O principal objetivo da FIPE é fomentar a cooperação entre os sectores público e privado, estimular o pensamento crítico e apresentar ferramentas e práticas inovadoras que orientem decisões estratégicas baseadas em evidências.
              A feira inclui conferências, workshops, exposições temáticas e sessões de networking, proporcionando um ambiente fértil para a troca de conhecimento e a criação de oportunidades.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

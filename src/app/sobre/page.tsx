'use client'

import GlowCard from "@/components/GlowCard";
import TitleHeader from "@/components/TitleHeader";
import { about} from "@/constante";

export default function About() {

  return (
    <>
      <section className="hero-layout overflow-hidden">
        <div>
          <img src="/images/bg-sobre.webp" alt="image" className="w-full  object-cover"/>          
        </div>

        <div className="absolute inset-0 flex flex-col md:w-full w-screen md:px-20 px-5 justify-center text-white ">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Lado Esquerdo */}
          {about.map((item, index)=>(
             <GlowCard index={index} key={index} className="bg-transparent">
              <div className="flex flex-col gap-5">
                <TitleHeader title="SOBRE A TRAÇOS"/>
                <p className="text-lg leading-relaxed">
                  {item.review}
                </p>

                <p className="text-sm opacity-80">
                  {item.desc}
                </p>
              </div>
           </GlowCard>
          ))}

          {/* Lado direito */}

          <div className="opacity-50">
            <img src="/images/logo.png" alt="tracos-logo"/>
          </div>
          </div>
        </div>        
      </section>       
        
    </>
  );
}
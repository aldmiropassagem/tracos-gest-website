'use client'

import Pilares from "@/components/aboutCard/Pilares";
import GlowCard from "@/components/GlowCard";
import TitleHeader from "@/components/TitleHeader";
import { about} from "@/constante";

export default function About() {

  return (
    <>
      <section className=" hero-layout relative min-h-screen md:mt-20 mb-20">
        <div>
          <img src="/images/bg-sobre.webp" alt="image" className=" inset-0 absolute w-full h-full object-cover"/>          
        </div>

        <div className="absolute min-5-h-screen  inset-0 flex flex-col md:w-full w-screen  md:px-20 px-5  justify-center text-white ">
          <div className="grid xl:grid-cols-2 md:grid-cols-1 gap-10 md:mt-20  items-center">
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

          <div className="opacity-50 flex justify-center">
            <img src="/images/logo.png" alt="tracos-logo" className="spin-slow max-w-[500px]"/>
          </div>
          </div>
        </div>   
            
      </section>   

      <Pilares/>    
        
    </>
  );
}
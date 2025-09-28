"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { pilares } from "@/constante"
import GlowCard from "../GlowCard"
import TitleHeader from "../TitleHeader"

gsap.registerPlugin(ScrollTrigger)

const Pilares = () => {
  useGSAP(() => {
    // animação dos cards (GlowCard)
    gsap.utils.toArray<HTMLElement>('.timeline-card').forEach((card)=>{
            gsap.from(card, {
                xPercent: -100,
                opacity:0,
                transformOrigin:"left left",
                duration:1,
                ease:"power2.inOut",
                scrollTrigger:{
                    trigger:card,
                    start:"top 80%"
                }
            })
        })

       gsap.to(".pilar-text",{
            transformOrigin:"bottom bottom",
            ease:"power2.inOut",
            scrollTrigger:{
                trigger:".timeline",
                start:"top center",
                end:"70% center",
                onUpdate:(self)=>{
                    gsap.to(".pilar",{
                        scaleY:1 - self.progress
                    })
                }
            }
        })

         gsap.utils.toArray<HTMLElement>('.expText').forEach((text)=>{
          gsap.from(text, {
            xPercent: 0,
            opacity:0,
            duration: 1,
            ease: 'power2.inOut',
            scrollTrigger:{
            trigger: text,
            start: 'top 60%'
            }
          })
        })
  }, [])

  return (
    <section className="z-0 flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Nossos Pilares" />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16 space-y-6">
          {pilares.map((pilar, index) => (
            <GlowCard key={pilar.title} index={index}>
              <div className="flex flex-col gap-4 expText pilar-text">
                <h3 className="font-bold text-xl">{pilar.title}</h3>
                <p className="text-white leading-relaxed">{pilar.text}</p>

                {pilar.li && (
                  <ul className="list-disc list-inside space-y-2 text-white-70">
                    {pilar.li.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pilares

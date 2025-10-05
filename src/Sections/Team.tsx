'use client'

import GlowCard from "@/components/GlowCard"
import TitleHeader from "@/components/TitleHeader"
import { team, type Team as TeamType } from "@/constante"

type TeamColumnProps = {
  members: TeamType[]
  animationClass: string
  isMobile?: boolean
}

const TeamColumn = ({ members, animationClass, isMobile }: TeamColumnProps) => (
  <div
    className={`overflow-hidden client-col relative ${
      isMobile ? "h-[220px] w-full" : "h-[220px]"
    }`}
  >
    <div
      className={`flex ${
        isMobile ? "flex-row" : "flex-col"
      } gap-6 ${animationClass} py-6`}
    >
      {[...Array(2)].map((_, repeatIndex) =>
        members.map(({ id, name, position, review, img }, index) => (
          <GlowCard key={`${id}-${repeatIndex}`} index={index}>
            <div className="flex flex-col gap-3">
              {/* Texto do review no topo */}
              {review && (
                <p className="text-white/80">
                  “{review}”
                </p>
              )}

              {/* Bloco com imagem e infos */}
              <div className="flex items-center gap-3 mt-2">
                <img
                  src={img}
                  alt={`Foto de ${name}`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-white">{name}</p>
                  <p className="text-white/50 text-sm">{position}</p>
                </div>
              </div>
            </div>
          </GlowCard>
        ))
      )}
    </div>
  </div>
)

export const Team = () => {
  const numCols = 3
  const columns: TeamType[][] = Array.from({ length: numCols }, () => [])
  team.forEach((member, i) => columns[i % numCols].push(member))

  return (
    <section id="team" aria-label="Nossa equipe" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Equipa" />

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-3 gap-6 mt-16">
          {columns.map((col, i) => (
            <TeamColumn
              key={i}
              members={col}
              animationClass={`animate-col-${i + 1}`}
            />
          ))}
        </div>

        {/* Mobile */}
        <div className="flex md:hidden mt-16">
          <TeamColumn
            members={team}
            animationClass="animate-row"
            isMobile
          />
        </div>
      </div>
    </section>
  )
}

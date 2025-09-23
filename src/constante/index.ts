export type NavLink = {
    title: string,
    href: string,
};

export const navLinks: NavLink[]=[
    {title:"Inicio", href:"/"},
    {title:"Serviços", href:"/#services"},
    {title:"Eventos", href:"/#events"},
    {title:"Parceiros", href:"/#partners"},
    {title:"Sobre", href:"/sobre"},
]

export type Words = {
    text:string,
    imgPath:string
};

export const words: Words[]=[
  { text: "Inovação", imgPath: "/images/inovation.svg" },
  { text: "Gestão", imgPath: "/images/management.svg" },
  { text: "Resultados", imgPath: "/images/results.svg" },
  { text: "Crescimento", imgPath: "/images/growth.svg" },
  { text: "Inovação", imgPath: "/images/inovation.svg" },
  { text: "Gestão", imgPath: "/images/management.svg" },
  { text: "Resultados", imgPath: "/images/results.svg" },
  { text: "Crescimento", imgPath: "/images/growth.svg" },

]

export type ServiceCard = {
    title:string,
    desc:string,
    li:string[],
    logo:string,
    
};

export const serviceCards: ServiceCard[]=[
    {
        title: "Consultoria Estratégica",
        desc:"Ajudamos empresas a definir e implementar estratégias de longo prazo que garantem um crescimento sustentável e a criação de valor.",
        li:[
            "Planeamento estratégico e análise de mercado.",
            "Definição de visão e objectivos corporativos.",
            "Expansão e internacionalização de negócios.",
            "Desenvolvimento de modelos de negócios inovadores."

        ],
        
        logo:"/images/logo1.svg",

    },

    {
        title:"Gestão de Processos e Eficiência Operacional",
        desc:"Através da otimização de processos, identificamos oportunidades para melhorar a eficiência e reduzir custos.",
        li:[
            "Reengenharia de processos empresariais;",
            "Automação e digitalização de processos",
            "Gestão da cadeia de suprimentos;",
            "Melhoria contínua e implementação de metodologias Lean e Six Sigma.",
        ],
        logo:"/images/logo2.svg",
    },

    // 3

     {
        title:"Transformação digital e inovação tecnológica",
        desc:"Ajudamos as empresas a se adaptarem à era digital, implementando tecnologias inovadoras para aprimorar a gestão e os resultados:",
        li:[
            "Implementação de sistemas de gestão ERP;",
            "Análise e gestão de dados empresariais (Business Intelligence);",
            "Estratégias de marketing digital e e-commerce;",
        ],
        logo:"/images/logo3.svg",
    },

    // 4

     {
        title:"Gestão de Mudanças",
        desc:"Apoiamos as empresas na gestão de mudanças organizacionais, garantindo que processos de reestruturação, fusões ou aquisições ocorram de maneira eficiente e sem impactos negativos:",
        li:[
            "Planeamento e execução de mudanças organizacionais;",
            "Gestão de crises e turnaround empresarial;",
            "Desenvolvimento de liderança e programas de capacitação;",
            "Cultura organizacional e engajamento de colaboradores.",
        ],
        logo:"/images/logo4.png",
    },

    //5

     {
        title:"Consultoria Financeira",
        desc:"Oferecemos suporte completo na gestão financeira, para garantir a saúde financeira e o crescimento sustentável dos negócios.",
        li:[
            "Planeamento e gestão financeira estratégica;",
            "Análise de viabilidade de projetos e investimentos; ",
            "Elaboração de planos de negócios;",
            "Assessoria em gestão de riscos financeiros;",
            " Estruturação e reestruturação de dívidas e capital."
        ],
        logo:"/images/logo5.svg",
    },
    // 6

     {
        title:"Desenvolvimento de Pessoas e Liderança",
        desc:"Investimos no capital humano das empresas, desenvolvendo programas personalizados de capacitação e liderança, para maximizar o desempenho das equipes e líderes.",
        li:[
            " Programas de formação e desenvolvimento de competências;",
            "Coaching e mentoring para líderes;",
            "Desenvolvimento de planos de sucessão e gestão de talentos;",
            "valiação de desempenho e feedback 360°.",
        ],
       logo:"/images/logo6.svg",
    },

    // 7

     {
        title:"Sustentabilidade e Responsabilidade Social Corporativa",
        desc:"Ajudamos as empresas a implementar práticas sustentáveis e a integrar a responsabilidade social corporativa em sua estratégia de negócios.",

        li:[
            "Consultoria em sustentabilidade e ESG (Environmental, Social,Governance);",
            "Implementação de políticas ambientais e sociais;",
            "Planejamento de ações de responsabilidade social;",
            "Certificação e relatórios de impacto socioambiental.",
        ],
       logo:"/images/logo7.png",
    }
]

export type Events ={
  strong:string,
  desc:string,
    
}

export const event:Events[]=[
    {
        strong:"é um evento de referência dedicado à promoção do conhecimento, inovação e diálogo estratégico nas áreas da inteligência económica, análise de dados e formulação de políticas públicas. Realizada anualmente, a FIPE reúne especialistas, decisores políticos, académicos, empresas e instituições, criando uma plataforma dinâmica para a partilha de ideias, experiências e soluções que impulsionam o desenvolvimento sustentável e a competitividade económica.",
        desc:"O principal objetivo da FIPE é fomentar a cooperação entre os sectores público e privado, estimular o pensamento crítico e apresentar ferramentas e práticas inovadoras que orientem decisões estratégicas baseadas em evidências.A feira inclui conferências, workshops, exposições temáticas e sessões de networking, proporcionando um ambiente fértil para a troca de conhecimento e a criação de oportunidades.",
        
    },
    
]
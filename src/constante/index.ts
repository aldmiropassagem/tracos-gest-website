export type NavLink = {
    title: string,
    href: string,
};

export const navLinks: NavLink[]=[
    {title:"Inicio", href:"/"},
    {title:"Serviços", href:"/#services"},
    {title:"Eventos", href:"/#events"},
    {title:"Equipa", href:"/#team"},
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
    review:string,
    li:string[],
    logo:string,
    
};


export const serviceCards: ServiceCard[]=[
    {
        title: "Consultoria Estratégica",
        review:"Ajudamos empresas a definir e implementar estratégias de longo prazo que garantem um crescimento sustentável e a criação de valor.",
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
        review:"Através da otimização de processos, identificamos oportunidades para melhorar a eficiência e reduzir custos.",
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
        review:"Ajudamos as empresas a se adaptarem à era digital, implementando tecnologias inovadoras para aprimorar a gestão e os resultados:",
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
       review:"Apoiamos as empresas na gestão de mudanças organizacionais, garantindo que processos de reestruturação, fusões ou aquisições ocorram de maneira eficiente e sem impactos negativos:",
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
        review:"Oferecemos suporte completo na gestão financeira, para garantir a saúde financeira e o crescimento sustentável dos negócios.",
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
        review:"Investimos no capital humano das empresas, desenvolvendo programas personalizados de capacitação e liderança, para maximizar o desempenho das equipes e líderes.",
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
        review:"Ajudamos as empresas a implementar práticas sustentáveis e a integrar a responsabilidade social corporativa em sua estratégia de negócios.",

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

export type About ={
  review:string,
  desc:string,
    
}

export const about:About[]=[
    {
        review:"A Traços Gest é uma empresa de consultoria de gestão e negócios, especializada em apoiar as organizações a alcançarem seu potencial através de soluções personalizadas e estratégicas. Com uma equipa de consultores experientes, nosso foco consiste em transformar desafios em oportunidades, promovendo o crescimento sustentável e a excelência operacional de nossos clientes.",
        desc:"A nossa abordagem é focada na inovação, análise detalhada e uma execução pragmática, adaptando-nos às necessidades de cada cliente e ao contexto específico em que operam."
    }
]

export type Pilar = {
        title:string,
        text?:string,
        li?:string[],
        review:string,
     }

export const pilares:Pilar[]=[
    {
    title:"Missão",
    text:"Nossa missão consiste em fornecer uma consultoria de excelência que impulsione o sucesso dos nossos clientes, através da aplicabilidade de metodologias eficazes, estratégias inovadoras e soluções personalizadas que atendam às reais necessidades do mercado.",
    review:""
},

{
    title:"Visão",
    text:"Ser reconhecida como uma referência no mercado de consultoria de gestão e negócios, contribuindo de forma significativa para o crescimento e inovação das empresas com as quais trabalhamos. Acreditamos que cada organização tem o potencial para alcançar novos horizontes, e estamos comprometidos em ser parceiros estratégicos para o sucesso a longo prazo.",
    review:""
},

{
    title:"Valores",
     li:[
        "Compromisso com a excelência: Buscamos sempre os mais altos padrões de qualidade em todos os projectos.",
        "Inovação contínua: Acreditamos que a adaptação constante e a implementação de soluções inovadoras são essenciais para o sucesso.",
        "Integridade: Agimos com transparência e ética, construindo relações de confiança com nossos parceiros.",
        "Sustentabilidade: Priorizamos soluções que promovam um crescimento responsável e sustentável, tanto para as empresas como para a sociedade."
    ],
    text:"Pautamo-nos por um conjunto de valores que guiam a nossa forma de trabalhar e de nos relacionarmos com os nossos clientes e colaboradores:",
    review:""
   

},

{
    title:"Objectivos",
    li:[
        "Proporcionar soluções personalizadas que atendam às necessidades únicas de cada cliente, maximizando sua competitividade no mercado;",
        "Apoiar a transformação digital das empresas, capacitando-as a utilizar a tecnologia de forma estratégica para melhorar seus processos e resultados.",
        "Aumentar a eficiência operacional dos nossos clientes, identificando oportunidades de otimização de processos e redução de custos.",
        "Expandir o nosso portfólio de serviços, oferecendo consultoria em novas áreas estratégicas que atendam às tendências do mercado.",
        "Estabelecer parcerias de longo prazo, tornando-nos um pilar no desenvolvimento contínuo dos nossos clientes.",
       
    ],
     review:"",
},

{
    title:"Ambição",
    text:"A Traços Gest almeja consolidar-se como líder no mercado de consultoria de gestão e negócios, sendo a escolha preferida das empresas que buscam soluções inovadoras e de alto impacto. A nossa ambição é expandir para novos mercados, oferecendo nossa expertise a uma gama mais ampla de indústrias e adaptando-nos constantemente às mudanças do mercado para continuar a fornecer soluções relevantes e eficazes. Com um olhar no futuro, queremos ser uma empresa reconhecida pela sua capacidade de gerar transformação real e sustentável, criando um legado de sucesso e crescimento para todos os nossos parceiros.",
    review:""
}
]

export type Team ={
    id:number,
    name:string,
    img:string,
    review:string,
    position:string
};

export const team:Team[]=[
    {
        id:1,
        name:"Obed René",
        position:"CEO",
        review:"O sucesso dos nossos clientes é a medida mais autêntica do nosso próprio sucesso.",
        img:"/images/avatar1.jpeg",
    },
    
    {
        id: 2,
        name:"Leixa René",
        position:"Directora Recursos Humanos",
        review:"O sucesso sustentável nasce de equipes valorizadas, motivadas e alinhadas. Cuidar de pessoas é cuidar do futuro da empresa.",
        img:"/images/avatar2.jpg"
    },

    {
        id: 3,
        name:"Frederico Silva",
        position:"Director de Operações (COO)",
        review:"Trabalhamos todos os dias para que as ideias estratégicas da Traços Gest se tornem impacto real — com disciplina, clareza e execução.",
        img:"/images/3.png",
    },

    {
        id: 4,
        name:"Alexia Costa",
        position:"Directora Comercial e Projecto",
        review:"Acredito que cada cliente é um novo desafio e cada projeto uma chance de superar expectativas com soluções inovadoras e eficazes.",
        img:"/images/4.png"
    },

    {
        id: 5,
        name:"Valquíria Ribeiro",
        position:"Directora de Markting",
         review:"Acredito no poder das ideias certas, no momento certo, para transformar percepções e gerar valor verdadeiro para a marca.",
        img:"/images/avatar5.png"
    },

    {
        id: 6,
        name:"Hercos Fançony",
        position:"Director de Relações Instituicionais",
         review:"O diálogo e a parceria estratégica são as ferramentas que fortalecem a presença da Traços Gest e ampliam o nosso impacto no ecossistema empresarial.",
       img:"/images/avatar6.webp"
    }
]
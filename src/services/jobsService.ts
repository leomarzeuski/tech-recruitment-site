import { Job } from '@/types/job';

// Dados das vagas (em produção, isso viria de uma API)
export const jobsData: Job[] = [
  {
    id: 1,
    title: "Senior React Developer",
    company: "TechCorp",
    location: "Remote",
    salary: "R$ 15.000 - R$ 20.000",
    tech: ["React", "TypeScript", "Next.js", "Redux", "Jest"],
    type: "Full-time",
    level: "Senior",
    description:
      "Estamos procurando um desenvolvedor React senior para liderar nossos projetos front-end. Você trabalhará com tecnologias modernas e terá a oportunidade de arquitetar soluções escaláveis.",
    requirements: [
      "5+ anos de experiência com React",
      "Conhecimento sólido em TypeScript",
      "Experiência com Next.js",
      "Conhecimento em testes automatizados (Jest, Testing Library)",
      "Experiência com Redux ou Context API",
      "Inglês intermediário",
    ],
    benefits: [
      "Salário competitivo",
      "Plano de saúde premium",
      "Vale refeição R$ 1.000",
      "Ambiente de trabalho flexível",
      "Desenvolvimento profissional contínuo",
      "Stock options",
    ],
    companyInfo: {
      name: "TechCorp",
      size: "100-500 funcionários",
      industry: "Tecnologia",
      founded: "2015",
    },
  },
  {
    id: 2,
    title: "DevOps Engineer",
    company: "CloudStart",
    location: "São Paulo",
    salary: "R$ 12.000 - R$ 18.000",
    tech: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"],
    type: "Full-time",
    level: "Pleno",
    description:
      "Procuramos um DevOps Engineer para otimizar nossa infraestrutura cloud e processos de CI/CD. Você será responsável por automatizar deployments e garantir a escalabilidade de nossos sistemas.",
    requirements: [
      "3+ anos de experiência com AWS",
      "Conhecimento em Docker e Kubernetes",
      "Experiência com CI/CD (Jenkins, GitHub Actions)",
      "Conhecimento em Terraform ou CloudFormation",
      "Experiência com monitoramento (CloudWatch, Prometheus)",
      "Conhecimento em Linux",
    ],
    benefits: [
      "Salário competitivo",
      "Plano de saúde",
      "Vale refeição R$ 800",
      "Escritório moderno em SP",
      "Certificações pagas pela empresa",
      "Horário flexível",
    ],
    companyInfo: {
      name: "CloudStart",
      size: "50-100 funcionários",
      industry: "Cloud Computing",
      founded: "2018",
    },
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Híbrido",
    salary: "R$ 8.000 - R$ 12.000",
    tech: ["Node.js", "React", "MongoDB", "Express", "GraphQL"],
    type: "Full-time",
    level: "Júnior",
    description:
      "Oportunidade para desenvolvedor júnior crescer em uma startup inovadora. Você trabalhará em projetos desafiadores e terá mentoria direta dos fundadores.",
    requirements: [
      "1+ ano de experiência com JavaScript",
      "Conhecimento em React",
      "Experiência com Node.js",
      "Conhecimento em bancos de dados (MongoDB, PostgreSQL)",
      "Vontade de aprender e crescer",
      "Inglês básico",
    ],
    benefits: [
      "Salário inicial atrativo",
      "Plano de saúde",
      "Vale refeição R$ 600",
      "Ambiente startup dinâmico",
      "Participação nos lucros",
      "Mentoria especializada",
    ],
    companyInfo: {
      name: "StartupXYZ",
      size: "10-50 funcionários",
      industry: "Fintech",
      founded: "2020",
    },
  },
  {
    id: 4,
    title: "Backend Developer",
    company: "DataTech",
    location: "Remote",
    salary: "R$ 10.000 - R$ 15.000",
    tech: ["Python", "Django", "PostgreSQL", "Redis", "Celery"],
    type: "Full-time",
    level: "Pleno",
    description:
      "Junte-se à nossa equipe de backend para desenvolver sistemas robustos e escaláveis. Você trabalhará com grandes volumes de dados e arquiteturas distribuídas.",
    requirements: [
      "3+ anos de experiência com Python",
      "Conhecimento sólido em Django",
      "Experiência com PostgreSQL",
      "Conhecimento em Redis e Celery",
      "Experiência com APIs REST",
      "Conhecimento em Docker",
    ],
    benefits: [
      "Salário competitivo",
      "Plano de saúde",
      "Vale refeição R$ 750",
      "Trabalho remoto",
      "Equipamento fornecido",
      "Auxílio educação",
    ],
    companyInfo: {
      name: "DataTech",
      size: "200-500 funcionários",
      industry: "Análise de Dados",
      founded: "2017",
    },
  },
  {
    id: 5,
    title: "Frontend Developer",
    company: "DesignCorp",
    location: "Rio de Janeiro",
    salary: "R$ 7.000 - R$ 11.000",
    tech: ["Vue.js", "Nuxt.js", "Tailwind", "JavaScript", "Figma"],
    type: "Full-time",
    level: "Júnior",
    description:
      "Oportunidade para desenvolvedor frontend júnior crescer em uma empresa focada em design e experiência do usuário. Você trabalhará criando interfaces modernas e intuitivas.",
    requirements: [
      "1+ ano de experiência com Vue.js",
      "Conhecimento em Nuxt.js",
      "Experiência com Tailwind CSS",
      "Conhecimento em JavaScript ES6+",
      "Familiaridade com Figma",
      "Inglês básico",
    ],
    benefits: [
      "Salário inicial atrativo",
      "Plano de saúde",
      "Vale refeição R$ 600",
      "Ambiente criativo",
      "Cursos de design",
      "Horário flexível",
    ],
    companyInfo: {
      name: "DesignCorp",
      size: "20-50 funcionários",
      industry: "Design & UX",
      founded: "2019",
    },
  },
  {
    id: 6,
    title: "Mobile Developer",
    company: "AppMobile",
    location: "Belo Horizonte",
    salary: "R$ 9.000 - R$ 14.000",
    tech: ["React Native", "Flutter", "Expo", "Firebase", "TypeScript"],
    type: "Full-time",
    level: "Pleno",
    description:
      "Desenvolvedor mobile para criar aplicativos inovadores para iOS e Android. Você trabalhará com as mais recentes tecnologias mobile e terá a oportunidade de impactar milhares de usuários.",
    requirements: [
      "3+ anos de experiência com React Native",
      "Conhecimento em Flutter",
      "Experiência com Expo",
      "Conhecimento em Firebase",
      "Experiência com TypeScript",
      "Conhecimento em testes mobile",
    ],
    benefits: [
      "Salário competitivo",
      "Plano de saúde premium",
      "Vale refeição R$ 800",
      "Escritório moderno em BH",
      "Dispositivos para testes",
      "Participação nos lucros",
    ],
    companyInfo: {
      name: "AppMobile",
      size: "50-100 funcionários",
      industry: "Desenvolvimento Mobile",
      founded: "2016",
    },
  },
];

// Função para buscar todas as vagas
export const getAllJobs = (): Job[] => {
  return jobsData;
};

// Função para buscar uma vaga por ID
export const getJobById = (id: number): Job | undefined => {
  return jobsData.find(job => job.id === id);
};

// Função para filtrar vagas
export const filterJobs = (filterType: string): Job[] => {
  if (filterType === "all") return jobsData;
  
  return jobsData.filter(job => {
    switch (filterType) {
      case "remote":
        return job.location.toLowerCase().includes("remote");
      case "senior":
        return job.level.toLowerCase() === "senior";
      case "pleno":
        return job.level.toLowerCase() === "pleno";
      case "junior":
        return job.level.toLowerCase() === "júnior";
      case "fullstack":
        return job.title.toLowerCase().includes("full stack");
      default:
        return true;
    }
  });
}; 
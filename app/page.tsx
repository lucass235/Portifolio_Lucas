"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BrainCircuit,
  Briefcase,
  CalendarDays,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  Languages,
  MapPin,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { IconType } from "react-icons";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { SiGmail, SiOrcid } from "react-icons/si";
import ScrollReveal from "./ScrollReveal";
import ThemeToggle from "./ThemeToggle";

type Tone = "teal" | "orange" | "violet" | "green" | "blue" | "rose";
type Language = "pt" | "en";

type NavItem = {
  label: string;
  href: string;
};

type StackGroup = {
  title: string;
  icon: LucideIcon;
  tone: Tone;
  items: string[];
};

type Metric = {
  value: string;
  label: string;
  detail: string;
};

type FocusArea = {
  title: string;
  description: string;
};

type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
};

type Education = {
  title: string;
  institution: string;
  period: string;
  description: string;
};

type ThemeLabels = {
  dark: string;
  light: string;
  toggle: string;
};

type LanguageToggleLabels = {
  ariaLabel: string;
  ptTitle: string;
  enTitle: string;
};

type LanguageContent = {
  navItems: NavItem[];
  navAriaLabel: string;
  homeAriaLabel: string;
  contactNavLabel: string;
  emailSubject: string;
  theme: ThemeLabels;
  languageToggle: LanguageToggleLabels;
  hero: {
    kicker: string;
    title: string;
    description: string;
    summaryAriaLabel: string;
    location: string;
    organization: string;
    specialty: string;
    primaryAction: string;
    profileAriaLabel: string;
    profileAlt: string;
    profileCaption: string;
    profileSkills: string;
  };
  metricsAriaLabel: string;
  metrics: Metric[];
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    focusAriaLabel: string;
  };
  focusAreas: FocusArea[];
  stack: {
    eyebrow: string;
    title: string;
    description: string;
  };
  stackGroups: StackGroup[];
  experienceHeading: {
    eyebrow: string;
    title: string;
    description: string;
  };
  experiences: Experience[];
  educationHeading: {
    eyebrow: string;
    title: string;
    description: string;
  };
  education: Education[];
  contact: {
    kicker: string;
    title: string;
    description: string;
    actionsAriaLabel: string;
  };
  footer: {
    tagline: string;
  };
};

type Brand =
  | "github"
  | "instagram"
  | "linkedin"
  | "orcid"
  | "gmail";

type BrandLink = {
  label: string;
  href: string;
  icon: IconType;
  brand: Brand;
};

const LANGUAGE_STORAGE_KEY = "portfolio-language";

const navItems: NavItem[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Stack", href: "#stack" },
  { label: "Experiência", href: "#experiencia" },
];

const socialLinks: BrandLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/lucass235",
    icon: FaGithub,
    brand: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lucass235/",
    icon: FaLinkedinIn,
    brand: "linkedin",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/_lucaasamorim_/",
    icon: FaInstagram,
    brand: "instagram",
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0009-0005-5880-2836",
    icon: SiOrcid,
    brand: "orcid",
  },
];

const metrics: Metric[] = [
  { value: "26", label: "anos", detail: "Brasileiro, Recife-PE" },
  {
    value: "MSc",
    label: "em andamento",
    detail: "Engenharia de Software no CESAR School",
  },
  {
    value: "CTI",
    label: "pesquisa",
    detail: "Cyber Threat Intelligence, IA e segurança",
  },
  {
    value: "Full Stack",
    label: "engenharia",
    detail: "APIs, dados, frontend e cloud",
  },
];

const stackGroups: StackGroup[] = [
  {
    title: "Backend & APIs",
    icon: Server,
    tone: "teal",
    items: ["Python", "FastAPI", "Pydantic", "SQLAlchemy", "WebSocket", "NestJS"],
  },
  {
    title: "Frontend",
    icon: Code2,
    tone: "orange",
    items: ["React", "Next.js", "TypeScript", "Vite", "MUI", "Axios", "Angular"],
  },
  {
    title: "Data, IA & RAG",
    icon: BrainCircuit,
    tone: "violet",
    items: ["OpenAI", "LangChain", "LangGraph", "LightRAG", "Ollama"],
  },
  {
    title: "Machine Learning",
    icon: Sparkles,
    tone: "green",
    items: ["Scikit-learn", "Pandas", "NumPy", "SciPy"],
  },
  {
    title: "Bancos & Grafos",
    icon: Database,
    tone: "blue",
    items: ["PostgreSQL", "pgvector", "Supabase", "Neo4j"],
  },
  {
    title: "Cloud, Testes & Segurança",
    icon: Cloud,
    tone: "rose",
    items: ["AWS", "Docker", "Pytest", "CI/CD", "CTI", "Ransomware"],
  },
];

const focusAreas: FocusArea[] = [
  {
    title: "Sistemas escaláveis",
    description:
      "APIs, aplicações web e integrações orientadas a dados, com atenção a testes, manutenção e deploy.",
  },
  {
    title: "IA aplicada",
    description:
      "RAG, agentes, automações e pipelines para transformar dados em fluxos úteis para produto e pesquisa.",
  },
  {
    title: "Cyber Threat Intelligence",
    description:
      "Pesquisa e desenvolvimento para prevenção, análise e resposta a ameaças cibernéticas.",
  },
];

const experiences: Experience[] = [
  {
    role: "Pesquisador Cyber Threat Intelligence (CTI)",
    company: "CESAR",
    period: "nov 2025 - o momento",
    location: "Recife, Pernambuco, Brasil · Híbrido",
    description:
      "Atuação no CISSa em iniciativas de pesquisa junto ao CESAR, com foco em investigação, análise e prevenção de ataques cibernéticos, especialmente ransomware.",
    tags: ["CTI", "Cibersegurança", "IA aplicada"],
  },
  {
    role: "Engenheiro de Software",
    company: "Herby",
    period: "jan 2024 - dez 2025",
    location: "Recife, Pernambuco, Brasil · Remoto",
    description:
      "Desenvolvimento de sistemas especializados em Next.js, criação e aprimoramento de páginas web para apresentação de dados e evolução de produtos digitais.",
    tags: ["Next.js", "React", "Design de software"],
  },
  {
    role: "Desenvolvedor Python",
    company: "Herby",
    period: "jun 2023 - jan 2024",
    location: "Minas Gerais, Brasil · Remoto",
    description:
      "Rotulação, tratamento e automação de dados para uso em técnicas de aprendizado de máquina e inteligência artificial.",
    tags: ["Python", "Dados", "Machine Learning"],
  },
  {
    role: "Desenvolvedor Visão Computacional",
    company: "Aicury",
    period: "mar 2024 - mai 2024",
    location: "Remoto",
    description:
      "Apoio no desenvolvimento de soluções de machine learning para segmentação de feridas em imagens médicas.",
    tags: ["Visão computacional", "Segmentação", "ML"],
  },
  {
    role: "Desenvolvedor Full Stack",
    company: "Direction Systems LTDA.",
    period: "fev 2022 - nov 2022",
    location: "Recife, Pernambuco, Brasil",
    description:
      "Implementação de sites web usando metodologia ágil SCRUM e arquitetura MVC, com atuação em frontend e backend.",
    tags: ["SCRUM", "Full Stack", "MVC"],
  },
];

const education: Education[] = [
  {
    title: "Mestrado em Engenharia de Software",
    institution: "CESAR School",
    period: "nov 2025 - dez 2027",
    description:
      "Pesquisa profissional junto à área de CTI, com projetos conectados ao CISSa e competências em inteligência de ameaças cibernéticas.",
  },
  {
    title: "Postgraduate Degree, Ciência da Computação",
    institution: "Centro de Informática UFPE",
    period: "ago 2024 - dez 2024",
    description:
      "Disciplinas isoladas no programa de pós-graduação, com ênfase em mineração de dados aplicada.",
  },
  {
    title: "Bacharelado em Ciência da Computação",
    institution: "Universidade Católica de Pernambuco",
    period: "2020 - fev 2024",
    description:
      "Formação em programação, algoritmos, engenharia de software e desenvolvimento de sistemas.",
  },
];

const portfolioContent: Record<Language, LanguageContent> = {
  pt: {
    navItems,
    navAriaLabel: "Navegação principal",
    homeAriaLabel: "Ir para o início",
    contactNavLabel: "Contato",
    emailSubject: "Contato pelo portfólio",
    theme: {
      dark: "Modo escuro",
      light: "Modo claro",
      toggle: "Alternar tema",
    },
    languageToggle: {
      ariaLabel: "Selecionar idioma",
      ptTitle: "Português",
      enTitle: "Inglês",
    },
    hero: {
      kicker: "Engenharia de Software · CTI · IA aplicada",
      title: "Lucas dos Santos Amorim Rêgo",
      description:
        "Mestrando em Engenharia de Software no CESAR School e pesquisador em Cyber Threat Intelligence no CESAR, construindo soluções full stack, pipelines de dados, RAG e automações para cenários reais.",
      summaryAriaLabel: "Resumo profissional",
      location: "Recife-PE",
      organization: "CESAR / CISSA",
      specialty: "Cyber Threat Intelligence",
      primaryAction: "Falar comigo",
      profileAriaLabel: "Perfil de Lucas Amorim",
      profileAlt: "Foto profissional de Lucas dos Santos Amorim Rêgo",
      profileCaption: "Software Developer · Data Scientist · Full Stack",
      profileSkills: "Python · AWS · CTI · AI",
    },
    metricsAriaLabel: "Indicadores do perfil",
    metrics,
    about: {
      eyebrow: "Sobre",
      title: "Engenharia com pesquisa, produto e segurança no mesmo fluxo.",
      paragraphs: [
        "Sou engenheiro de software com formação em Ciência da Computação pela Universidade Católica de Pernambuco. Atualmente trabalho em projetos de pesquisa e desenvolvimento voltados à aplicação de Inteligência Artificial na área de Cyber Threat Intelligence.",
        "Tenho experiência no desenvolvimento de soluções full stack, análise de dados e implementação de sistemas baseados em IA, utilizando tecnologias como Python, Next.js, Machine Learning, LLMs e arquiteturas orientadas a dados.",
        "Meu foco é construir soluções escaláveis, rastreáveis e aplicáveis a problemas complexos, com atenção especial a automação, segurança, colaboração técnica e impacto real.",
      ],
      focusAriaLabel: "Áreas de atuação",
    },
    focusAreas,
    stack: {
      eyebrow: "Stack",
      title: "Tecnologias organizadas pelo tipo de problema.",
      description:
        "Ferramentas que aparecem no meu dia a dia em produto, pesquisa, dados, IA e segurança.",
    },
    stackGroups,
    experienceHeading: {
      eyebrow: "Experiência",
      title: "Atuação profissional",
      description: "Projetos com engenharia de software, IA, dados e pesquisa aplicada.",
    },
    experiences,
    educationHeading: {
      eyebrow: "Formação",
      title: "Base acadêmica",
      description: "Ciência da Computação, pós-graduação e mestrado profissional.",
    },
    education,
    contact: {
      kicker: "Contato",
      title: "Vamos conversar sobre produto, IA, dados ou segurança.",
      description:
        "Me chame por e-mail ou LinkedIn para oportunidades, parcerias de pesquisa e projetos envolvendo engenharia de software, RAG, CTI e automação.",
      actionsAriaLabel: "Canais de contato",
    },
    footer: {
      tagline: "Engenharia de Software · CTI · IA aplicada · Recife-PE",
    },
  },
  en: {
    navItems: [
      { label: "About", href: "#sobre" },
      { label: "Stack", href: "#stack" },
      { label: "Experience", href: "#experiencia" },
    ],
    navAriaLabel: "Main navigation",
    homeAriaLabel: "Go to the beginning",
    contactNavLabel: "Contact",
    emailSubject: "Contact from portfolio",
    theme: {
      dark: "Dark mode",
      light: "Light mode",
      toggle: "Toggle theme",
    },
    languageToggle: {
      ariaLabel: "Select language",
      ptTitle: "Portuguese",
      enTitle: "English",
    },
    hero: {
      kicker: "Software Engineering · CTI · Applied AI",
      title: "Lucas dos Santos Amorim Rêgo",
      description:
        "Software Engineering master's student at CESAR School and Cyber Threat Intelligence researcher at CESAR, building full stack solutions, data pipelines, RAG, and automation for real-world scenarios.",
      summaryAriaLabel: "Professional summary",
      location: "Recife-PE",
      organization: "CESAR / CISSA",
      specialty: "Cyber Threat Intelligence",
      primaryAction: "Contact me",
      profileAriaLabel: "Lucas Amorim profile",
      profileAlt: "Professional photo of Lucas dos Santos Amorim Rêgo",
      profileCaption: "Software Developer · Data Scientist · Full Stack",
      profileSkills: "Python · AWS · CTI · AI",
    },
    metricsAriaLabel: "Profile indicators",
    metrics: [
      { value: "26", label: "years old", detail: "Brazilian, Recife-PE" },
      {
        value: "MSc",
        label: "in progress",
        detail: "Software Engineering at CESAR School",
      },
      {
        value: "CTI",
        label: "research",
        detail: "Cyber Threat Intelligence, AI, and security",
      },
      {
        value: "Full Stack",
        label: "engineering",
        detail: "APIs, data, frontend, and cloud",
      },
    ],
    about: {
      eyebrow: "About",
      title: "Engineering with research, product, and security in the same flow.",
      paragraphs: [
        "I am a software engineer with a Computer Science degree from Universidade Católica de Pernambuco. I currently work on research and development projects focused on applying Artificial Intelligence to Cyber Threat Intelligence.",
        "I have experience developing full stack solutions, analyzing data, and implementing AI-based systems using technologies such as Python, Next.js, Machine Learning, LLMs, and data-driven architectures.",
        "My focus is building scalable, traceable solutions that apply to complex problems, with special attention to automation, security, technical collaboration, and real-world impact.",
      ],
      focusAriaLabel: "Areas of expertise",
    },
    focusAreas: [
      {
        title: "Scalable systems",
        description:
          "Data-driven APIs, web applications, and integrations with attention to testing, maintainability, and deployment.",
      },
      {
        title: "Applied AI",
        description:
          "RAG, agents, automations, and pipelines that turn data into useful workflows for product and research.",
      },
      {
        title: "Cyber Threat Intelligence",
        description:
          "Research and development for cyber threat prevention, analysis, and response.",
      },
    ],
    stack: {
      eyebrow: "Stack",
      title: "Technologies organized by problem type.",
      description:
        "Tools that show up in my day-to-day work across product, research, data, AI, and security.",
    },
    stackGroups: [
      {
        title: "Backend & APIs",
        icon: Server,
        tone: "teal",
        items: ["Python", "FastAPI", "Pydantic", "SQLAlchemy", "WebSocket", "NestJS"],
      },
      {
        title: "Frontend",
        icon: Code2,
        tone: "orange",
        items: ["React", "Next.js", "TypeScript", "Vite", "MUI", "Axios", "Angular"],
      },
      {
        title: "Data, AI & RAG",
        icon: BrainCircuit,
        tone: "violet",
        items: ["OpenAI", "LangChain", "LangGraph", "LightRAG", "Ollama"],
      },
      {
        title: "Machine Learning",
        icon: Sparkles,
        tone: "green",
        items: ["Scikit-learn", "Pandas", "NumPy", "SciPy"],
      },
      {
        title: "Databases & Graphs",
        icon: Database,
        tone: "blue",
        items: ["PostgreSQL", "pgvector", "Supabase", "Neo4j"],
      },
      {
        title: "Cloud, Testing & Security",
        icon: Cloud,
        tone: "rose",
        items: ["AWS", "Docker", "Pytest", "CI/CD", "CTI", "Ransomware"],
      },
    ],
    experienceHeading: {
      eyebrow: "Experience",
      title: "Professional work",
      description: "Projects involving software engineering, AI, data, and applied research.",
    },
    experiences: [
      {
        role: "Cyber Threat Intelligence (CTI) Researcher",
        company: "CESAR",
        period: "Nov 2025 - present",
        location: "Recife, Pernambuco, Brazil · Hybrid",
        description:
          "Work at CISSa on research initiatives with CESAR, focused on investigation, analysis, and prevention of cyberattacks, especially ransomware.",
        tags: ["CTI", "Cybersecurity", "Applied AI"],
      },
      {
        role: "Software Engineer",
        company: "Herby",
        period: "Jan 2024 - Dec 2025",
        location: "Recife, Pernambuco, Brazil · Remote",
        description:
          "Development of specialized systems in Next.js, creation and improvement of web pages for data presentation, and evolution of digital products.",
        tags: ["Next.js", "React", "Software design"],
      },
      {
        role: "Python Developer",
        company: "Herby",
        period: "Jun 2023 - Jan 2024",
        location: "Minas Gerais, Brazil · Remote",
        description:
          "Data labeling, processing, and automation for use in machine learning and artificial intelligence techniques.",
        tags: ["Python", "Data", "Machine Learning"],
      },
      {
        role: "Computer Vision Developer",
        company: "Aicury",
        period: "Mar 2024 - May 2024",
        location: "Remote",
        description:
          "Supported development of machine learning solutions for wound segmentation in medical images.",
        tags: ["Computer vision", "Segmentation", "ML"],
      },
      {
        role: "Full Stack Developer",
        company: "Direction Systems LTDA.",
        period: "Feb 2022 - Nov 2022",
        location: "Recife, Pernambuco, Brazil",
        description:
          "Implemented websites using agile SCRUM methodology and MVC architecture, working across frontend and backend.",
        tags: ["SCRUM", "Full Stack", "MVC"],
      },
    ],
    educationHeading: {
      eyebrow: "Education",
      title: "Academic background",
      description: "Computer Science, postgraduate coursework, and a professional master's degree.",
    },
    education: [
      {
        title: "Master's in Software Engineering",
        institution: "CESAR School",
        period: "Nov 2025 - Dec 2027",
        description:
          "Professional research connected to the CTI area, with projects linked to CISSa and competencies in cyber threat intelligence.",
      },
      {
        title: "Postgraduate Coursework, Computer Science",
        institution: "Centro de Informática UFPE",
        period: "Aug 2024 - Dec 2024",
        description:
          "Standalone courses in the postgraduate program, with emphasis on applied data mining.",
      },
      {
        title: "Bachelor's in Computer Science",
        institution: "Universidade Católica de Pernambuco",
        period: "2020 - Feb 2024",
        description:
          "Education in programming, algorithms, software engineering, and systems development.",
      },
    ],
    contact: {
      kicker: "Contact",
      title: "Let's talk about product, AI, data, or security.",
      description:
        "Reach me by email or LinkedIn for opportunities, research partnerships, and projects involving software engineering, RAG, CTI, and automation.",
      actionsAriaLabel: "Contact channels",
    },
    footer: {
      tagline: "Software Engineering · CTI · Applied AI · Recife-PE",
    },
  },
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function IconLink({
  href,
  label,
  icon: Icon,
  brand,
}: {
  href: string;
  label: string;
  icon: IconType;
  brand: Brand;
}) {
  return (
    <a
      className={`brand-link brand-${brand}`}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
    >
      <span className="brand-icon">
        <Icon aria-hidden="true" size={18} />
      </span>
      <span>{label}</span>
    </a>
  );
}

function LanguageToggle({
  language,
  labels,
  onChange,
}: {
  language: Language;
  labels: LanguageToggleLabels;
  onChange: (language: Language) => void;
}) {
  return (
    <div className="language-toggle" role="group" aria-label={labels.ariaLabel}>
      <Languages aria-hidden="true" size={17} />
      <button
        type="button"
        aria-label={labels.ptTitle}
        aria-pressed={language === "pt"}
        title={labels.ptTitle}
        onClick={() => onChange("pt")}
      >
        PT
      </button>
      <button
        type="button"
        aria-label={labels.enTitle}
        aria-pressed={language === "en"}
        title={labels.enTitle}
        onClick={() => onChange("en")}
      >
        EN
      </button>
    </div>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("pt");
  const content = portfolioContent[language];
  const emailHref = `mailto:lucass235@gmail.com?subject=${encodeURIComponent(content.emailSubject)}`;
  const firstEducationTitle = content.education[0]?.title;

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    const nextLanguage: Language = storedLanguage === "en" ? "en" : "pt";

    document.documentElement.lang = nextLanguage === "pt" ? "pt-BR" : "en";
    setLanguage(nextLanguage);
  }, []);

  function changeLanguage(nextLanguage: Language) {
    document.documentElement.lang = nextLanguage === "pt" ? "pt-BR" : "en";
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    setLanguage(nextLanguage);
  }

  return (
    <>
      <ScrollReveal refreshKey={language} />
      <header className="site-header">
        <nav className="nav-bar" aria-label={content.navAriaLabel}>
          <a className="brand" href="#inicio" aria-label={content.homeAriaLabel}>
            <span className="brand-mark">LA</span>
            <span>Lucas Amorim</span>
          </a>

          <div className="nav-links">
            {content.navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <ThemeToggle labels={content.theme} />
            <LanguageToggle
              language={language}
              labels={content.languageToggle}
              onChange={changeLanguage}
            />
            <a className="nav-action" href={emailHref}>
              <SiGmail aria-hidden="true" size={17} />
              {content.contactNavLabel}
            </a>
          </div>
        </nav>
      </header>

      <main id="inicio">
        <section className="hero-band" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy" data-animate="fade-right">
              <span className="hero-kicker">{content.hero.kicker}</span>
              <h1 id="hero-title">{content.hero.title}</h1>
              <p>{content.hero.description}</p>

              <div className="hero-tags" aria-label={content.hero.summaryAriaLabel}>
                <span>
                  <MapPin aria-hidden="true" size={16} />
                  {content.hero.location}
                </span>
                <span>
                  <Briefcase aria-hidden="true" size={16} />
                  {content.hero.organization}
                </span>
                <span>
                  <ShieldCheck aria-hidden="true" size={16} />
                  {content.hero.specialty}
                </span>
              </div>

              <div className="hero-actions">
                <a className="button button-primary" href="#contato">
                  <SiGmail aria-hidden="true" size={18} />
                  {content.hero.primaryAction}
                </a>
                <a
                  className="button button-secondary"
                  href="https://www.linkedin.com/in/lucass235/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn aria-hidden="true" size={18} />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="profile-visual" data-animate="zoom-in" aria-label={content.hero.profileAriaLabel}>
              <Image
                src="/images/lucas-profile.png"
                alt={content.hero.profileAlt}
                width={520}
                height={520}
                priority
                className="profile-image"
              />
              <div className="profile-caption">
                <span>{content.hero.profileCaption}</span>
                <strong>{content.hero.profileSkills}</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="overview-band" aria-label={content.metricsAriaLabel}>
          <div className="container metrics-grid">
            {content.metrics.map((metric) => (
              <article className="metric-card" data-animate="fade-up" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
                <p>{metric.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="sobre">
          <div className="container about-grid">
            <div data-animate="fade-right">
              <SectionHeading
                eyebrow={content.about.eyebrow}
                title={content.about.title}
              />
              <div className="prose">
                {content.about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="focus-list" data-animate="fade-left" aria-label={content.about.focusAriaLabel}>
              {content.focusAreas.map((area) => (
                <article key={area.title} className="focus-item" data-animate="fade-up">
                  <ArrowUpRight aria-hidden="true" size={20} />
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-muted" id="stack">
          <div className="container">
            <div data-animate="fade-up">
              <SectionHeading
                eyebrow={content.stack.eyebrow}
                title={content.stack.title}
                description={content.stack.description}
              />
            </div>

            <div className="stack-grid">
              {content.stackGroups.map((group) => {
                const Icon = group.icon;

                return (
                  <article
                    className={`stack-card tone-${group.tone}`}
                    data-animate="fade-up"
                    key={group.title}
                  >
                    <div className="stack-title">
                      <Icon aria-hidden="true" size={22} />
                      <h3>{group.title}</h3>
                    </div>
                    <div className="chip-list">
                      {group.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" id="experiencia">
          <div className="container timeline-layout">
            <div>
              <div data-animate="fade-up">
                <SectionHeading
                  eyebrow={content.experienceHeading.eyebrow}
                  title={content.experienceHeading.title}
                  description={content.experienceHeading.description}
                />
              </div>

              <div className="timeline-list">
                {content.experiences.map((item) => (
                  <article
                    className="timeline-item"
                    data-animate="fade-up"
                    key={`${item.company}-${item.role}`}
                  >
                    <div className="timeline-icon">
                      <Briefcase aria-hidden="true" size={19} />
                    </div>
                    <div>
                      <h3>{item.role}</h3>
                      <strong>{item.company}</strong>
                      <p className="timeline-meta">
                        <CalendarDays aria-hidden="true" size={16} />
                        {item.period}
                      </p>
                      <p className="timeline-meta">
                        <MapPin aria-hidden="true" size={16} />
                        {item.location}
                      </p>
                      <p>{item.description}</p>
                      <div className="tag-row">
                        {item.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="education-column" data-animate="fade-left" aria-labelledby="education-title">
              <SectionHeading
                eyebrow={content.educationHeading.eyebrow}
                title={content.educationHeading.title}
                description={content.educationHeading.description}
              />

              <div className="education-list">
                {content.education.map((item) => (
                  <article className="education-item" data-animate="fade-up" key={item.title}>
                    <GraduationCap aria-hidden="true" size={22} />
                    <div>
                      <h3 id={item.title === firstEducationTitle ? "education-title" : undefined}>
                        {item.title}
                      </h3>
                      <strong>{item.institution}</strong>
                      <p>{item.period}</p>
                      <span>{item.description}</span>
                    </div>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="contact-band" id="contato" aria-labelledby="contact-title">
          <div className="container contact-grid">
            <div data-animate="fade-right">
              <span className="contact-kicker">{content.contact.kicker}</span>
              <h2 id="contact-title">{content.contact.title}</h2>
              <p>{content.contact.description}</p>
            </div>

            <div className="contact-actions" data-animate="fade-left" aria-label={content.contact.actionsAriaLabel}>
              <a
                className="brand-link brand-gmail"
                href={emailHref}
              >
                <span className="brand-icon">
                  <SiGmail aria-hidden="true" size={20} />
                </span>
                <span>lucass235@gmail.com</span>
              </a>
              <a
                className="brand-link brand-linkedin"
                href="https://www.linkedin.com/in/lucass235/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="brand-icon">
                  <FaLinkedinIn aria-hidden="true" size={20} />
                </span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <strong>Lucas Amorim</strong>
            <p>{content.footer.tagline}</p>
          </div>
          <div className="footer-socials">
            {socialLinks.map((link) => (
              <IconLink key={link.label} {...link} />
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

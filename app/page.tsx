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
  MapPin,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { IconType } from "react-icons";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitch,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { SiGmail, SiOrcid } from "react-icons/si";
import ScrollReveal from "./ScrollReveal";
import ThemeToggle from "./ThemeToggle";

type Tone = "teal" | "orange" | "violet" | "green" | "blue" | "rose";

type StackGroup = {
  title: string;
  icon: LucideIcon;
  tone: Tone;
  items: string[];
};

type Brand =
  | "facebook"
  | "github"
  | "instagram"
  | "linkedin"
  | "orcid"
  | "pinterest"
  | "twitch"
  | "x"
  | "gmail"
  | "whatsapp";

type BrandLink = {
  label: string;
  href: string;
  icon: IconType;
  brand: Brand;
};

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Stack", href: "#stack" },
  { label: "Experiência", href: "#experiencia" },
];

const socialLinks: BrandLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/Lucass235",
    icon: FaFacebookF,
    brand: "facebook",
  },
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
    label: "Pinterest",
    href: "https://pinterest.com/Lucass601",
    icon: FaPinterestP,
    brand: "pinterest",
  },
  {
    label: "Twitch",
    href: "https://www.twitch.tv/lucass601",
    icon: FaTwitch,
    brand: "twitch",
  },
  {
    label: "X",
    href: "https://twitter.com/lucass235",
    icon: FaXTwitter,
    brand: "x",
  },
  {
    label: "ORCID",
    href: "https://orcid.org/0009-0005-5880-2836",
    icon: SiOrcid,
    brand: "orcid",
  },
];

const metrics = [
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

const focusAreas = [
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

const experiences = [
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

const education = [
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

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <header className="site-header">
        <nav className="nav-bar" aria-label="Navegação principal">
          <a className="brand" href="#inicio" aria-label="Ir para o início">
            <span className="brand-mark">LA</span>
            <span>Lucas Amorim</span>
          </a>

          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <ThemeToggle />
            <a className="nav-action" href="mailto:lucass235@gmail.com?subject=Contato pelo portfólio">
              <SiGmail aria-hidden="true" size={17} />
              Contato
            </a>
          </div>
        </nav>
      </header>

      <main id="inicio">
        <section className="hero-band" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy" data-animate="fade-right">
              <span className="hero-kicker">Engenharia de Software · CTI · IA aplicada</span>
              <h1 id="hero-title">Lucas dos Santos Amorim Rêgo</h1>
              <p>
                Mestrando em Engenharia de Software no CESAR School e pesquisador em Cyber
                Threat Intelligence no CESAR, construindo soluções full stack, pipelines de
                dados, RAG e automações para cenários reais.
              </p>

              <div className="hero-tags" aria-label="Resumo profissional">
                <span>
                  <MapPin aria-hidden="true" size={16} />
                  Recife-PE
                </span>
                <span>
                  <Briefcase aria-hidden="true" size={16} />
                  CESAR / CISSA
                </span>
                <span>
                  <ShieldCheck aria-hidden="true" size={16} />
                  Cyber Threat Intelligence
                </span>
              </div>

              <div className="hero-actions">
                <a className="button button-primary" href="#contato">
                  <SiGmail aria-hidden="true" size={18} />
                  Falar comigo
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

            <div className="profile-visual" data-animate="zoom-in" aria-label="Perfil de Lucas Amorim">
              <Image
                src="/images/lucas-profile.png"
                alt="Foto profissional de Lucas dos Santos Amorim Rêgo"
                width={520}
                height={520}
                priority
                className="profile-image"
              />
              <div className="profile-caption">
                <span>Software Developer · Data Scientist · Full Stack</span>
                <strong>Python · AWS · CTI · AI</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="overview-band" aria-label="Indicadores do perfil">
          <div className="container metrics-grid">
            {metrics.map((metric) => (
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
                eyebrow="Sobre"
                title="Engenharia com pesquisa, produto e segurança no mesmo fluxo."
              />
              <div className="prose">
                <p>
                  Sou engenheiro de software com formação em Ciência da Computação pela
                  Universidade Católica de Pernambuco. Atualmente trabalho em projetos de
                  pesquisa e desenvolvimento voltados à aplicação de Inteligência Artificial
                  na área de Cyber Threat Intelligence.
                </p>
                <p>
                  Tenho experiência no desenvolvimento de soluções full stack, análise de
                  dados e implementação de sistemas baseados em IA, utilizando tecnologias
                  como Python, Next.js, Machine Learning, LLMs e arquiteturas orientadas a
                  dados.
                </p>
                <p>
                  Meu foco é construir soluções escaláveis, rastreáveis e aplicáveis a
                  problemas complexos, com atenção especial a automação, segurança,
                  colaboração técnica e impacto real.
                </p>
              </div>
            </div>

            <div className="focus-list" data-animate="fade-left" aria-label="Áreas de atuação">
              {focusAreas.map((area) => (
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
                eyebrow="Stack"
                title="Tecnologias organizadas pelo tipo de problema."
                description="Ferramentas que aparecem no meu dia a dia em produto, pesquisa, dados, IA e segurança."
              />
            </div>

            <div className="stack-grid">
              {stackGroups.map((group) => {
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
                  eyebrow="Experiência"
                  title="Atuação profissional"
                  description="Projetos com engenharia de software, IA, dados e pesquisa aplicada."
                />
              </div>

              <div className="timeline-list">
                {experiences.map((item) => (
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
                eyebrow="Formação"
                title="Base acadêmica"
                description="Ciência da Computação, pós-graduação e mestrado profissional."
              />

              <div className="education-list">
                {education.map((item) => (
                  <article className="education-item" data-animate="fade-up" key={item.title}>
                    <GraduationCap aria-hidden="true" size={22} />
                    <div>
                      <h3 id={item.title === education[0].title ? "education-title" : undefined}>
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
              <span className="contact-kicker">Contato</span>
              <h2 id="contact-title">Vamos conversar sobre produto, IA, dados ou segurança.</h2>
              <p>
                Me chame por e-mail, LinkedIn ou WhatsApp para oportunidades, parcerias de
                pesquisa e projetos envolvendo engenharia de software, RAG, CTI e automação.
              </p>
            </div>

            <div className="contact-actions" data-animate="fade-left" aria-label="Canais de contato">
              <a
                className="brand-link brand-gmail"
                href="mailto:lucass235@gmail.com?subject=Contato pelo portfólio"
              >
                <span className="brand-icon">
                  <SiGmail aria-hidden="true" size={20} />
                </span>
                <span>lucass235@gmail.com</span>
              </a>
              <a
                className="brand-link brand-whatsapp"
                href="https://api.whatsapp.com/send?phone=5581996479569&text=Oi%2C%20Lucas.%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar."
                target="_blank"
                rel="noreferrer"
              >
                <span className="brand-icon">
                  <FaWhatsapp aria-hidden="true" size={21} />
                </span>
                <span>WhatsApp</span>
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
            <p>Engenharia de Software · CTI · IA aplicada · Recife-PE</p>
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

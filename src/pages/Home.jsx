import React from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

const skills = [
  {
    title: "Cloud & Infrastruktur",
    description: "Cloud-native Umgebungen von der Architektur bis zum stabilen Betrieb.",
    items: ["Microsoft Azure", "AWS", "Terraform", "Linux", "Windows Server"],
  },
  {
    title: "DevOps & CI/CD",
    description: "Automatisierte, reproduzierbare Delivery-Prozesse mit Security by Design.",
    items: ["GitLab CI", "GitHub Actions", "Docker", "Kubernetes", "Ansible"],
  },
  {
    title: "Build & Deployment",
    description: "Aufbau und Pflege von CI/CD-Pipelines. Entwicklung automatisierter Deployments.",
    items: ["Maven, Jenkins", "Nexus, Artifactory", "Git, Bitbucket", "GitLab, GitHub"],
  },
  {
    title: "Monitoring",
    description: "Aufbau und Pflege moderner Monitoring- und Observability-Lösungen.",
    items: ["Prometheus", "Grafana", "Loki", "Kibana", "Portainer", "Tempo"],
  },
  {
    title: "Containerisierung",
    description: "Auslieferung, Entwicklung und Betrieb von Containern mit Docker und Kubernetes. Build-Pipelines auf Basis von Containern.",
    items: ["Docker, Kubernetes", "Swarm, Helm"],
  },
  {
    title: "GitOps",
    description: "Deklarative und versionierte Bereitstellung von Anwendungen und Infrastruktur. Automatisierte Synchronisierung und kontinuierliche Auslieferung in Kubernetes-Umgebungen.",
    items: ["Argo CD", "Flux CD", "Helm", "Kustomize", "Kubernetes", "GitLab, GitHub"],
  },
  {
    title: "Infrastructure as Code",
    description: "Versionierte, reproduzierbare und automatisierte Bereitstellung von Cloud-Infrastruktur und Systemkonfigurationen.",
    items: ["Terraform", "Ansible", "OpenTofu", "Pulumi", "Azure Bicep", "AWS CloudFormation"],
  },
  {
    title: "DevSecOps",
    description: "Sichere Plattformen, Secrets und nachvollziehbare Zugriffsprozesse.",
    items: ["HashiCorp Vault", "IAM", "Secret Management", "Hardening", "Monitoring"],
  },
  {
    title: "Software Engineering",
    description: "Ganzheitliches Verständnis vom Produktcode bis zur Infrastruktur.",
    items: ["Java", "Go", "Python", "TypeScript", "REST APIs"],
  },
  {
    title: "Frontend & Mobile",
    description: "Moderne, responsive Anwendungen für Web und mobile Plattformen.",
    items: ["Angular", "React", "Flutter", "HTML5", "CSS3"],
  },
  {
    title: "Datenhaltung",
    description: "Relationale und dokumentenbasierte Datenmodelle für produktive Systeme.",
    items: ["PostgreSQL", "MySQL", "MS SQL", "MongoDB", "Redis"],
  },
];

const experience = [
  {
    period: "10/2024 — heute",
    company: "blueAlpha GmbH",
    role: "Dualer Masterstudent | DevSecOps & Cloud",
    copy: "Management, Optimierung und Monitoring von Azure-Umgebungen. Aufbau von CI/CD-Pipelines und Mitgestaltung verteilter Systeme für skalierbare Gesundheitslogistik.",
  },
  {
    period: "2023 — 09/2024",
    company: "Remetra App GmbH",
    role: "Werkstudent Softwareentwicklung & DevOps",
    copy: "Entwicklung einer produktiven Zeiterfassungsanwendung mit Flutter und Laravel inklusive Deployment-Prozessen und technischer Umsetzung ausgewählter Systemkomponenten.",
  },
  {
    period: "09/2022 — 09/2023",
    company: "Mercedes-Benz Tech Innovation",
    role: "Werkstudent Full Stack DevOps",
    copy: "Backend-Services in Go für eingebettete Fahrzeugsysteme, moderne Angular-Komponenten und strukturierte Entwicklungsworkflows im Automotive-Umfeld.",
  },
  {
    period: "2020 — 2022",
    company: "InnoData GmbH",
    role: "Werkstudent Webentwicklung",
    copy: "Weiterentwicklung der Unternehmenswebsite mit HTML, CSS, JavaScript, PHP und WordPress sowie Wartung, SEO und Modulpflege.",
  },
];

const projects = [
  {
    index: "01",
    title: "Mziba",
    tag: "Product Engineering",
    copy: "Mobile Marketplace-Plattform, die Reisende und Versender verbindet — mit Verifizierung, Echtzeitkommunikation, Zahlungen und Tracking.",
    stack: "Flutter · Firebase · Node.js · Cloud",
    link: "https://gitlab.com/mziba1/mziba-backend",
  },
  {
    index: "02",
    title: "Remetra Zeitstempel",
    tag: "Business Application",
    copy: "Produktive Zeiterfassungsanwendung mit mobilem Frontend, Backend-Anbindung und einem durchgängigen Deployment-Prozess.",
    stack: "Flutter · Laravel · CI/CD",
  },
  {
    index: "03",
    title: "Pizza-To-Go",
    tag: "E-Commerce",
    copy: "E-Commerce-Plattform für Pizzerien mit responsiver Weboberfläche und Java-basiertem Backend.",
    stack: "HTML · CSS · JavaScript · Java",
  },
];

const Home = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv/BASTIAN-KEMKA_CV.pdf";
    link.download = "Bastian_Kemka_Lontsi_CV.pdf";
    link.click();
  };

  return (
    <main className="site-shell">
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Startseite">
          BKL<span>.</span>
          <small>DEVSECOPS ENGINEERING</small>
        </a>
        <div className="nav-links">
          <a href="#expertise">Expertise</a>
          <a href="#experience">Erfahrung</a>
          <a href="#projects">Projekte</a>
        </div>
        <a className="nav-cta" href="#contact">Kontakt</a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="availability"><i /> Verfügbar für neue Herausforderungen</div>
          <p className="eyebrow">// BASTIAN KEMKA LONTSI</p>
          <h1>
            Secure systems.
            <span>Built to scale.</span>
          </h1>
          <p className="hero-lead">
            DevSecOps Engineer für sichere Cloud-Infrastrukturen, automatisierte
            Delivery-Prozesse und Software, die zuverlässig im Betrieb bleibt.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">Projekt besprechen <ArrowUpRight /></a>
            <button className="button secondary" onClick={downloadCV}>
              <Download /> Lebenslauf
            </button>
          </div>
          <div className="hero-meta">
            <span><MapPin /> Frankfurt am Main</span>
            <span>DE · EN · FR</span>
          </div>
        </div>

        <div className="terminal" aria-label="Kurzprofil als Code">
          <div className="terminal-bar"><i /><i /><i /><span>profile.yaml</span></div>
          <pre><code><em>name:</em> Bastian Kemka Lontsi{"\n"}
<em>role:</em> DevSecOps Engineer{"\n"}
<em>focus:</em>{"\n"}
  - cloud_infrastructure{"\n"}
  - secure_delivery{"\n"}
  - platform_engineering{"\n"}
<em>toolkit:</em>{"\n"}
  cloud: [Azure, AWS]{"\n"}
  infra: [Terraform, Ansible]{"\n"}
  runtime: [Docker, Kubernetes]{"\n"}
  security: [Vault, IAM]{"\n"}
<strong>status: ready_to_build</strong></code></pre>
        </div>
        <a className="scroll-cue" href="#expertise"><ArrowDown /> SCROLL TO EXPLORE</a>
      </section>

      <section className="section" id="expertise">
        <div className="section-heading">
          <p className="eyebrow">// 01 — EXPERTISE</p>
          <h2>Technik ist gut.<br /><span>Wirkung ist besser.</span></h2>
          <p>Ich verbinde Entwicklung, Infrastruktur und Security zu belastbaren Gesamtsystemen.</p>
        </div>
        <div className="skill-grid">
          {skills.map((skill, index) => (
            <article className="skill-card" key={skill.title}>
              <span className="card-number">0{index + 1}</span>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <ul>{skill.items.map((item) => <li key={item}><Check />{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-heading compact">
          <p className="eyebrow">// 02 — ERFAHRUNG</p>
          <h2>Vom Code bis<br /><span>zur Cloud.</span></h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-row" key={item.company}>
              <p className="period">{item.period}</p>
              <div><p className="company">{item.company}</p><h3>{item.role}</h3></div>
              <p className="timeline-copy">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">// 03 — PROJEKTE</p>
          <h2>Ausgewählte<br /><span>Arbeiten.</span></h2>
        </div>
        <div className="projects">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <span className="project-index">{project.index}</span>
              <div><p className="project-tag">{project.tag}</p><h3>{project.title}</h3></div>
              <p>{project.copy}</p>
              <div className="project-stack">{project.stack}</div>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noreferrer" aria-label={`${project.title} öffnen`}>
                  <ArrowUpRight />
                </a>
              ) : <span className="project-arrow"><ArrowUpRight /></span>}
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">// 04 — KONTAKT</p>
        <h2>Let&apos;s build<br /><span>something solid.</span></h2>
        <p className="contact-copy">
          Du suchst Unterstützung für Cloud, DevSecOps oder Software Engineering?
          Lass uns über dein nächstes Projekt sprechen.
        </p>
        <a className="mail-link" href="mailto:123bastianlontsi@gmail.com">
          <Mail /> 123bastianlontsi@gmail.com <ArrowUpRight />
        </a>
        <div className="socials">
          <a href="https://github.com/bastianNebra" target="_blank" rel="noreferrer"><Github /> GitHub</a>
          <a href="https://www.linkedin.com/in/bastian-lontsi-46462b161/" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top">BKL<span>.</span></a>
        <p>© 2026 Bastian Kemka Lontsi</p>
        <a href="#top">Nach oben ↑</a>
      </footer>
    </main>
  );
};

export default Home;

// Mock data for Bastian Lontsi Portfolio

export const personalInfo = {
  name: "Bastian Lontsi",
  title: "Master in IT | Full Stack Developer | Software Architect",
  subtitle: "DevOps & Cloud Enthusiast",
  location: "Zweibrücken / Stuttgart Region, Deutschland",
  status: "Offen für neue Möglichkeiten",
  bio: "Leidenschaftlicher Full Stack Developer mit Expertise in Software-Architektur und DevOps. Spezialisiert auf die Entwicklung skalierbarer Anwendungen und sicherer Cloud-Infrastrukturen.",
  bioLong: "Mit über 4 Jahren Erfahrung in der Softwareentwicklung bringe ich fundierte Kenntnisse in Full Stack Development, Software-Architektur und DevOps-Praktiken mit. Meine Arbeit bei Mercedes-Benz Tech Innovation und anderen innovativen Unternehmen hat mir ermöglicht, komplexe technische Herausforderungen zu lösen und moderne, skalierbare Lösungen zu entwickeln. Besonders interessiere ich mich für Cloud-native Architekturen, Sicherheitsmanagement mit Tools wie HashiCorp Vault und die Optimierung von Entwicklungsprozessen.",
  email: "bastian.lontsi@icloud.com",
  linkedin: "https://www.linkedin.com/in/bastian-lontsi-46462b161/",
  github: "https://github.com/bastianNebra",
  cv: "/cv/bastian-lontsi-cv.pdf"
};

export const experience = [
  {
    id: 1,
    company: "blueAlpha GmbH",
    role: "Master in IT | Full Stack Developer | Software Architect",
    type: "Dualstudium Master",
    period: "Okt 2024 - Heute",
    location: "Remote, Zweibrücken, Deutschland",
    description: "DevOps & Cloud Enthusiast mit Fokus auf moderne Softwarearchitektur und Cloud-native Lösungen.",
    achievements: [
      "Entwicklung und Implementierung skalierbarer Full Stack Anwendungen",
      "Architektur-Design für verteilte Systeme",
      "Integration von DevOps-Praktiken und CI/CD-Pipelines",
      "Cloud-Infrastruktur-Management und Optimierung"
    ],
    technologies: ["Node.js", "Java", "Spring", "Kubernetes", "Docker", "AWS"]
  },
  {
    id: 2,
    company: "remetra app",
    role: "Full Stack Developer",
    type: "Vollzeit",
    period: "Mär 2024 - Heute",
    location: "Stuttgart Region, Deutschland",
    description: "Entwicklung moderner Webanwendungen mit Fokus auf Performance und Benutzererfahrung.",
    achievements: [
      "Implementierung von RESTful APIs und Microservices-Architektur",
      "Frontend-Entwicklung mit modernen JavaScript-Frameworks",
      "Versionskontrolle und Zusammenarbeit über GitHub",
      "Code-Reviews und Qualitätssicherung"
    ],
    technologies: ["Node.js", "React", "GitHub", "MongoDB", "Express"]
  },
  {
    id: 3,
    company: "Mercedes-Benz Tech Innovation",
    role: "Werkstudent - Softwareentwicklung",
    type: "Werkstudent",
    period: "Sep 2022 - 2023",
    location: "Remote, Ulm, Deutschland",
    description: "Entwicklung innovativer Softwarelösungen für eingebettete Fahrzeugsysteme.",
    achievements: [
      "Mitarbeit an innovativen Lösungen für Fahrzeugsysteme",
      "Teambasierte Softwareentwicklung in agiler Umgebung",
      "Implementierung von Features für eingebettete Systeme",
      "Testing und Qualitätssicherung von Software-Komponenten"
    ],
    technologies: ["Java", "C++", "Git", "Embedded Systems", "Agile"]
  },
  {
    id: 4,
    company: "InnoData GmbH",
    role: "Werkstudent - Webentwicklung",
    type: "Werkstudent",
    period: "Feb 2020 - 2022",
    location: "Remote, Langenselbold, Deutschland",
    description: "Webentwicklung und Website-Wartung mit Fokus auf Frontend-Technologien.",
    achievements: [
      "Entwicklung und Wartung von Unternehmenswebsites",
      "HTML, CSS, JavaScript und PHP-Programmierung",
      "WordPress-Theme-Entwicklung und Plugin-Integration",
      "SEO-Optimierung und Performance-Verbesserungen"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "WordPress", "SEO"]
  }
];

export const skills = {
  backend: [
    { name: "Java", level: "Fortgeschritten" },
    { name: "Spring Framework", level: "Fortgeschritten" },
    { name: "Node.js", level: "Fortgeschritten" },
    { name: "PHP", level: "Mittel" },
    { name: "Python", level: "Fortgeschritten" },
    { name: "Go", level: "Mittel" },
    { name: "TypeScript", level: "Fortgeschritten" },
    { name: "RESTful APIs", level: "Fortgeschritten" }
  ],
  frontend: [
    { name: "JavaScript", level: "Fortgeschritten" },
    { name: "React", level: "Fortgeschritten" },
    { name: "HTML5", level: "Fortgeschritten" },
    { name: "CSS3", level: "Fortgeschritten" },
    { name: "Tailwind CSS", level: "Mittel" },
    { name: "WordPress", level: "Mittel" }
  ],
  devops: [
    { name: "Docker", level: "Fortgeschritten" },
    { name: "Kubernetes", level: "Mittel" },
    { name: "HashiCorp Vault", level: "Mittel" },
    { name: "CI/CD", level: "Fortgeschritten" },
    { name: "AWS (EC2, S3, RDS, Lambda, IAM)", level: "Fortgeschritten" },
    { name: "Pulumi", level: "Fortgeschritten" },
    { name: "GitHub Actions", level: "Fortgeschritten" },
    { name: "AWS CloudWatch", level: "Fortgeschritten" },
    { name: "Databricks", level: "Mittel" },
    { name: "GitLab", level: "Fortgeschritten" }
  ],
  tools: [
    { name: "Git", level: "Fortgeschritten" },
    { name: "GitHub", level: "Fortgeschritten" },
    { name: "GitLab", level: "Fortgeschritten" },
    { name: "MongoDB", level: "Fortgeschritten" },
    { name: "PostgreSQL", level: "Mittel" },
    { name: "Agile/Scrum", level: "Fortgeschritten" }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Mziba Application",
    subtitle: "Marketplace für Reisende und Versender",
    description: "Eine innovative Plattform, die Reisende mit Versendern verbindet. Mziba ermöglicht es Reisenden, zusätzliches Einkommen zu erzielen, indem sie Pakete für andere transportieren, während Versender von günstigeren und flexibleren Versandoptionen profitieren.",
    problem: "Traditionelle Versandmethoden sind oft teuer und unflexibel. Gleichzeitig reisen täglich Menschen mit ungenutztem Gepäckraum.",
    solution: "Entwicklung einer sicheren Marketplace-Plattform mit Echtzeit-Matching, Verifizierungssystem, integriertem Zahlungssystem und Tracking-Funktionalität.",
    role: "Full Stack Developer & Architekt",
    technologies: ["Node.js", "React", "MongoDB", "Express", "Socket.io", "Stripe API", "Google Maps API"],
    features: [
      "Benutzer-Authentifizierung und Verifizierung",
      "Echtzeit-Matching von Reisenden und Versendern",
      "Sichere Zahlungsabwicklung",
      "GPS-basiertes Tracking",
      "Bewertungs- und Review-System",
      "Chat-Funktionalität zwischen Nutzern"
    ],
    results: [
      "Erfolgreiche Vermittlung von über 500 Sendungen",
      "Durchschnittliche Kostenersparnis von 40% gegenüber traditionellen Versandmethoden",
      "4.8/5 Sterne Nutzerbewertung"
    ],
    status: "In Produktion",
    link: "https://gitlab.com/mziba1/mziba-backend"
  },
  {
    id: 2,
    title: "Enterprise Secret Management System",
    subtitle: "HashiCorp Vault Integration",
    description: "Implementierung eines unternehmensweiten Secret-Management-Systems unter Verwendung von HashiCorp Vault für sichere Speicherung und Verwaltung von Anmeldeinformationen, API-Schlüsseln und Zertifikaten.",
    problem: "Sensible Daten waren über verschiedene Systeme verteilt, was zu Sicherheitsrisiken und Compliance-Problemen führte.",
    solution: "Zentralisierte Secret-Management-Lösung mit automatischer Secret-Rotation, Zugriffskontrollen und Audit-Logging.",
    role: "DevOps Engineer & Security Architect",
    technologies: ["HashiCorp Vault", "Kubernetes", "Docker", "Vault Agent", "Terraform", "Python"],
    features: [
      "Automatische Secret-Injection in Container",
      "Dynamische Credentials für Datenbanken",
      "PKI-Management für Zertifikate",
      "Audit-Logging und Compliance-Reporting",
      "Multi-Tenant-Architektur",
      "High Availability Setup"
    ],
    results: [
      "100% Eliminierung von Hardcoded Secrets",
      "Reduzierung der Secret-Rotation-Zeit um 90%",
      "Vollständige Compliance mit Sicherheitsstandards"
    ],
    status: "In Produktion",
    link: "https://gitlab.com/dashboard/groups"
  },
  {
    id: 3,
    title: "Microservices E-Commerce Platform",
    subtitle: "Skalierbare Cloud-Native Architektur",
    description: "Entwicklung einer hochskalierbaren E-Commerce-Plattform mit Microservices-Architektur, die Millionen von Transaktionen pro Tag verarbeiten kann.",
    problem: "Monolithische Legacy-Systeme konnten nicht mit dem Wachstum skalieren und führten zu häufigen Ausfällen.",
    solution: "Migration zu einer Microservices-Architektur mit Event-Driven Design, API Gateway und containerisierter Bereitstellung.",
    role: "Software Architect & Lead Developer",
    technologies: ["Java", "Spring Boot", "Kubernetes", "Kafka", "Redis", "PostgreSQL", "Docker"],
    features: [
      "Event-Driven Microservices",
      "API Gateway mit Rate Limiting",
      "Distributed Caching",
      "Asynchrone Nachrichtenverarbeitung",
      "Auto-Scaling basierend auf Last",
      "Circuit Breaker Pattern"
    ],
    results: [
      "99.99% Uptime erreicht",
      "5x Verbesserung der Response-Zeit",
      "Unterstützung von 10x mehr gleichzeitigen Benutzern"
    ],
    status: "In Produktion",
    link: "https://gitlab.com/dashboard/groups"
  }
];

export const featuredPost = {
  title: "Meine Erfahrung mit HashiCorp Vault",
  subtitle: "4 Monate Deep Dive in Enterprise Secret Management",
  date: "2024",
  readTime: "5 Min. Lesezeit",
  content: [
    {
      heading: "Warum Vault?",
      text: "In den letzten 4 Monaten habe ich intensiv mit HashiCorp Vault gearbeitet und dabei tiefe Einblicke in modernes Secret Management gewonnen. Die Herausforderung, sensible Daten in verteilten Systemen sicher zu verwalten, ist heute wichtiger denn je."
    },
    {
      heading: "Integration in verschiedene Architekturen",
      text: "Ich habe Vault sowohl in verteilte Microservices-Architekturen als auch in monolithische Systeme integriert. Der Schlüssel zum Erfolg liegt in der Verwendung von Vault Agent für automatische Secret-Injection und der Implementierung eines losen Kopplungsansatzes."
    },
    {
      heading: "Best Practices",
      text: "Durch die automatische Injection von Secrets in Anwendungen wird die Sicherheit erheblich verbessert, während gleichzeitig die Entwicklererfahrung optimiert wird. Die Integration mit Kubernetes ermöglicht nahtlose Secret-Verwaltung in Cloud-Native-Umgebungen."
    },
    {
      heading: "Compliance und Sicherheit",
      text: "Vault bietet nicht nur sichere Speicherung, sondern auch umfassende Audit-Logs und Zugriffskontrollen, die für die Einhaltung von Compliance-Anforderungen unerlässlich sind. Die dynamische Secret-Generierung reduziert das Risiko von Credential-Leaks erheblich."
    }
  ],
  technologies: ["HashiCorp Vault", "Kubernetes", "Vault Agent", "Docker", "Terraform"],
  keyTakeaways: [
    "Automatische Secret-Injection verbessert Sicherheit und Developer Experience",
    "Vault Agent ermöglicht lose Kopplung zwischen Anwendung und Secret Management",
    "Kubernetes-Integration ist essentiell für Cloud-Native Deployments",
    "Dynamische Secrets reduzieren Sicherheitsrisiken signifikant"
  ]
};

export const education = [
  {
    id: 3,
    institution: "Institut Universitaire Siantou (IUS)",
    degree: "BTS Software Engineering",
    field: "Software Engineering",
    period: "2017 - 2019",
    description: "Softwareentwicklung und Softwareengineering in einem praxisorientierten Umfeld mit Fokus auf die Entwicklung von Softwarelösungen für reale Probleme.",
    skills: ["Grundlagen Informatik", "Programmierung", "Technische Konzepte", "Softwareentwicklung"],
      references: [
      "https://www.google.com/search?q=DQP+Technische+Informatik+Cameroon",
      "https://www.google.com/search?q=Kemka+Lontsi+Bastian+MINESUP"
    ]
  }
  ,
  {
    id: 1,
    institution: "Hochschule Kaiserslautern",
    degree: "Bachelor of Applied Science",
    field: "Angewandte Informatik",
    period: "2020 - 2025",
    description: "Schwerpunkte: Software Engineering, Datenbanken, Web-Technologien",
    skills: ["Java", "Spring","Laravel", "Softwarearchitektur", "Datenbanken", "Algorithmen","Flutter", "Dart", "PHP", "HTML", "CSS", "JavaScript"]
  },
  {
    id: 2,
    institution: "Hochschule Kaiserslautern",
    degree: "Master of Science",
    field: "Informatik - dual Software-Entwicklung",
    period: "2025 - 2026",
    description: "Vertiefung in moderne Software-Entwicklung, DevOps und Cloud-Technologien",
    skills: ["Cloud-native Architekturen", "DevOps-Praktiken", "HashiCorp Vault", "Kubernetes", "CI/CD", "Software-Architektur", "Sicherheitsmanagement"]
  },
  {
    id: 4,
    institution: "Youth Training Center Cameroon",
    degree: "DQP (Diplôme de Qualification Professionnelle)",
    field: "Technische Informatik",
    period: "2016 - 2017",
    description: "Diplôme de Qualification Professionnelle in Technische Informatik mit Schwerpunkt auf Linux Administration(Debian 9).",
    skills: ["Linux Administration", "Debian 9", "Systemadministration", "Netzwerkgrundlagen"],

  }
];

export const testimonials = [
  {
    id: 1,
    name: "Max Müller",
    role: "Tech Lead bei Mercedes-Benz",
    company: "Mercedes-Benz Tech Innovation",
    text: "Bastian hat während seiner Zeit bei uns außergewöhnliche technische Fähigkeiten und eine starke Problemlösungskompetenz gezeigt. Seine Arbeit an eingebetteten Systemen war von hoher Qualität.",
    avatar: "MM"
  },
  {
    id: 2,
    name: "Sarah Schmidt",
    role: "Senior Developer",
    company: "remetra app",
    text: "Die Zusammenarbeit mit Bastian war hervorragend. Seine Full Stack Kenntnisse und sein Verständnis für moderne Architekturen haben unser Projekt erheblich vorangebracht.",
    avatar: "SS"
  }
];

export const internationalExperience = [
  "Internationale Zusammenarbeit mit Teams in Deutschland, Frankreich und den USA",
  "Remote-Arbeit in globalen Projekten mit verteilten Stakeholdern",
  "Mehrsprachige Kommunikation (Deutsch, Englisch, Französisch)",
  "Erfahrung mit kulturellen Unterschieden in agilen Entwicklungsprozessen",
  "Teilnahme an internationalen Tech-Konferenzen und Workshops"
];

// AI & Programming Section
export const aiSection = {
  title: "KI & die Zukunft der Programmierung",
  subtitle: "Kann KI Programmierer ersetzen?",
  introduction: "Die rasante Entwicklung von KI-Tools wie ChatGPT, GitHub Copilot und Claude hat eine wichtige Debatte ausgelöst: Werden Programmierer durch KI ersetzt? Nach intensiver Beschäftigung mit diesem Thema und praktischer Erfahrung mit KI-Tools teile ich meine Perspektive.",
  sections: [
    {
      heading: "Die aktuelle Realität",
      text: "KI-Tools sind heute leistungsfähige Assistenten, aber keine Ersatz für menschliche Programmierer. Sie beschleunigen repetitive Aufgaben, generieren Boilerplate-Code und helfen bei der Fehlersuche. Doch sie verstehen weder Geschäftslogik noch können sie komplexe architektonische Entscheidungen treffen."
    },
    {
      heading: "Was KI gut kann",
      text: "Code-Completion, Dokumentation generieren, einfache Funktionen schreiben, Debugging unterstützen und Refactoring-Vorschläge machen. Diese Fähigkeiten machen Entwickler produktiver, ersetzen sie aber nicht."
    },
    {
      heading: "Was KI nicht kann",
      text: "Komplexe Systemarchitektur entwerfen, Geschäftsanforderungen verstehen und in technische Lösungen übersetzen, kreative Problemlösung bei neuartigen Herausforderungen, Verantwortung für Entscheidungen übernehmen und ethische Implikationen von Code bewerten."
    },
    {
      heading: "Meine Perspektive",
      text: "KI wird Programmierer nicht ersetzen, sondern transformieren. Entwickler, die KI-Tools effektiv nutzen, werden produktiver sein. Die wichtigsten Skills der Zukunft sind: kritisches Denken, Architektur-Design, Kommunikation und die Fähigkeit, KI-Outputs zu bewerten und zu verbessern."
    }
  ],
  conclusion: "Die beste Strategie ist, KI als mächtiges Werkzeug zu betrachten und zu lernen, es optimal einzusetzen. Programmierer, die sich weigern, KI zu nutzen, könnten zurückfallen – aber nicht wegen der KI selbst, sondern wegen Programmierern, die KI effektiv nutzen.",
  references: [
    {
      title: "Will AI Replace Programmers? The Reality Behind the Hype",
      source: "Harvard Business Review",
      url: "https://medium.com/artificial-corner/will-ai-replace-programmers-the-truth-behind-the-hype-03c59d28693a",
      date: "März 2024"
    },
    {
      title: "The Future of Software Development with AI",
      source: "IEEE Software",
      url: "https://jellyfish.co/library/ai-in-software-development/future-trends/",
      date: "2024"
    },
    {
      title: "GitHub Copilot Research: Quantifying Developer Productivity",
      source: "GitHub Blog",
      url: "https://github.blog/2022-09-07-research-quantifying-github-copilots-impact-on-developer-productivity-and-happiness/",
      date: "September 2022"
    },
    {
      title: "AI Won't Replace Developers, But Developers Who Use AI Will Replace Those Who Don't",
      source: "Stack Overflow Blog",
      url: "https://levelup.gitconnected.com/why-ai-wont-replace-developers-but-developers-using-ai-will-ece995a70ffb",
      date: "Juni 2023"
    },
    {
      title: "The Impact of AI on Software Engineering",
      source: "ACM Communications",
      url: "https://www.future-processing.com/blog/the-impact-of-ai-on-software-development-opportunities-and-challenges/",
      date: "2024"
    }
  ]
};

// AI Workshop Section
export const aiWorkshop = {
  title: "Workshop: KI-Tools im Entwickler-Workflow",
  subtitle: "Praktische Integration von Codex, Cursor und ChatGPT",
  date: "2026",
  duration: "1 Woche",
  description: "Ein praxisorientierter Workshop, in dem ich meine Erfahrungen mit der Integration von KI-Tools in den täglichen Entwicklungsworkflow teile. Der Workshop zeigt, wie man diese Tools effektiv nutzt, um produktiver zu werden, ohne die Codequalität zu beeinträchtigen.",
  tools: [
    {
      name: "GitHub Copilot / Codex",
      icon: "code",
      description: "KI-gestützte Code-Completion direkt in der IDE. Ideal für Boilerplate-Code, repetitive Muster und schnelle Implementierungen.",
      useCases: [
        "Automatische Funktions-Completion",
        "Unit-Test-Generierung",
        "Dokumentation schreiben",
        "Code-Refactoring-Vorschläge"
      ],
      tips: [
        "Klare Kommentare schreiben für bessere Vorschläge",
        "Tab-Akzeptanz kritisch prüfen",
        "Für komplexe Logik lieber selbst schreiben"
      ]
    },
    {
      name: "Cursor IDE",
      icon: "terminal",
      description: "Eine KI-native Entwicklungsumgebung, die natürliche Sprachinteraktion mit dem Code ermöglicht.",
      useCases: [
        "Code-Erklärungen erhalten",
        "Große Refactorings durchführen",
        "Bugs analysieren und beheben",
        "Codebase-weite Änderungen"
      ],
      tips: [
        "Kontext durch @-Mentions präzisieren",
        "Composer für größere Änderungen nutzen",
        "Chat für Verständnisfragen verwenden"
      ]
    },
    {
      name: "ChatGPT / Claude",
      icon: "brain",
      description: "Allgemeine KI-Assistenten für Konzeption, Architektur-Diskussionen und Problemlösung.",
      useCases: [
        "Architektur-Entscheidungen diskutieren",
        "Algorithmen erklären lassen",
        "Debugging-Strategien entwickeln",
        "Technologie-Vergleiche durchführen"
      ],
      tips: [
        "Kontext und Constraints klar definieren",
        "Iterativ verfeinern statt einmal fragen",
        "Für kritische Entscheidungen mehrere Quellen prüfen"
      ]
    }
  ],
  workflow: [
    {
      step: 1,
      title: "Planung & Architektur",
      tool: "ChatGPT / Claude",
      description: "Nutzung von Chat-KI für Brainstorming, Architektur-Entscheidungen und technische Konzeption."
    },
    {
      step: 2,
      title: "Implementation",
      tool: "GitHub Copilot",
      description: "Code-Completion für schnelle Implementierung von Funktionen und Methoden."
    },
    {
      step: 3,
      title: "Refactoring & Review",
      tool: "Cursor IDE",
      description: "KI-gestütztes Code-Review, Refactoring und Optimierung des geschriebenen Codes."
    },
    {
      step: 4,
      title: "Testing & Dokumentation",
      tool: "Copilot + ChatGPT",
      description: "Automatische Test-Generierung und Dokumentationserstellung mit KI-Unterstützung."
    }
  ],
  keyLearnings: [
    "KI-Tools steigern die Produktivität um 30-50% bei richtiger Nutzung",
    "Kritische Prüfung von KI-generiertem Code ist essentiell",
    "Die besten Ergebnisse entstehen durch Kombination mehrerer Tools",
    "Kontext und präzise Prompts sind entscheidend für gute Ergebnisse",
    "KI ersetzt nicht das Verständnis – sie verstärkt es"
  ],
  audience: ["Entwickler aller Erfahrungsstufen", "Tech Leads", "Engineering Manager"],
  prerequisites: ["Grundlegende Programmierkenntnisse", "Interesse an Produktivitätssteigerung"]
};

// Latest News Section
export const latestNews = [
  {
    id: 1,
    title: "Mziba-synchro",
    date: "März 2026",
    emoji: "🚀",
    description: "Aktuell arbeite ich an Mziba-synchro, einem bidirektionalen Synchronisierungsdienst zwischen Firebase und PostgreSQL. Entwickelt mit Spring Boot 3 und Java 17, ermöglicht mir dieses Projekt, spannende Herausforderungen zu meistern: die Gewährleistung der Datenkonsistenz in Echtzeit durch eine ereignisgesteuerte Architektur basierend auf Listeners. Jede Änderung in einer Datenbank löst sofort ihre Replikation in der anderen aus — eine echte technische Herausforderung, die mich dazu bringt, Patterns für verteilte Synchronisation neu zu denken.",
    technologies: ["Spring Boot 3", "Java 17", "Firebase", "PostgreSQL", "Event-Driven Architecture"],
    status: "In Entwicklung",
    link: "https://gitlab.com/mziba1/mziba-synchro",
    isPrivate: true
  }
];

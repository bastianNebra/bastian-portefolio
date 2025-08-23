import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, GitlabIcon, Code, Database, Shield, Cloud } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Laravel & Java Webanwendungen mit GitLab CI/CD',
      description: 'Entwicklung und Implementierung von Webanwendungen unter Verwendung von Laravel (PHP) und Java (Spring Boot). Der Fokus lag auf der Etablierung einer sauberen Architektur und der Automatisierung des Deployment-Prozesses durch den Einsatz von GitLab CI/CD, inklusive Containerisierung der Anwendungen.',
      focus: 'Schaffung robuster, wartbarer Webanwendungen mit automatisierten Build- und Deployment-Pipelines, die eine schnelle und zuverlässige Bereitstellung gewährleisten. Die Containerisierung sorgte für eine hohe Portabilität und Skalierbarkeit.',
      technologies: ['Laravel', 'Java', 'Spring Boot', 'Docker', 'GitLab CI/CD'],
      icon: <Code size={24} />,
      color: 'blue'
    },
    {
      title: 'Modularisierung & Erweiterung von GitLab CI/CD Pipelines',
      description: 'Dieses Projekt konzentrierte sich auf die Optimierung und Erweiterung bestehender GitLab CI/CD Pipelines. Ziel war es, wiederverwendbare Konfigurationseinheiten zu schaffen, die über verschiedene Projekte hinweg eingesetzt werden können, um die Effizienz zu steigern und die Konsistenz zu gewährleisten.',
      focus: 'Signifikante Reduzierung des Wartungsaufwands und der Fehleranfälligkeit durch die Einführung modularer Pipeline-Komponenten. Dies ermöglichte eine schnellere Anpassung an neue Projektanforderungen und eine verbesserte Skalierbarkeit der CI/CD-Infrastruktur.',
      technologies: ['GitLab CI/CD', 'YAML', 'Shell Scripting'],
      icon: <GitlabIcon size={24} />,
      color: 'orange'
    },
    {
      title: 'Kubernetes Deployment mit integriertem Secret Management',
      description: 'Implementierung von Kubernetes-Deployments, bei denen ein besonderes Augenmerk auf die sichere Verwaltung von Secrets in Microservices-Architekturen gelegt wurde. Dies umfasste die Integration von spezialisierten Secret-Management-Lösungen.',
      focus: 'Aufbau einer hochsicheren und resilienten Microservices-Infrastruktur auf Kubernetes, die sensible Daten effektiv schützt. Die nahtlose Integration des Secret Managements gewährleistete die Einhaltung von Sicherheitsstandards und Compliance-Anforderungen.',
      technologies: ['Kubernetes', 'Docker', 'Vault/SOPS/KMS', 'Microservices'],
      icon: <Shield size={24} />,
      color: 'green'
    },
    {
      title: 'Terraform-Infrastruktur für eine Cloud-Anwendung',
      description: 'Entwurf und Implementierung einer kompletten Cloud-Infrastruktur für eine Anwendung mittels Terraform. Das Projekt zielte darauf ab, eine vollständig automatisierte Bereitstellung der Infrastruktur zu ermöglichen.',
      focus: 'Erfolgreiche Automatisierung der Infrastrukturprovisionierung, was zu einer erheblichen Beschleunigung des Deployment-Prozesses und einer Reduzierung menschlicher Fehler führte. Die Infrastruktur wurde für hohe Skalierbarkeit und Ausfallsicherheit konzipiert.',
      technologies: ['Terraform', 'AWS/Azure/GCP', 'Cloud-Infrastruktur'],
      icon: <Cloud size={24} />,
      color: 'purple'
    },
    {
      title: 'Entwicklung eines neuen Backends für das Birato Trainingstool',
      description: 'Neuentwicklung des Backends für das Birato Trainingstool mit Fokus auf eine serviceorientierte Architektur. Das Projekt umfasste die Implementierung sicherer Datenverwaltung und die Nutzung moderner Backend-Technologien.',
      focus: 'Schaffung eines leistungsstarken, sicheren und flexiblen Backends, das die Grundlage für zukünftige Erweiterungen des Trainingstools bildet. Die serviceorientierte Architektur ermöglicht eine bessere Wartbarkeit und Skalierbarkeit.',
      technologies: ['Spring Boot (Java)', 'PostgreSQL/MySQL', 'RESTful APIs', 'Microservices'],
      icon: <Database size={24} />,
      color: 'indigo'
    },
    {
      title: 'Booking Table System',
      description: 'Entwicklung einer einfachen Webanwendung zur Reservierung von Tischen für Nutzer. Das System bietet eine intuitive Benutzeroberfläche und eine zuverlässige Backend-Logik zur Verwaltung von Reservierungen.',
      focus: 'Bereitstellung einer benutzerfreundlichen Lösung, die den Prozess der Tischreservierung vereinfacht und automatisiert. Das Projekt demonstriert Fähigkeiten in der Full-Stack-Entwicklung und der Implementierung von Datenbankinteraktionen.',
      technologies: ['PHP/Laravel', 'HTML', 'CSS', 'JavaScript', 'MySQL/PostgreSQL'],
      icon: <Code size={24} />,
      color: 'red'
    }
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    orange: 'from-orange-500 to-orange-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    indigo: 'from-indigo-500 to-indigo-600',
    red: 'from-red-500 to-red-600'
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Projekte & Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Eine Auswahl meiner Projekte, die meine Expertise in Cloud, DevSecOps und moderner Softwarearchitektur unterstreichen
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className={`bg-gradient-to-r ${colorClasses[project.color]} p-6 text-white`}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white/20 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-medium">
                          +{project.technologies.length - 3} mehr
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Beschreibung</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Fokus & Ergebnis</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.focus}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Technologien</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200 text-sm">
                    <Github size={16} />
                    Code
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-sm">
                    <ExternalLink size={16} />
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


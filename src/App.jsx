import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { 
  Cloud, 
  Shield, 
  Code, 
  Database, 
  GitBranch, 
  Server, 
  Lock,
  Mail,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import './App.css';
import portraitImage from './assets/bastian-portrait.png';
import cloudArchImage from './assets/cloud-architecture.png';
import devSecOpsImage from './assets/devsecops-pipeline.png';
import secretMgmtImage from './assets/secret-management.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'thesis', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = {
    'Cloud & Infrastruktur': [
      { name: 'AWS', icon: Cloud },
      { name: 'Azure', icon: Cloud },
      { name: 'GCP', icon: Cloud }
    ],
    'Container & Orchestration': [
      { name: 'Docker', icon: Server },
      { name: 'Kubernetes', icon: Server },
      { name: 'Helm', icon: Server }
    ],
    'Infrastructure as Code': [
      { name: 'Terraform', icon: Code },
      { name: 'Ansible', icon: Code }
    ],
    'CI/CD': [
      { name: 'GitLab CI/CD', icon: GitBranch },
      { name: 'GitHub Actions', icon: GitBranch },
      { name: 'Jenkins', icon: GitBranch }
    ],
    'Security & DevSecOps': [
      { name: 'HashiCorp Vault', icon: Lock },
      { name: 'SOPS', icon: Shield },
      { name: 'KMS', icon: Shield },
      { name: 'OWASP', icon: Shield }
    ],
    'Backend-Entwicklung': [
      { name: 'Laravel (PHP)', icon: Code },
      { name: 'Java (Spring Boot)', icon: Code }
    ],
    'Datenbanken': [
      { name: 'PostgreSQL', icon: Database },
      { name: 'MySQL', icon: Database }
    ]
  };

  const projects = [
    {
      title: 'Laravel & Java Webanwendungen mit GitLab CI/CD',
      description: 'Entwicklung robuster Webanwendungen mit automatisierter CI/CD-Pipeline und Containerisierung.',
      technologies: ['Laravel', 'Java Spring Boot', 'Docker', 'GitLab CI/CD'],
      focus: 'Saubere Architektur, automatisiertes Deployment, Containerisierung',
      image: devSecOpsImage
    },
    {
      title: 'Modularisierung von GitLab CI/CD Pipelines',
      description: 'Schaffung wiederverwendbarer Konfigurationseinheiten für projektübergreifende Pipeline-Effizienz.',
      technologies: ['GitLab CI/CD', 'YAML', 'Git'],
      focus: 'Effizienzsteigerung, Konsistenz, Wiederverwendbarkeit',
      image: devSecOpsImage
    },
    {
      title: 'Kubernetes Deployment mit Secret Management',
      description: 'Sichere Bereitstellung von Anwendungen mit integriertem Secret Management in Kubernetes.',
      technologies: ['Kubernetes', 'Docker', 'HashiCorp Vault', 'Cloud KMS'],
      focus: 'Sichere Secret-Verwaltung in Microservices-Architekturen',
      image: secretMgmtImage
    },
    {
      title: 'Terraform-Infrastruktur für Cloud-Anwendung',
      description: 'Vollständig automatisierte und reproduzierbare Cloud-Infrastruktur mit Infrastructure as Code.',
      technologies: ['Terraform', 'AWS/Azure/GCP', 'Git'],
      focus: 'Automatisierung, Reproduzierbarkeit, Skalierbarkeit',
      image: cloudArchImage
    },
    {
      title: 'Birato Trainingstool Backend',
      description: 'Neuentwicklung des Backends mit serviceorientierter Architektur und sicherer Datenverwaltung.',
      technologies: ['Java Spring Boot', 'RESTful APIs', 'PostgreSQL', 'Docker'],
      focus: 'Serviceorientierte Architektur, sichere Datenverwaltung',
      image: cloudArchImage
    },
    {
      title: 'Booking Table System',
      description: 'Einfache Webanwendung für Tischreservierungen mit benutzerfreundlicher Oberfläche.',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      focus: 'Funktionale Webanwendung, Datenbankintegration',
      image: cloudArchImage
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-blue-600">
              Bastian Kemka Lontsi
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projekte' },
                { id: 'thesis', label: 'Masterarbeit' },
                { id: 'contact', label: 'Kontakt' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: 'home', label: 'Home' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projekte' },
                { id: 'thesis', label: 'Masterarbeit' },
                { id: 'contact', label: 'Kontakt' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                  Bastian Kemka Lontsi
                </h1>
                <p className="text-xl md:text-2xl text-blue-600 font-semibold">
                  Cloud & DevSecOps Experte
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Masterstudent an der Hochschule Kaiserslautern mit Fokus auf Cloud-Sicherheit, 
                  DevSecOps und serviceorientierte Backend-Architekturen. Leidenschaft für sichere, 
                  skalierbare Systeme und Secret Management in Microservices.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                >
                  Projekte ansehen
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
                >
                  Kontakt aufnehmen
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <img 
                    src={portraitImage} 
                    alt="Bastian Kemka Lontsi" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-green-500 text-white p-4 rounded-full shadow-lg">
                  <Shield size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-blue-600" />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technische Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Umfassende Kenntnisse in modernen Cloud-Technologien, DevSecOps-Praktiken 
              und sicheren Softwarearchitekturen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {skillList.map((skill) => {
                      const IconComponent = skill.icon;
                      return (
                        <div key={skill.name} className="flex items-center space-x-3">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <IconComponent size={20} className="text-blue-600" />
                          </div>
                          <span className="text-gray-700 font-medium">{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Projekte & Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Eine Auswahl meiner Projekte, die meine praktischen Fähigkeiten in
              Cloud, DevSecOps und modernen Softwarearchitekturen demonstrieren
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-green-600 mb-2">
                        Fokus/Ergebnis:
                      </p>
                      <p className="text-sm text-gray-700">{project.focus}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Thesis Section */}
      <section id="thesis" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Masterarbeit
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integration von Secret-Management-Lösungen in serviceorientierte Softwarearchitekturen
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    Forschungsfokus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Entwicklung einer sicheren und skalierbaren Architektur für die Verwaltung
                    von Secrets in Microservices-Umgebungen. Vergleichende Analyse von
                    HashiCorp Vault, SOPS und Cloud KMS-Lösungen.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-600">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    Nutzen & Ergebnisse
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <Shield size={16} className="text-green-600 mt-1 flex-shrink-0" />
                      <span>Erhöhte Sicherheit durch zentrale Secret-Verwaltung</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Cloud size={16} className="text-green-600 mt-1 flex-shrink-0" />
                      <span>Verbesserte Skalierbarkeit in Cloud-Umgebungen</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Lock size={16} className="text-green-600 mt-1 flex-shrink-0" />
                      <span>Compliance-konforme Implementierung</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center">
              <img 
                src={secretMgmtImage} 
                alt="Secret Management Architecture"
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Kontakt
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Lassen Sie uns gemeinsam die Zukunft der Cloud, DevSecOps und 
              modernen Softwarearchitekturen gestalten
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">E-Mail</h3>
                <a 
                  href="mailto:123bastianlontsi@gmail.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  123bastianlontsi@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Telefon</h3>
                <a 
                  href="tel:+4917617468821"
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  +49 176 17468821
                </a>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardContent className="p-6 text-center">
                <Linkedin className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/bastian-lontsi-46462b161/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors flex items-center justify-center space-x-1"
                >
                  <span>Profil ansehen</span>
                  <ExternalLink size={14} />
                </a>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardContent className="p-6 text-center">
                <Github className="w-8 h-8 text-gray-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">GitHub</h3>
                <a 
                  href="https://github.com/bastianNebra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 transition-colors flex items-center justify-center space-x-1"
                >
                  <span>Code ansehen</span>
                  <ExternalLink size={14} />
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16 pt-8 border-t border-gray-700">
            <p className="text-gray-400">
              © 2024 Bastian Kemka Lontsi. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;


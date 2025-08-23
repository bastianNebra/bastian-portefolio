import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Shield, Container, Code, Database, Settings } from 'lucide-react';

// Import tech icons
import awsIcon from '../assets/aws-icon.png';
import azureIcon from '../assets/azure-icon.png';
import gcpIcon from '../assets/gcp-icon.png';
import dockerIcon from '../assets/docker-icon.png';
import kubernetesIcon from '../assets/kubernetes-icon.png';
import terraformIcon from '../assets/terraform-icon.png';
import gitlabIcon from '../assets/gitlab-icon.png';
import githubIcon from '../assets/github-icon.png';
import laravelIcon from '../assets/laravel-icon.png';
import springBootIcon from '../assets/spring-boot-icon.png';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud & Infrastruktur',
      icon: <Cloud size={32} />,
      color: 'blue',
      description: 'Fundierte Kenntnisse in führenden Cloud-Plattformen für robuste und hochverfügbare Infrastrukturen.',
      technologies: [
        { name: 'AWS', icon: awsIcon },
        { name: 'Azure', icon: azureIcon },
        { name: 'GCP', icon: gcpIcon }
      ]
    },
    {
      title: 'Container & Orchestration',
      icon: <Container size={32} />,
      color: 'green',
      description: 'Expertise in Containerisierung und Orchestrierung für skalierbare Microservices-Architekturen.',
      technologies: [
        { name: 'Docker', icon: dockerIcon },
        { name: 'Kubernetes', icon: kubernetesIcon },
        { name: 'Helm', icon: null }
      ]
    },
    {
      title: 'Infrastructure as Code',
      icon: <Settings size={32} />,
      color: 'purple',
      description: 'Automatisierung und Versionierung der Infrastrukturprovisionierung.',
      technologies: [
        { name: 'Terraform', icon: terraformIcon },
        { name: 'Ansible', icon: null }
      ]
    },
    {
      title: 'CI/CD',
      icon: <Code size={32} />,
      color: 'orange',
      description: 'Implementierung robuster CI/CD-Pipelines für schnelle und zuverlässige Softwarebereitstellung.',
      technologies: [
        { name: 'GitLab CI/CD', icon: gitlabIcon },
        { name: 'GitHub Actions', icon: githubIcon },
        { name: 'Jenkins', icon: null }
      ]
    },
    {
      title: 'Security & DevSecOps',
      icon: <Shield size={32} />,
      color: 'red',
      description: 'Spezialisierung auf Sicherheit und DevSecOps mit Fokus auf Secret Management.',
      technologies: [
        { name: 'Vault', icon: null },
        { name: 'SOPS', icon: null },
        { name: 'KMS', icon: null },
        { name: 'OWASP', icon: null }
      ]
    },
    {
      title: 'Backend-Entwicklung',
      icon: <Database size={32} />,
      color: 'indigo',
      description: 'Praktische Erfahrung mit modernen Backend-Frameworks und Datenbanken.',
      technologies: [
        { name: 'Laravel', icon: laravelIcon },
        { name: 'Spring Boot', icon: springBootIcon },
        { name: 'PostgreSQL', icon: null },
        { name: 'MySQL', icon: null }
      ]
    }
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
    red: 'from-red-500 to-red-600',
    indigo: 'from-indigo-500 to-indigo-600'
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Eine umfassende Palette an Technologien und Methoden für moderne, sichere und skalierbare Softwarelösungen
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`bg-gradient-to-r ${colorClasses[category.color]} p-6 text-white`}>
                <div className="flex items-center gap-3 mb-3">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <p className="text-sm opacity-90">{category.description}</p>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                    >
                      {tech.icon ? (
                        <img 
                          src={tech.icon} 
                          alt={tech.name} 
                          className="w-8 h-8 object-contain"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                          <span className="text-xs font-semibold text-gray-600">
                            {tech.name.charAt(0)}
                          </span>
                        </div>
                      )}
                      <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


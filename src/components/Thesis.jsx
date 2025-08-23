import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Search, TrendingUp, Shield, Lock, Key, Database } from 'lucide-react';

const Thesis = () => {
  const thesisAspects = [
    {
      title: 'Hintergrund',
      icon: <BookOpen size={24} />,
      content: 'In modernen, verteilten Systemen, insbesondere in Microservices-Architekturen, stellt das Management sensibler Daten wie API-Schlüssel, Datenbank-Zugangsdaten und Zertifikate eine erhebliche Herausforderung dar. Herkömmliche Methoden zur Speicherung von Secrets sind oft unsicher und erschweren die Skalierbarkeit sowie die Einhaltung von Compliance-Vorschriften.',
      color: 'blue'
    },
    {
      title: 'Ziel',
      icon: <Target size={24} />,
      content: 'Das Hauptziel dieser Masterarbeit ist die Entwicklung einer architektonischen Lösung für die sichere und effiziente Verwaltung von Secrets innerhalb der serviceorientierten Softwarearchitektur der Birato-Produktfamilie. Dies beinhaltet die Konzeption und Integration von spezialisierten Secret-Management-Lösungen.',
      color: 'green'
    },
    {
      title: 'Methoden',
      icon: <Search size={24} />,
      content: 'Die Arbeit umfasst eine detaillierte Analyse und einen Vergleich etablierter Secret-Management-Lösungen wie HashiCorp Vault, Mozilla SOPS und Cloud-spezifischer Dienste wie AWS KMS. Es werden deren Funktionsweisen, Sicherheitsmechanismen, Integrationsmöglichkeiten und Skalierbarkeit bewertet.',
      color: 'purple'
    },
    {
      title: 'Nutzen',
      icon: <TrendingUp size={24} />,
      content: 'Die Ergebnisse bieten einen klaren Fahrplan für die Implementierung eines sicheren Secret Managements mit erhöhter Sicherheit, verbesserter Skalierbarkeit, Compliance-Unterstützung und optimierten Entwicklungs- und Betriebsprozessen.',
      color: 'orange'
    }
  ];

  const technologies = [
    { name: 'HashiCorp Vault', icon: <Lock size={20} />, description: 'Zentrale Secret-Verwaltung' },
    { name: 'Mozilla SOPS', icon: <Key size={20} />, description: 'Verschlüsselung von Konfigurationsdateien' },
    { name: 'AWS KMS', icon: <Shield size={20} />, description: 'Cloud-basiertes Key Management' },
    { name: 'Microservices', icon: <Database size={20} />, description: 'Serviceorientierte Architektur' }
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600'
  };

  return (
    <section id="thesis" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Masterarbeit
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              "Integration von Secret-Management-Lösungen in die serviceorientierte Softwarearchitektur der Birato-Produktfamilie"
            </h3>
            <p className="text-lg text-gray-600">
              Eine umfassende Forschungsarbeit zur sicheren Verwaltung von Secrets in modernen Microservices-Architekturen
            </p>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {thesisAspects.map((aspect, index) => (
            <motion.div
              key={aspect.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${colorClasses[aspect.color]} p-6 text-white`}>
                <div className="flex items-center gap-3">
                  {aspect.icon}
                  <h3 className="text-xl font-semibold">{aspect.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">{aspect.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">
            Untersuchte Technologien
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 hover:from-blue-50 hover:to-green-50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {tech.icon}
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{tech.name}</h4>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-8 text-white"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Erwartete Vorteile</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Erhöhte Sicherheit', desc: 'Schutz sensibler Daten vor unautorisiertem Zugriff' },
              { title: 'Verbesserte Skalierbarkeit', desc: 'Flexible und automatisierte Bereitstellung' },
              { title: 'Compliance', desc: 'Einhaltung von Sicherheitsstandards und Datenschutz' },
              { title: 'Effizienz', desc: 'Optimierte Entwicklungs- und Betriebsprozesse' }
            ].map((benefit, index) => (
              <div key={benefit.title} className="text-center">
                <h4 className="font-semibold mb-2">{benefit.title}</h4>
                <p className="text-sm opacity-90">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Thesis;


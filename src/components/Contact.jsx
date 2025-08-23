import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, GitlabIcon, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'E-Mail',
      value: '123bastianlontsi@gmail.com',
      href: 'mailto:123bastianlontsi@gmail.com',
      color: 'blue'
    },
    {
      icon: <Phone size={24} />,
      label: 'Telefon',
      value: '+49 176 17468821',
      href: 'tel:+4917617468821',
      color: 'green'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'bastian-lontsi-46462b161',
      href: 'https://www.linkedin.com/in/bastian-lontsi-46462b161/',
      color: 'blue'
    },
    {
      icon: <GitlabIcon size={24} />,
      label: 'GitLab',
      value: 'codingnight',
      href: 'https://gitlab.com/codingnight',
      color: 'orange'
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'bastianNebra',
      href: 'https://github.com/bastianNebra/',
      color: 'gray'
    }
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
    green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
    orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
    gray: 'from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900'
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Kontakt
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Für Anfragen, Kooperationen oder weitere Informationen können Sie mich gerne über die folgenden Kanäle erreichen
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : '_self'}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100"
              >
                <div className={`bg-gradient-to-r ${colorClasses[contact.color]} p-6 text-white transition-all duration-300`}>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      {contact.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{contact.label}</h3>
                      <p className="text-sm opacity-90 break-all">{contact.value}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                  <p className="text-sm text-gray-600 text-center">
                    Klicken zum {contact.label === 'E-Mail' ? 'Schreiben' : contact.label === 'Telefon' ? 'Anrufen' : 'Öffnen'}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPin size={32} className="text-blue-600" />
              <h3 className="text-2xl font-semibold text-gray-800">Standort</h3>
            </div>
            <p className="text-lg text-gray-700 mb-2">Hochschule Kaiserslautern</p>
            <p className="text-gray-600">Deutschland</p>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">Lassen Sie uns zusammenarbeiten!</h3>
              <p className="text-lg opacity-90 mb-6">
                Ich freue mich auf Ihre Kontaktaufnahme und den Austausch über spannende Projekte und 
                Herausforderungen im Bereich Cloud, DevSecOps und Softwarearchitekturen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:123bastianlontsi@gmail.com"
                  className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
                >
                  E-Mail schreiben
                </a>
                <a
                  href="https://www.linkedin.com/in/bastian-lontsi-46462b161/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  LinkedIn besuchen
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


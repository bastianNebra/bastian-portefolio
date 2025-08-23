import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Zap } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Über mich
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            {...fadeInUp}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Bastian Kemka Lontsi ist ein engagierter Masterstudent an der Hochschule Kaiserslautern, 
              der sich auf die zukunftsweisenden Bereiche Cloud Computing, DevSecOps und moderne 
              Softwarearchitekturen spezialisiert hat. Mit einer tief verwurzelten Leidenschaft für 
              die Schaffung sicherer und skalierbarer Systeme strebt Bastian danach, ein anerkannter 
              Experte für Cloud-Sicherheit, DevSecOps-Praktiken und serviceorientierte Backend-Architekturen 
              zu werden.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Seine Motivation speist sich aus dem Bestreben, innovative Lösungen zu entwickeln, die 
              nicht nur technologisch fortschrittlich, sondern auch robust und sicher sind, insbesondere 
              im Hinblick auf das kritische Thema des Secret Managements in Microservices-Umgebungen. 
              Bastians akademischer Hintergrund, kombiniert mit seiner praktischen Erfahrung, ermöglicht 
              es ihm, komplexe Herausforderungen in der modernen Softwareentwicklung zu meistern und einen 
              signifikanten Beitrag zur digitalen Transformation zu leisten.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              {...fadeInUp}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-800">Ziel</h3>
              <p className="text-gray-700">
                Experte für Cloud-Sicherheit, DevSecOps und serviceorientierte Backend-Architekturen
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-800">Leidenschaft</h3>
              <p className="text-gray-700">
                Sichere, skalierbare Systeme und Secret Management in Microservices
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-800">Motivation</h3>
              <p className="text-gray-700">
                Innovative, technologisch fortschrittliche und robuste Lösungen entwickeln
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import React from 'react';
import { ChevronDown, MapPin, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                Bastian Kemka Lontsi
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-2 text-gray-600">
                <GraduationCap size={20} />
                <span className="text-lg">Masterstudent</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={20} />
                <span className="text-lg">Hochschule Kaiserslautern</span>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Spezialisiert auf <span className="text-blue-600 font-semibold">Cloud Computing</span>, 
              <span className="text-green-600 font-semibold"> DevSecOps</span> und 
              <span className="text-purple-600 font-semibold"> moderne Softwarearchitekturen</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Leidenschaft für sichere, skalierbare Systeme und Secret Management in Microservices
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Mehr erfahren
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-gray-400 hover:text-gray-600 transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;


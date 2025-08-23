import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-4">
              BKL
            </div>
            <p className="text-gray-400 leading-relaxed">
              Bastian Kemka Lontsi - Masterstudent mit Fokus auf Cloud, DevSecOps und moderne Softwarearchitekturen
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { href: '#about', label: 'Über mich' },
                { href: '#skills', label: 'Skills' },
                { href: '#projects', label: 'Projekte' },
                { href: '#thesis', label: 'Masterarbeit' },
                { href: '#contact', label: 'Kontakt' }
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block w-full text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Specializations */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">Spezialisierungen</h3>
            <div className="space-y-2 text-gray-400">
              <p>Cloud Computing</p>
              <p>DevSecOps</p>
              <p>Secret Management</p>
              <p>Microservices</p>
              <p>Infrastructure as Code</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Bastian Kemka Lontsi. Alle Rechte vorbehalten.
            </div>

            {/* Made with love */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Erstellt mit</span>
              <Heart size={16} className="text-red-500" />
              <span>und</span>
              <Code size={16} className="text-blue-400" />
              <span>und</span>
              <Coffee size={16} className="text-yellow-600" />
            </div>
          </div>
        </div>

        {/* Back to top button */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Nach oben
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


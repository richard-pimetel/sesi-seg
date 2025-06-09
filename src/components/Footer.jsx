import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = ({ scrollToSection }) => {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Sobre o Projeto' },
    { id: 'systems', label: 'Nossos Sistemas' },
    { id: 'developers', label: 'Equipe' }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/sesispmunicipal", label: "Facebook SESI" },
    { icon: Instagram, href: "https://instagram.com/sesisenaisp_oficial", label: "Instagram SESI" },
    { icon: Youtube, href: "https://youtube.com/user/SESISP", label: "Youtube SESI" },
    { icon: Linkedin, href: "https://linkedin.com/company/sesi-sp", label: "LinkedIn SESI" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300 py-20 border-t-8 border-[#E31837] shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/884d6230-512b-4341-8463-f357d4f441a9/a307d908a57a3c493b5ae82e16423436.png" 
                alt="Logo SESI Branca" 
                className="h-16 drop-shadow-lg" 
              />
              <div>
                <span className="text-3xl font-extrabold text-white block tracking-tight">SESI Carapicuíba</span>
                <span className="text-md text-red-400 font-medium">Segurança e Telecomunicação</span>
              </div>
            </div>
            <p className="leading-relaxed mb-6 text-gray-400 text-lg">
              Transformando a educação com inovação, segurança e tecnologia de ponta para um futuro brilhante e conectado.
            </p>
            {/* Contact info removed as requested */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-semibold text-white mb-6 block border-b-2 border-red-500 pb-2 inline-block">Navegação Rápida</span>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-red-400 hover:translate-x-1 transition-all duration-300 text-lg group flex items-center"
                  >
                     <span className="w-2 h-2 bg-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-semibold text-white mb-6 block border-b-2 border-red-500 pb-2 inline-block">Siga-nos</span>
            <div className="flex space-x-5">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-400 transition-colors duration-300 transform hover:scale-125 hover:-translate-y-1"
                  whileHover={{ y: -4, scale:1.2 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-8 w-8" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 pt-10 text-center">
          <p className="text-gray-400 text-md">
            © {new Date().getFullYear()} SESI Carapicuíba - Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-500 mt-3">
            Uma iniciativa do Departamento Regional de São Paulo. Orgulhosamente construindo o futuro.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
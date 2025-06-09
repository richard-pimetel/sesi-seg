
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDownCircle, ShieldCheck, Wifi, Users } from 'lucide-react';

const HomeSection = ({ scrollToSection }) => {
  const heroFeatures = [
    { icon: ShieldCheck, text: "Segurança Avançada" },
    { icon: Wifi, text: "Conectividade Total" },
    { icon: Users, text: "Comunidade Integrada" },
  ];

  return (
    <section id="home" className="pt-24 md:pt-28 min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <img  
          className="absolute inset-0 w-full h-full object-cover opacity-30" 
          alt="Campus SESI Carapicuíba com arquitetura moderna e espaços abertos, transmitindo um ambiente educacional inovador."
          src="https://storage.googleapis.com/hostinger-horizons-assets-prod/884d6230-512b-4341-8463-f357d4f441a9/5086f7684c48ca492a62fb50f8ba4233.png" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent opacity-50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} /* Power ease-out */
          className="space-y-8 md:space-y-10"
        >
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter drop-shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
          >
            <span className="bg-gradient-to-r from-red-500 via-[#E31837] to-red-600 text-transparent bg-clip-text">
              SESI Carapicuíba
            </span>
          </motion.h1>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Inovação em Segurança e Telecomunicação Educacional
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            Elevando o padrão educacional com tecnologia de ponta, garantindo um ambiente <strong className="text-red-400 font-semibold">protegido</strong>, <strong className="text-red-400 font-semibold">conectado</strong> e <strong className="text-red-400 font-semibold">inspirador</strong> para todos.
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-6 md:gap-8 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9, staggerChildren: 0.2 }}
          >
            {heroFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-3 bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 shadow-lg"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="h-7 w-7 text-red-400" />
                <span className="text-gray-200 font-medium text-lg">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity:0, y: 30 }}
            animate={{ opacity:1, y: 0 }}
            transition={{ duration:0.7, delay: 1.2 }}
          >
            <Button 
              size="xl" 
              className="button-primary-glow text-lg font-semibold py-4 px-12 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out group mt-8"
              onClick={() => scrollToSection('about')}
            >
              Explore Nossas Soluções
              <ArrowDownCircle className="ml-3 h-6 w-6 group-hover:translate-y-0.5 transition-transform duration-300" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div 
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('about')}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        whileHover={{ scale: 1.15, color: '#E31837' }}
      >
        <ArrowDownCircle className="h-12 w-12 text-red-500/70 hover:text-red-500 transition-colors" />
      </motion.div>
    </section>
  );
};

export default HomeSection;

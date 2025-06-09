
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Wifi, Users2, Zap } from 'lucide-react';

const pillars = [
  {
    icon: ShieldCheck,
    title: "Segurança de Ponta",
    description: "Monitoramento 24/7, controle de acesso inteligente e resposta rápida para um ambiente protegido."
  },
  {
    icon: Wifi,
    title: "Conectividade Total",
    description: "Wi-Fi ultrarrápido em todo o campus, assegurando aprendizado e colaboração sem barreiras."
  },
  {
    icon: Users2,
    title: "Comunidade Fortalecida",
    description: "Plataformas de comunicação integradas que aproximam alunos, pais e educadores."
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="sesi-section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-20"
        >
          <span className="text-lg font-semibold text-[#E31837] uppercase tracking-wider mb-2 block">Nossa Missão</span>
          <h2 className="section-title">Sobre o Projeto SESI Conectado</h2>
          <p className="section-subtitle mt-4">
            Nosso compromisso é revolucionar a experiência educacional, integrando tecnologias de segurança e comunicação de última geração para criar um ambiente escolar inspirador, seguro e altamente conectado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="sesi-card p-8 text-center bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl hover:shadow-red-200/60 transition-all duration-400 transform hover:-translate-y-2 group"
            >
              <div className="mb-6 inline-block p-5 bg-gradient-to-tr from-red-500 to-red-700 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                <pillar.icon className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-800 group-hover:text-[#E31837] transition-colors duration-300">{pillar.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y:30 }}
          whileInView={{ opacity: 1, y:0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Zap className="h-16 w-16 text-[#E31837] mx-auto mb-4 opacity-80" />
          <p className="text-2xl font-semibold text-gray-700 max-w-2xl mx-auto">
            Inovação contínua para um ambiente de aprendizado <strong className="text-[#E31837]">dinâmico</strong> e <strong className="text-[#E31837]">inspirador</strong>.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;

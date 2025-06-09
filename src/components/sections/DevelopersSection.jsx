
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Network, Palette, UserCircle2 } from 'lucide-react';

const developersData = [
  { name: "Mohammed Salim", role: "Desenvolvedor Full Stack", icon: Briefcase },
  { name: "Kauan de Assis", role: "Especialista em Segurança", icon: Users },
  { name: "Richard Pimentel", role: "Engenheiro de Redes", icon: Network },
  { name: "Gustavo Zumba", role: "Designer UX/UI", icon: Palette }
];

const DeveloperCard = ({ name, role, icon: Icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }} // Cubic bezier for smoother animation
      viewport={{ once: true, amount: 0.3 }}
      className="sesi-dev-card p-8 text-center bg-white rounded-2xl shadow-lg hover:shadow-red-400/40 transition-all duration-400 transform hover:-translate-y-2 flex flex-col items-center group"
    >
      <div className="relative mb-6 p-4 bg-gradient-to-br from-red-500 to-red-700 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-12 w-12 text-white" />
      </div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-1 group-hover:text-[#E31837] transition-colors duration-300">{name}</h3>
      <p className="text-red-600 font-medium text-md">{role}</p>
    </motion.div>
  );
};

const DevelopersSection = () => {
  return (
    <section id="developers" className="py-28 bg-gradient-to-b from-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-[#E31837] tracking-tight">Nossa Equipe de Especialistas</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Profissionais dedicados que transformam ideias em realidade, combinando expertise técnica e paixão por inovação para o SESI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {developersData.map((developer, index) => (
            <DeveloperCard key={index} {...developer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopersSection;

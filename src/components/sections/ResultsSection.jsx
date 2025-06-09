import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Users, Shield } from 'lucide-react';

const resultsData = [
  { number: "50", label: "Câmeras Instaladas", icon: Camera },
  { number: "1000+", label: "Usuários Protegidos", icon: Users },
  { number: "100%", label: "Cobertura do Campus", icon: Shield }
];

const ResultsSection = () => {
  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#E31837]">Resultados</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {resultsData.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="sesi-card p-8 text-center"
            >
              <result.icon className="h-12 w-12 text-[#E31837] mx-auto mb-4" />
              <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                {result.number}
              </div>
              <p className="text-gray-600 text-lg">{result.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;

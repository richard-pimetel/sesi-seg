
import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Lock, Wifi, RadioTower, Siren, CheckCircle, ShieldAlert } from 'lucide-react';

const systemsData = [
  {
    icon: Camera,
    title: "Câmeras IA Avançadas",
    description: "Monitoramento HD 4K, visão noturna colorida, IA para detecção e análise, com armazenamento seguro em nuvem.",
    features: ["Resolução 4K Ultra HD", "Análise comportamental por IA", "Reconhecimento facial integrado", "Acesso remoto criptografado"]
  },
  {
    icon: Lock,
    title: "Controle de Acesso Inteligente",
    description: "Biometria multimodal, cartões RFID de última geração e registros detalhados para máxima segurança.",
    features: ["Biometria (digital e facial)", "Cartões inteligentes Mifare DESFire", "Gestão de visitantes integrada", "Auditoria de acesso completa"]
  },
  {
    icon: Wifi,
    title: "Wi-Fi 6E Ultra Performance",
    description: "Cobertura total com Wi-Fi 6E, segurança WPA3 Enterprise e gerenciamento de tráfego otimizado por IA.",
    features: ["Tecnologia Wi-Fi 6E", "Segurança WPA3 Enterprise", "Segmentação de rede dinâmica", "Qualidade de Serviço (QoS) por IA"]
  },
  {
    icon: RadioTower,
    title: "Comunicação Unificada",
    description: "Rádios digitais DMR, PTT over Cellular (PoC) e integração com sistema de telefonia IP.",
    features: ["Rádios DMR Tier III", "App PoC para smartphones", "Interoperabilidade total", "Gravação de chamadas segura"]
  },
  {
    icon: ShieldAlert, /* Changed icon for better representation */
    title: "Sistema de Alerta Integrado",
    description: "Sensores IoT avançados, alertas preditivos, notificações multicanal e integração com autoridades.",
    features: ["Sensores ambientais e de pânico", "Alertas baseados em IA", "App de emergência para comunidade", "Protocolos de resposta rápida"]
  }
];

const SystemsSection = () => {
  return (
    <section id="systems" className="sesi-section bg-gradient-to-br from-red-50 via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-20"
        >
          <span className="text-lg font-semibold text-[#E31837] uppercase tracking-wider mb-2 block">Nossas Soluções</span>
          <h2 className="section-title">Tecnologia de Ponta para o SESI</h2>
          <p className="section-subtitle mt-4">
            Explore os sistemas avançados que implementamos para assegurar um ambiente educacional protegido, conectado e eficiente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {systemsData.map((system, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, filter: 'blur(3px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="sesi-card p-8 bg-white rounded-2xl shadow-xl hover:shadow-red-300/50 transition-all duration-400 flex flex-col group"
            >
              <div className="flex items-center mb-6">
                <div className="p-4 bg-gradient-to-br from-red-500 to-red-700 rounded-xl shadow-md mr-5 group-hover:scale-105 transition-transform duration-300">
                  <system.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-[#E31837] transition-colors duration-300">{system.title}</h3>
              </div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed flex-grow">{system.description}</p>
              <ul className="space-y-3 mt-auto">
                {system.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-md text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemsSection;

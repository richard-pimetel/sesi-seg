import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const chatResponses = {
  default: "Olá! Como posso ajudar com questões sobre segurança, conectividade e comunicação?",
  seguranca: "Nossos sistemas de segurança incluem monitoramento 24/7 com câmeras HD, controle de acesso biométrico e facial, e alarmes inteligentes. Para mais detalhes, visite a seção 'Nossos Sistemas'.",
  wifi: "Oferecemos Wi-Fi de alta velocidade com cobertura total em todo o campus, utilizando a tecnologia WPA3 para máxima segurança. Ideal para estudos, pesquisas e comunicação.",
  suporte: "Para suporte técnico, entre em contato com nossa equipe através do e-mail suporte.ti@sesicarapicuiba.edu.br ou visite a secretaria. Estamos prontos para ajudar!",
};

const ChatWidget = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: 'bot', text: chatResponses.default }]);
  const [inputValue, setInputValue] = useState('');

  const handleQuickReply = (topic) => {
    const userMessage = { sender: 'user', text: topic };
    const botResponse = { sender: 'bot', text: chatResponses[topic.toLowerCase()] || chatResponses.default };
    setMessages([...messages, userMessage, botResponse]);
    toast({
      title: `Informações sobre ${topic}`,
      description: "Veja a resposta no chat.",
    });
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    const userMessage = { sender: 'user', text: inputValue };
    
    let botResponseText = "Obrigado pela sua mensagem. Um de nossos atendentes responderá em breve.";
    if (inputValue.toLowerCase().includes('segurança')) {
      botResponseText = chatResponses.seguranca;
    } else if (inputValue.toLowerCase().includes('wifi') || inputValue.toLowerCase().includes('wi-fi')) {
      botResponseText = chatResponses.wifi;
    } else if (inputValue.toLowerCase().includes('suporte')) {
      botResponseText = chatResponses.suporte;
    }

    const botResponse = { sender: 'bot', text: botResponseText };
    setMessages([...messages, userMessage, botResponse]);
    setInputValue('');
    toast({
      title: "Mensagem enviada!",
      description: "Veja a resposta no chat.",
    });
  };

  return (
    <>
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 w-80 h-[28rem] bg-white rounded-2xl shadow-xl z-50 flex flex-col border-t-4 border-[#E31837]"
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <span className="font-semibold text-gray-800">Suporte SESI</span>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`p-3 rounded-lg max-w-[80%] text-sm ${
                    msg.sender === 'bot' ? 'bg-[#E31837] text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
               {messages.length === 1 && (
                 <div className="flex space-x-2 mt-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-xs border-[#E31837] text-[#E31837] hover:bg-[#E31837] hover:text-white"
                      onClick={() => handleQuickReply('Seguranca')}
                    >
                      Segurança
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-xs border-[#E31837] text-[#E31837] hover:bg-[#E31837] hover:text-white"
                      onClick={() => handleQuickReply('Wifi')}
                    >
                      Wi-Fi
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-xs border-[#E31837] text-[#E31837] hover:bg-[#E31837] hover:text-white"
                      onClick={() => handleQuickReply('Suporte')}
                    >
                      Suporte
                    </Button>
                  </div>
               )}
            </div>
            <div className="p-4 border-t border-gray-100">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Digite sua mensagem..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 bg-gray-50 text-gray-800 px-3 py-2 rounded-lg text-sm border border-gray-200 focus:ring-1 focus:ring-[#E31837] focus:border-[#E31837]"
                />
                <Button 
                  size="sm" 
                  className="bg-[#E31837] hover:bg-[#c41530] text-white"
                  onClick={handleSendMessage}
                >
                  Enviar
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#E31837] rounded-full flex items-center justify-center shadow-lg z-50 hover:bg-[#c41530] transition-colors"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </motion.button>
    </>
  );
};

export default ChatWidget;

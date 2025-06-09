import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = ({ showScrollTop, scrollToTop }) => {
  return (
    <AnimatePresence>
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 w-12 h-12 bg-[#E31837] hover:bg-[#c41530] rounded-full flex items-center justify-center shadow-lg z-50 transition-colors"
        >
          <ChevronUp className="h-6 w-6 text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;

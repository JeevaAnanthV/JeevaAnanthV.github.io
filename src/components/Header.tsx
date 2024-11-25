import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-lg border-b border-gold-500/10"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            Jeeva Ananth V
          </motion.h1>
          <div className="flex gap-6">
            <motion.a
              href="https://github.com/JeevaAnanthV"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-gold-400 hover:text-gold-300"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/JeevaAnanthV"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-gold-400 hover:text-gold-300"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:jeevaananthv@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-gold-400 hover:text-gold-300"
            >
              <Mail size={24} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
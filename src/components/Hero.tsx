import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Database, Cloud } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Computer Vision & ML Engineer
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Transforming complex problems into innovative solutions through AI, 
            Machine Learning, and Computer Vision
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { icon: Code2, text: "Machine Learning" },
              { icon: Brain, text: "Computer Vision" },
              { icon: Database, text: "Data Engineering" },
              { icon: Cloud, text: "Cloud Solutions" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="card p-6 rounded-xl text-center"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex justify-center mb-4">
                  <item.icon className="w-8 h-8 text-gold-400" />
                </div>
                <h3 className="text-sm font-medium text-gold-300">{item.text}</h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
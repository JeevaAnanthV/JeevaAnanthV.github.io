import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "Computer Vision Engineer Intern",
    company: "Count AI",
    period: "Jul 2024 – Present",
    location: "Coimbatore, Tamil Nadu",
    achievements: [
      "Spearheaded development of data pipelines, boosting efficiency by 30%",
      "Enhanced computer vision algorithms, improving detection accuracy by 15%",
      "Optimized anomaly detection and image segmentation algorithms",
      "Refined depth sensing technologies, elevating precision by 25%"
    ]
  },
  {
    title: "Research Associate",
    company: "Terv Pro, Top Freshers",
    period: "Feb 2024 – Jun 2024",
    location: "Chennai, Tamil Nadu",
    achievements: [
      "Led interactive class sessions, improving retention by 25%",
      "Developed curriculum materials and assessment tools",
      "Provided mentoring, improving student performance by 20%"
    ]
  },
  {
    title: "Machine Learning Intern",
    company: "Pantech E-Learning",
    period: "Jun 2023 – Aug 2023",
    location: "Chennai, Tamil Nadu",
    achievements: [
      "Engineered ML models, boosting platform performance by 20%",
      "Optimized data preprocessing, reducing error rates by 15%",
      "Deployed new features enhancing user experience"
    ]
  }
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 bg-dark-100">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-12 gradient-text text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-12 card p-8 rounded-xl relative"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute -left-3 top-8">
                <Briefcase className="w-6 h-6 text-gold-400" />
              </div>
              
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-gold-300">{exp.title}</h3>
                <p className="text-gray-400 mb-2">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-4">{exp.period} | {exp.location}</p>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="text-gold-400 mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
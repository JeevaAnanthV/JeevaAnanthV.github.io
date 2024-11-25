import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "JavaScript", "TypeScript"]
  },
  {
    title: "Machine Learning & AI",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face"]
  },
  {
    title: "Computer Vision",
    skills: ["OpenCV", "Image Segmentation", "Object Detection", "Depth Sensing"]
  },
  {
    title: "Web Development",
    skills: ["Flask", "FastAPI", "REST APIs", "Docker"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "CI/CD", "Git"]
  },
  {
    title: "Databases",
    skills: ["MILVUS", "Pinecone DB", "SQL", "NoSQL"]
  }
];

export default function Skills() {
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
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="card p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gold-300">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm bg-dark-200 text-gold-400 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
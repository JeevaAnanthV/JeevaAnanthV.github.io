import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Brain, Database, Search } from 'lucide-react';
import ProjectDialog from './ProjectDialog';

const projects = [
  {
    title: "Inquiro – Multimodal Chatbot System",
    icon: Bot,
    tech: "Python, LangChain, Chroma, GoogleGenerativeAIEmbeddings, PyTesseract, SpeechRecognition, Streamlit",
    description: "Advanced chatbot system integrating LLMs with various data sources for contextually accurate responses.",
    fullDescription: [
      "Developed an advanced chatbot system that seamlessly integrates Large Language Models with multiple data sources including PDFs, scraped websites, and videos.",
      "Implemented sophisticated natural language processing techniques to ensure contextually accurate and relevant responses."
    ],
    features: [
      "Multi-modal input processing (text, speech, images)",
      "Context-aware response generation",
      "Real-time speech recognition and processing",
      "PDF and document analysis capabilities",
      "Efficient vector-based information retrieval"
    ],
    implementation: [
      "Utilized LangChain for building complex conversational flows",
      "Implemented RAG architecture for enhanced response accuracy",
      "Integrated Chroma vector database for efficient similarity searches",
      "Developed custom data preprocessing pipelines for multiple input formats",
      "Created an intuitive Streamlit interface for easy interaction"
    ]
  },
  {
    title: "Personalized Medical Advice Chatbot",
    icon: Brain,
    tech: "Python, Scrapy, Pinecone DB, MILVUS, Docker, Flask, FastAPI",
    description: "AI-powered medical advice chatbot utilizing RAG techniques and vector databases.",
    fullDescription: [
      "Engineered a sophisticated chatbot system providing personalized medical advice using state-of-the-art language models.",
      "Created a comprehensive medical knowledge base through web scraping and data processing."
    ],
    features: [
      "Personalized medical advice generation",
      "Secure data handling and privacy protection",
      "Real-time response generation",
      "Multi-source medical data integration",
      "Scalable architecture using Docker"
    ],
    implementation: [
      "Developed custom Scrapy spiders for medical data collection",
      "Implemented vector similarity search using Pinecone DB and MILVUS",
      "Created RESTful APIs using Flask and FastAPI",
      "Containerized the application using Docker for easy deployment",
      "Implemented robust error handling and validation"
    ]
  },
  {
    title: "Web Crawling and Q&A System",
    icon: Search,
    tech: "Python, Scrapy, MILVUS, BERT, BM25, Faiss, REST API",
    description: "Intelligent web crawler and Q&A system for NVIDIA CUDA Documentation.",
    fullDescription: [
      "Built a comprehensive web crawling and question-answering system specifically for NVIDIA CUDA documentation.",
      "Implemented advanced natural language processing techniques for accurate information retrieval."
    ],
    features: [
      "Intelligent web crawling capabilities",
      "Advanced text chunking and processing",
      "Hybrid search implementation",
      "Vector-based similarity matching",
      "RESTful API integration"
    ],
    implementation: [
      "Created custom crawlers using Scrapy framework",
      "Implemented BERT-based embedding generation",
      "Developed hybrid search combining BM25 and vector similarity",
      "Optimized data storage using MILVUS vector database",
      "Built scalable REST API endpoints"
    ]
  },
  {
    title: "Cogito - Mental Health AI Chatbot",
    icon: Database,
    tech: "Python, NLP, Hugging Face Transformers, PyTorch, REST API",
    description: "AI-powered mental health support chatbot handling 500+ daily interactions.",
    fullDescription: [
      "Developed an empathetic AI chatbot focused on providing mental health support and assistance.",
      "Implemented advanced natural language understanding for emotional context recognition."
    ],
    features: [
      "Empathetic response generation",
      "Emotion recognition and analysis",
      "Crisis detection and escalation",
      "Personalized conversation flows",
      "Integration with professional resources"
    ],
    implementation: [
      "Utilized Hugging Face Transformers for NLP tasks",
      "Implemented custom PyTorch models for emotion detection",
      "Created robust conversation management system",
      "Developed secure API endpoints for integration",
      "Implemented comprehensive logging and monitoring"
    ]
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openProjectDialog = (project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  return (
    <section ref={ref} className="py-20" id="projects">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-12 gradient-text text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card p-8 rounded-xl cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => openProjectDialog(project)}
            >
              <div className="flex items-center mb-4">
                <project.icon className="w-8 h-8 text-gold-400 mr-3" />
                <h3 className="text-xl font-semibold text-gold-300">{project.title}</h3>
              </div>
              <p className="text-sm text-gold-400 mb-4">{project.tech}</p>
              <p className="text-gray-300">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectDialog
          isOpen={isDialogOpen}
          closeModal={() => setIsDialogOpen(false)}
          project={selectedProject}
        />
      )}
    </section>
  );
}
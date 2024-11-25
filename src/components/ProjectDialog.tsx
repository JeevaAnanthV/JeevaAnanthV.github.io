import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectDetails {
  title: string;
  description: string;
  tech: string;
  fullDescription: string[];
  features: string[];
  implementation: string[];
}

interface ProjectDialogProps {
  isOpen: boolean;
  closeModal: () => void;
  project: ProjectDetails;
}

export default function ProjectDialog({ isOpen, closeModal, project }: ProjectDialogProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-dark-100 p-6 text-left align-middle shadow-xl transition-all border border-gold-500/20">
                <Dialog.Title as="div" className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold gradient-text">{project.title}</h3>
                  <button
                    onClick={closeModal}
                    className="text-gold-400 hover:text-gold-300 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </Dialog.Title>

                <div className="mt-4">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gold-300 mb-2">Technologies</h4>
                    <p className="text-gray-300">{project.tech}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gold-300 mb-2">Overview</h4>
                    {project.fullDescription.map((desc, index) => (
                      <p key={index} className="text-gray-300 mb-2">{desc}</p>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gold-300 mb-2">Key Features</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="text-gray-300">{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gold-300 mb-2">Implementation Details</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {project.implementation.map((detail, index) => (
                        <li key={index} className="text-gray-300">{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <motion.div 
                  className="mt-6 flex justify-end"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-gold-500 bg-dark px-4 py-2 text-sm font-medium text-gold-400 hover:bg-gold-500/10 transition-colors"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </motion.div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Car Sales Management System',
      shortDesc: 'Web-based car sales and booking platform',
      description:
        'A comprehensive web-based system for browsing car listings, placing orders, and managing bookings with role-based access control.',
      features: [
        'Multi-role authentication (Admin, User, Employee)',
        'Car listing and browsing system',
        'Booking and order management',
        'Customer management dashboard',
        'Notification system',
      ],
      tech: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
      color: 'from-blue-500 to-cyan-500',
      image: '🚗',
    },
    {
      id: 2,
      title: 'Pixel Lock Social Media Privacy',
      shortDesc: 'Privacy-focused social media application',
      description:
        'A full-stack privacy-focused social media application with secure messaging and controlled photo sharing capabilities.',
      features: [
        'Secure user authentication',
        'Private messaging system',
        'Controlled image sharing',
        'Privacy-first approach',
        'Android mobile app integration',
      ],
      tech: ['Python', 'Django', 'MySQL', 'JavaScript', 'Android Studio'],
      color: 'from-purple-500 to-pink-500',
      image: '🔒',
    },
    {
      id: 3,
      title: 'Learning Management System (LMS)',
      shortDesc: 'Institutional learning platform',
      description:
        'A comprehensive web-based platform for managing institutional learning resources with role-based access and secure content delivery.',
      features: [
        'Role-based authentication system',
        'Admin panel for account management',
        'Teacher module for content management',
        'Student portal for resource access',
        'File upload/download system',
        'Institutional content restriction',
      ],
      tech: ['Python', 'Django', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
      color: 'from-green-500 to-emerald-500',
      image: '📚',
    },
    {
      id: 4,
      title: 'Travel Management System (TMS)',
      shortDesc: 'Comprehensive travel booking platform',
      description:
        'A feature-rich travel management system for booking trips, managing itineraries, and coordinating travel arrangements.',
      features: [
        'Trip planning and booking',
        'Destination management',
        'Itinerary planning',
        'Booking history tracking',
        'Travel cost management',
      ],
      tech: ['Python', 'Django', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
      color: 'from-orange-500 to-red-500',
      image: '✈️',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover="hover"
                className="group h-full"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                >
                  {/* Card Image/Icon Area */}
                  <div
                    className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-7xl relative overflow-hidden`}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0 opacity-20"
                    >
                      <div className="absolute inset-0 bg-grid-pattern" />
                    </motion.div>
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.2 }}
                      className="relative z-10"
                    >
                      {project.image}
                    </motion.div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {project.shortDesc}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProject(project)}
                      className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-lg transition-all"
                    >
                      View Details
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal - Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div
                className={`h-40 bg-gradient-to-br ${selectedProject.color} flex items-end justify-between p-6 relative`}
              >
                <div className="flex items-center gap-4 relative z-10">
                  <div className="text-6xl">{selectedProject.image}</div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">
                      {selectedProject.title}
                    </h2>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
                >
                  <X size={24} className="text-white" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8 space-y-6">
                {/* Description */}
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">
                    Overview
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-bold mb-3 text-gray-800 dark:text-white">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                      >
                        <span className="text-blue-500 font-bold mt-1">✓</span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-lg font-bold mb-3 text-gray-800 dark:text-white">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-lg transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

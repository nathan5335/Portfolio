import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, BookOpen } from 'lucide-react';

const Education = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Mangalam College of Engineering',
      university: 'KTU (Kerala Technological University)',
      period: '2025 – 2027',
      status: 'pursuing',
      icon: GraduationCap,
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'BVM Holy Cross College',
      university: 'MG University (Mahatma Gandhi University)',
      period: '2022 – 2025',
      status: 'completed',
      icon: BookOpen,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="education" className="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
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
                Education
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 origin-top"
            />

            {/* Education Items */}
            <div className="space-y-12">
              {educationData.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative pl-24"
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{
                        delay: 0.3 + index * 0.2,
                        type: 'spring',
                        stiffness: 200,
                      }}
                      className="absolute left-0 flex items-center justify-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>

                    {/* Content Card */}
                    <motion.div
                      whileHover={{ x: 10 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                            {item.degree}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 font-medium">
                            {item.institution}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {item.university}
                          </p>
                        </div>
                        <motion.span
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className={`px-4 py-2 rounded-full text-sm font-semibold ${
                            item.status === 'pursuing'
                              ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                              : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                          }`}
                        >
                          {item.status === 'pursuing' ? '📚 Pursuing' : '✓ Completed'}
                        </motion.span>
                      </div>

                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-semibold">{item.period}</span>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Achievements */}
          <motion.div
            variants={itemVariants}
            className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              🎯 Achievements & Focus Areas
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                <span>Strong foundation in computer science fundamentals and algorithms</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                <span>Specialized in web and full-stack application development</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                <span>Hands-on experience with modern frameworks and technologies</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                <span>Passionate about problem-solving and continuous learning</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

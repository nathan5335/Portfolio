import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', level: 65 },
        { name: 'Java', level: 60 },
        { name: 'JavaScript', level: 65 },
        { name: 'PHP', level: 60 },
        { name: 'C', level: 55 },
      ],
    },
    {
      category: 'Web Technologies',
      skills: [
        { name: 'HTML5', level: 70 },
        { name: 'CSS3', level: 68 },
        { name: 'React', level: 65 },
        { name: 'Bootstrap', level: 68 },
        { name: 'Tailwind CSS', level: 65 },
      ],
    },
    {
      category: 'Backend & Databases',
      skills: [
        { name: 'Django', level: 65 },
        { name: 'MySQL', level: 65 },
        { name: 'REST APIs', level: 62 },
        { name: 'Database Design', level: 60 },
      ],
    },
    {
      category: 'Tools & Concepts',
      skills: [
        { name: 'Git & GitHub', level: 65 },
        { name: 'VS Code', level: 70 },
        { name: 'OOP', level: 64 },
        { name: 'DBMS', level: 62 },
        { name: 'Linux', level: 60 },
      ],
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
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
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
                Skills & Expertise
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, catIdx) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold mb-8 text-gray-800 dark:text-white">
                  {category.category}
                </h3>

                <div className="space-y-6">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{
                        delay: (catIdx * category.skills.length + idx) * 0.05,
                        duration: 0.5,
                      }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            delay: (catIdx * category.skills.length + idx) * 0.05 + 0.2,
                            duration: 1,
                            ease: 'easeOut',
                          }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300">
              💡 Always learning and exploring new technologies to stay updated with industry trends and best practices.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

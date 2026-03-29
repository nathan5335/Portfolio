import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image/Illustration */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl transform -rotate-6 opacity-20 blur-2xl" />
                <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl p-8 overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-grid-pattern" />
                  </div>
                  <div className="relative h-64 flex items-center justify-center">
                    <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      GV
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a <span className="font-semibold text-blue-600 dark:text-blue-400">motivated MCA student</span> at
                <span className="font-semibold"> Mangalam College of Engineering (KTU)</span> with a strong passion for
                software development and problem-solving.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                With solid experience in building <span className="font-semibold text-purple-600 dark:text-purple-400">full-stack applications</span> using
                Python, Django, and modern web technologies, I'm constantly exploring new technologies and best practices
                in software development.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, I enjoy solving complex problems, learning new frameworks, and contributing to
                open-source projects. I'm actively seeking an <span className="font-semibold">entry-level opportunity</span> to grow as a
                professional developer and make meaningful contributions to innovative projects.
              </p>

              <motion.div
                whileHover={{ x: 10 }}
                className="inline-block mt-8"
              >
                <button
                  onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-lg transition-all"
                >
                  Let's Connect
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

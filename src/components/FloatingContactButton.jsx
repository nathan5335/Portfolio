import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mail, Phone, Github, Linkedin, X } from 'lucide-react';

const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      id: 1,
      label: 'Email',
      icon: Mail,
      href: 'mailto:gauthamvinod9999@gmail.com',
      color: 'from-red-500 to-pink-500',
      delay: 0,
    },
    {
      id: 2,
      label: 'Phone',
      icon: Phone,
      href: 'tel:+917259810009',
      color: 'from-green-500 to-emerald-500',
      delay: 0.1,
    },
    {
      id: 3,
      label: 'GitHub',
      icon: Github,
      href: 'https://github.com/nathan5335',
      color: 'from-gray-600 to-gray-800',
      delay: 0.2,
    },
    {
      id: 4,
      label: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/gauthammm-vvinod/',
      color: 'from-blue-600 to-blue-800',
      delay: 0.3,
    },
  ];

  const containerVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
    exit: { opacity: 0 },
  };

  const itemVariants = {
    hidden: { scale: 0, y: 20 },
    visible: {
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
      },
    },
    exit: { scale: 0, y: 20 },
  };

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute bottom-20 right-0 space-y-4"
          >
            {contactOptions.map((option) => {
              const Icon = option.icon;
              return (
                <motion.a
                  key={option.id}
                  href={option.href}
                  target={option.href.startsWith('http') ? '_blank' : '_self'}
                  rel={option.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-3 px-4 py-3 bg-gradient-to-r ${option.color} text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow backdrop-blur-sm`}
                  title={option.label}
                >
                  <Icon size={20} />
                  <span className="text-sm font-medium whitespace-nowrap">{option.label}</span>
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
          isOpen
            ? 'bg-gradient-to-r from-red-500 to-pink-500'
            : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
        }`}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <MessageCircle size={24} className="text-white" />
          )}
        </motion.div>

        {/* Floating Animation Background */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 rounded-full bg-white opacity-10"
        />
      </motion.button>

      {/* Notification Badge */}
      {!isOpen && (
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"
        />
      )}
    </div>
  );
};

export default FloatingContactButton;

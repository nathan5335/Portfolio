import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', () => setIsVisible(true));

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', () => setIsVisible(true));
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      {isVisible && (
        <>
          {/* Outer circle */}
          <motion.div
            ref={cursorRef}
            animate={{
              x: mousePosition.x - 16,
              y: mousePosition.y - 16,
            }}
            transition={{
              type: 'spring',
              mass: 0.5,
              stiffness: 1500,
              damping: 80,
            }}
            className="fixed w-8 h-8 border-2 border-blue-500 rounded-full pointer-events-none z-[9999] mix-blend-screen"
          />

          {/* Inner dot */}
          <motion.div
            animate={{
              x: mousePosition.x - 4,
              y: mousePosition.y - 4,
            }}
            transition={{
              type: 'spring',
              mass: 0.1,
              stiffness: 2000,
              damping: 100,
            }}
            className="fixed w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full pointer-events-none z-[9999]"
          />

          {/* Glow effect */}
          <motion.div
            animate={{
              x: mousePosition.x - 24,
              y: mousePosition.y - 24,
            }}
            transition={{
              type: 'spring',
              mass: 1,
              stiffness: 800,
              damping: 50,
            }}
            className="fixed w-12 h-12 rounded-full pointer-events-none z-[9998] opacity-20"
            style={{
              background:
                'radial-gradient(circle, rgb(59, 130, 246) 0%, transparent 70%)',
              filter: 'blur(4px)',
            }}
          />
        </>
      )}
    </>
  );
};

export default CustomCursor;

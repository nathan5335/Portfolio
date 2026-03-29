import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Get visitor count from localStorage
    const count = localStorage.getItem('visitorCount');
    const currentCount = count ? parseInt(count) + 1 : 1;
    
    // Update localStorage
    localStorage.setItem('visitorCount', currentCount.toString());
    
    // Get last visit date
    const lastVisit = localStorage.getItem('lastVisitDate');
    const today = new Date().toDateString();
    
    // If it's a new day, increment daily visits
    if (lastVisit !== today) {
      const dailyCount = localStorage.getItem('dailyVisitorCount');
      const currentDailyCount = dailyCount ? parseInt(dailyCount) + 1 : 1;
      localStorage.setItem('dailyVisitorCount', currentDailyCount.toString());
      localStorage.setItem('lastVisitDate', today);
    }
    
    setVisitorCount(currentCount);
    setIsLoaded(true);
  }, []);

  const formatCount = (count) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M';
    }
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K';
    }
    return count.toString();
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed bottom-8 left-8 z-30"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 flex items-center space-x-2 border border-gray-200 dark:border-gray-700"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Eye size={18} className="text-blue-500" />
        </motion.div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
            Visitors
          </span>
          <motion.span
            key={visitorCount}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-sm font-bold text-blue-600 dark:text-blue-400"
          >
            {formatCount(visitorCount)}
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default VisitorCounter;

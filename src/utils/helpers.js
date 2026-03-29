// Utility functions for the portfolio

/**
 * Smooth scroll to element
 * @param {string} elementId - The ID of the element to scroll to
 */
export const smoothScrollTo = (elementId) => {
  const element = document.querySelector(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

/**
 * Format date to readable string
 * @param {Date|string} date - The date to format
 * @returns {string} - Formatted date string
 */
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Validate email address
 * @param {string} email - The email to validate
 * @returns {boolean} - Whether the email is valid
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate form fields
 * @param {Object} formData - The form data to validate
 * @returns {Object} - Error messages for invalid fields
 */
export const validateForm = (formData) => {
  const errors = {};

  if (!formData.name?.trim()) {
    errors.name = 'Name is required';
  }

  if (!formData.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email';
  }

  if (!formData.subject?.trim()) {
    errors.subject = 'Subject is required';
  }

  if (!formData.message?.trim()) {
    errors.message = 'Message is required';
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return errors;
};

/**
 * Copy text to clipboard
 * @param {string} text - The text to copy
 * @returns {Promise<boolean>} - Success status
 */
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Failed to copy:', error);
    return false;
  }
};

/**
 * Download file from URL
 * @param {string} url - The URL of the file
 * @param {string} fileName - The name of the downloaded file
 */
export const downloadFile = (url, fileName) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Generate random color
 * @returns {string} - Random hex color
 */
export const getRandomColor = () => {
  const colors = ['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#F87171'];
  return colors[Math.floor(Math.random() * colors.length)];
};

/**
 * Debounce function
 * @param {Function} func - The function to debounce
 * @param {number} wait - The debounce delay in ms
 * @returns {Function} - Debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function
 * @param {Function} func - The function to throttle
 * @param {number} limit - The throttle limit in ms
 * @returns {Function} - Throttled function
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Get initials from name
 * @param {string} name - The full name
 * @returns {string} - The initials
 */
export const getInitials = (name) => {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase();
};

/**
 * Check if device is dark mode
 * @returns {boolean} - Whether dark mode is enabled
 */
export const isDarkMode = () => {
  return (
    localStorage.getItem('theme-mode') === 'dark' ||
    (!localStorage.getItem('theme-mode') &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
};

/**
 * Format numbers with commas
 * @param {number} number - The number to format
 * @returns {string} - Formatted number string
 */
export const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Truncate text
 * @param {string} text - The text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} - Truncated text with ellipsis
 */
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

/**
 * Get experience years from start date
 * @param {string|Date} startDate - The start date
 * @returns {string} - Years of experience
 */
export const getExperienceYears = (startDate) => {
  const years = new Date().getFullYear() - new Date(startDate).getFullYear();
  return years > 0 ? `${years}+ years` : 'Less than 1 year';
};

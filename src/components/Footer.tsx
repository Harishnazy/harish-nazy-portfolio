import React from 'react';
import { Github, Linkedin, Twitter, Mail, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-light-200 dark:bg-dark-500 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <motion.button
            onClick={scrollToTop}
            className="p-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors duration-300"
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        </div>
        
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            Harish Nazy
          </h3>
          
          <p className="text-dark-400 dark:text-light-300 mb-6 text-center max-w-md">
            Full Stack Developer & UI/UX Designer creating beautiful digital experiences.
          </p>
          
          <div className="flex gap-4 mb-8">
            <motion.a
              href="https://github.com/harishnazy"
              className="w-10 h-10 rounded-full bg-light-300 dark:bg-dark-400 flex items-center justify-center text-dark-500 dark:text-light-100 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors duration-300"
              whileHover={{ y: -3 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/harishnazy/"
              className="w-10 h-10 rounded-full bg-light-300 dark:bg-dark-400 flex items-center justify-center text-dark-500 dark:text-light-100 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors duration-300"
              whileHover={{ y: -3 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="https://twitter.com/harishnazy"
              className="w-10 h-10 rounded-full bg-light-300 dark:bg-dark-400 flex items-center justify-center text-dark-500 dark:text-light-100 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors duration-300"
              whileHover={{ y: -3 }}
            >
              <Twitter size={20} />
            </motion.a>
            <motion.a
              href="mailto:harish2400@gmail.com"
              className="w-10 h-10 rounded-full bg-light-300 dark:bg-dark-400 flex items-center justify-center text-dark-500 dark:text-light-100 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors duration-300"
              whileHover={{ y: -3 }}
            >
              <Mail size={20} />
            </motion.a>
          </div>
          
          <div className="w-full border-t border-light-400 dark:border-dark-400 pt-6">
            <p className="text-center text-dark-400 dark:text-light-300 text-sm">
              © {currentYear} Harish Nazy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
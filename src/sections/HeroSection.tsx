import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Button from '../components/Button';

const HeroSection: React.FC = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.2,
      },
    },
  };

  const socialItemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-4 py-16">
      <div className="container mx-auto max-w-5xl z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium"
            variants={itemVariants}
          >
            Hello, I'm a Developer & Designer
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500"
            variants={itemVariants}
          >
            Building digital experiences with passion
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-dark-400 dark:text-light-200 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            I craft elegant solutions to complex problems. Full stack developer 
            and UI/UX designer creating beautiful, functional, and user-centered 
            digital experiences.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={itemVariants}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact Me
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const projectsSection = document.querySelector('#projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Projects
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center gap-4"
            variants={socialVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="https://github.com/harishnazy"
              className="w-10 h-10 rounded-full bg-light-200 dark:bg-dark-400 flex items-center justify-center text-dark-500 dark:text-light-100 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors duration-300"
              variants={socialItemVariants}
              whileHover={{ y: -3 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/harishnazy/"
              className="w-10 h-10 rounded-full bg-light-200 dark:bg-dark-400 flex items-center justify-center text-dark-500 dark:text-light-100 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors duration-300"
              variants={socialItemVariants}
              whileHover={{ y: -3 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="https://twitter.com/harishnazy"
              className="w-10 h-10 rounded-full bg-light-200 dark:bg-dark-400 flex items-center justify-center text-dark-500 dark:text-light-100 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors duration-300"
              variants={socialItemVariants}
              whileHover={{ y: -3 }}
            >
              <Twitter size={20} />
            </motion.a>
            <motion.a
              href="mailto:harish2400@gmail.com"
              className="w-10 h-10 rounded-full bg-light-200 dark:bg-dark-400 flex items-center justify-center text-dark-500 dark:text-light-100 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors duration-300"
              variants={socialItemVariants}
              whileHover={{ y: -3 }}
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={scrollToNextSection}
      >
        <ChevronDown className="w-8 h-8 text-primary-500" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
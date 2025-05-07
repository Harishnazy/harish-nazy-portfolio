import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Coffee, Briefcase } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutSection: React.FC = () => {
  const [ref, controls] = useScrollAnimation();
  
  const statItems = [
    {
      icon: <Award className="w-8 h-8 text-primary-500" />,
      value: '1+',
      label: 'Years Experience',
    },
    {
      icon: <Heart className="w-8 h-8 text-error-500" />,
      value: '5+',
      label: 'Projects Completed',
    },
    {
      icon: <Coffee className="w-8 h-8 text-warning-500" />,
      value: '50+',
      label: 'Cups of Coffee',
    },
    {
      icon: <Briefcase className="w-8 h-8 text-success-500" />,
      value: '5+',
      label: 'Happy Clients',
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };
  
  return (
    <section id="about" className="py-20 bg-light-200 dark:bg-dark-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="About Me"
          subtitle="Learn more about me, my background, and what motivates me."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Harish Nazy"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute -right-6 -bottom-6 w-48 h-48 bg-primary-500/20 dark:bg-primary-500/10 rounded-lg z-0"></div>
            <div className="absolute -left-6 -top-6 w-48 h-48 bg-secondary-500/20 dark:bg-secondary-500/10 rounded-lg z-0"></div>
          </motion.div>
          
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold mb-4 text-dark-500 dark:text-light-100"
            >
              Full Stack Developer & UI/UX Designer
            </motion.h3>
            
            <motion.p
              variants={itemVariants}
              className="text-dark-400 dark:text-light-300 mb-6"
            >
              Hello! I'm Harish, a passionate and creative Full Stack Developer and UI/UX Designer based in India. I enjoy turning complex problems into simple, beautiful, and intuitive designs.
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              className="text-dark-400 dark:text-light-300 mb-6"
            >
              As a fresh graduate with a strong foundation in both frontend and backend technologies, I bring a unique blend of technical expertise and creative design thinking to every project I work on. I'm constantly learning and exploring new technologies to stay at the cutting edge of web development.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8"
            >
              {statItems.map((item, index) => (
                <div
                  key={index}
                  className="text-center bg-light-100 dark:bg-dark-400 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex justify-center mb-2">{item.icon}</div>
                  <h4 className="text-2xl font-bold text-dark-500 dark:text-light-100">{item.value}</h4>
                  <p className="text-sm text-dark-400 dark:text-light-300">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
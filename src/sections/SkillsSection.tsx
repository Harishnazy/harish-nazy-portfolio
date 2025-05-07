import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import SkillBar from '../components/SkillBar';
import { Code, Palette, Database, Layers } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const frontendSkills = [
    { name: 'HTML/CSS', percentage: 90, color: 'bg-primary-500' },
    { name: 'JavaScript/TypeScript', percentage: 85, color: 'bg-primary-600' },
    { name: 'React', percentage: 80, color: 'bg-primary-700' },
    { name: 'Tailwind CSS', percentage: 90, color: 'bg-primary-800' },
  ];
  
  const backendSkills = [
    { name: 'Node.js', percentage: 80, color: 'bg-secondary-500' },
    { name: 'python', percentage: 75, color: 'bg-secondary-600' },
    { name: 'MongoDB', percentage: 70, color: 'bg-secondary-700' },
    { name: 'SQL', percentage: 65, color: 'bg-secondary-800' },
  ];
  
  const designSkills = [
    { name: 'UI Design', percentage: 85, color: 'bg-accent-500' },
    { name: 'UX Research', percentage: 75, color: 'bg-accent-600' },
    { name: 'Figma', percentage: 90, color: 'bg-accent-700' },
    { name: 'Responsive Design', percentage: 95, color: 'bg-accent-800' },
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
  
  const categoryVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };
  
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="My Skills"
          subtitle="I've developed expertise across various technologies and design disciplines."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <motion.div
            className="bg-light-100 dark:bg-dark-500 p-6 rounded-xl shadow-lg h-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center gap-3 mb-6"
              variants={categoryVariants}
            >
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                <Code className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold text-dark-500 dark:text-light-100">Frontend</h3>
            </motion.div>
            
            {frontendSkills.map((skill, index) => (
              <motion.div 
                key={index}
                variants={categoryVariants}
              >
                <SkillBar 
                  name={skill.name} 
                  percentage={skill.percentage} 
                  color={skill.color} 
                />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            className="bg-light-100 dark:bg-dark-500 p-6 rounded-xl shadow-lg h-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center gap-3 mb-6"
              variants={categoryVariants}
            >
              <div className="p-3 bg-secondary-100 dark:bg-secondary-900/30 rounded-full">
                <Database className="w-6 h-6 text-secondary-500" />
              </div>
              <h3 className="text-xl font-bold text-dark-500 dark:text-light-100">Backend</h3>
            </motion.div>
            
            {backendSkills.map((skill, index) => (
              <motion.div 
                key={index}
                variants={categoryVariants}
              >
                <SkillBar 
                  name={skill.name} 
                  percentage={skill.percentage} 
                  color={skill.color} 
                />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            className="bg-light-100 dark:bg-dark-500 p-6 rounded-xl shadow-lg h-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center gap-3 mb-6"
              variants={categoryVariants}
            >
              <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-full">
                <Palette className="w-6 h-6 text-accent-500" />
              </div>
              <h3 className="text-xl font-bold text-dark-500 dark:text-light-100">Design</h3>
            </motion.div>
            
            {designSkills.map((skill, index) => (
              <motion.div 
                key={index}
                variants={categoryVariants}
              >
                <SkillBar 
                  name={skill.name} 
                  percentage={skill.percentage} 
                  color={skill.color} 
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <motion.div
          className="mt-16 bg-light-100 dark:bg-dark-500 p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="p-4 bg-secondary-100 dark:bg-secondary-900/30 rounded-full">
              <Layers className="w-12 h-12 text-secondary-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-dark-500 dark:text-light-100">Full Stack Development</h3>
              <p className="text-dark-400 dark:text-light-300">
                My experience with both frontend and backend technologies allows me to build complete, end-to-end solutions.
                From responsive interfaces to scalable APIs and databases, I can handle the full development lifecycle.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
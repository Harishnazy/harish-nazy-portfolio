import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Button from './Button';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  repoUrl,
}) => {
  return (
    <motion.div
      className="bg-light-100 dark:bg-dark-500 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative overflow-hidden group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-dark-500 dark:text-light-100">{title}</h3>
        
        <p className="text-dark-400 dark:text-light-300 mb-4 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 pt-2">
          {liveUrl && (
            <Button 
              variant="primary" 
              size="sm" 
              icon={<ExternalLink size={16} />}
              as="a" 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Live Demo
            </Button>
          )}
          
          {repoUrl && (
            <Button 
              variant="outline" 
              size="sm" 
              icon={<Github size={16} />}
              as="a" 
              href={repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Code
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
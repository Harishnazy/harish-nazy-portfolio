import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';

type ProjectCategory = 'all' | 'web' | 'mobile' | 'ui';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: ProjectCategory[];
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive admin dashboard for managing an e-commerce platform with real-time analytics.',
      image: 'https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: ['web', 'ui'],
      tags: ['React', 'Node.js', 'Tailwind CSS', 'MongoDB'],
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity app for organizing tasks with drag-and-drop functionality and team collaboration.',
      image: 'https://images.pexels.com/photos/8391641/pexels-photo-8391641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: ['web', 'mobile'],
      tags: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      id: 3,
      title: 'Travel Blog UI Design',
      description: 'A modern UI design for a travel blog focusing on visual storytelling and user engagement.',
      image: 'https://i.pinimg.com/736x/75/9b/d3/759bd317b0300161688e4731ae94a4bc.jpg',
      category: ['ui'],
      tags: ['Figma', 'UI Design', 'Wireframing', 'Prototyping'],
      liveUrl: '#',
    },
    {
      id: 4,
      title: 'Weather Forecast App',
      description: 'A beautiful weather app with a 7-day forecast, location-based updates, and animated visualizations.',
      image: 'https://images.pexels.com/photos/1526713/pexels-photo-1526713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: ['mobile'],
      tags: ['React Native', 'API Integration', 'Geolocation', 'UI Animation'],
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with dark/light theme and smooth animations for a digital artist.',
      image: 'https://images.pexels.com/photos/268362/pexels-photo-268362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: ['web', 'ui'],
      tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Responsive Design'],
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      id: 6,
      title: 'Recipe Finder App',
      description: 'A mobile app for discovering recipes based on available ingredients, dietary preferences, and cooking time.',
      image: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: ['mobile', 'ui'],
      tags: ['React Native', 'Firebase', 'API Integration', 'UI/UX Design'],
      liveUrl: '#',
      repoUrl: '#',
    },
  ];
  
  const filteredProjects = projects.filter(
    (project) => activeCategory === 'all' || project.category.includes(activeCategory)
  );
  
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ui', label: 'UI/UX Design' },
  ];
  
  return (
    <section id="projects" className="py-20 bg-light-200 dark:bg-dark-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="My Projects"
          subtitle="A showcase of my recent work across various technologies and design categories."
        />
        
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as ProjectCategory)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'bg-light-100 dark:bg-dark-400 text-dark-500 dark:text-light-100 hover:bg-light-300 dark:hover:bg-dark-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  liveUrl={project.liveUrl}
                  repoUrl={project.repoUrl}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
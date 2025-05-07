import React from 'react';
import { motion } from 'framer-motion';
import { Mail, PhoneCall, MapPin, Clock } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ContactForm from '../components/ContactForm';

const ContactSection: React.FC = () => {
  const contactItems = [
    {
      icon: <Mail className="w-6 h-6 text-primary-500" />,
      title: 'Email',
      value: 'harish2400@gmail.com',
      link: 'mailto:harish2400@gmail.com',
    },
    {
      icon: <PhoneCall className="w-6 h-6 text-secondary-500" />,
      title: 'Phone',
      value: '+91 6379004238',
      link: 'tel:+916379004238',
    },
    {
      icon: <MapPin className="w-6 h-6 text-error-500" />,
      title: 'Location',
      value: 'Tamil Nadu, India',
      link: null,
    },
    {
      icon: <Clock className="w-6 h-6 text-success-500" />,
      title: 'Working Hours',
      value: 'Mon - Fri, 9AM - 5PM',
      link: null,
    },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };
  
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Get In Touch"
          subtitle="Let's discuss your project or job opportunity. I'm always open to new ideas and collaborations."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-dark-500 dark:text-light-100">Contact Information</h3>
              <p className="text-dark-400 dark:text-light-300 mb-6">
                I'd love to hear from you! Whether you have a project in mind, a job opportunity, 
                or just want to say hello, feel free to reach out using any of the methods below.
              </p>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4 bg-light-100 dark:bg-dark-500 p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-medium text-dark-500 dark:text-light-100">{item.title}</h4>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-dark-400 dark:text-light-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-dark-400 dark:text-light-300">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div className="bg-light-100 dark:bg-dark-500 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-dark-500 dark:text-light-100">Send Me a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
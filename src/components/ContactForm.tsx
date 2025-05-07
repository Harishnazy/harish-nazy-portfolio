import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };
  
  const inputClasses = "w-full p-3 bg-light-200 dark:bg-dark-400 rounded-md border border-light-400 dark:border-dark-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300";
  
  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };
  
  return (
    <motion.form
      className="w-full max-w-lg mx-auto"
      onSubmit={handleSubmit}
      variants={formVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-success-50 dark:bg-success-900/20 text-success-700 dark:text-success-300 p-4 rounded-md flex items-center gap-3 mb-6"
        >
          <CheckCircle className="flex-shrink-0" />
          <p>Your message has been sent successfully! I'll get back to you soon.</p>
        </motion.div>
      ) : null}
      
      <motion.div className="mb-4" variants={itemVariants}>
        <label htmlFor="name" className="block mb-2 text-dark-500 dark:text-light-100 font-medium">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={inputClasses}
          placeholder="Harish Nazy"
          required
          value={formState.name}
          onChange={handleChange}
        />
      </motion.div>
      
      <motion.div className="mb-4" variants={itemVariants}>
        <label htmlFor="email" className="block mb-2 text-dark-500 dark:text-light-100 font-medium">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={inputClasses}
          placeholder="nazy@example.com"
          required
          value={formState.email}
          onChange={handleChange}
        />
      </motion.div>
      
      <motion.div className="mb-4" variants={itemVariants}>
        <label htmlFor="subject" className="block mb-2 text-dark-500 dark:text-light-100 font-medium">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className={inputClasses}
          placeholder="Project inquiry"
          required
          value={formState.subject}
          onChange={handleChange}
        />
      </motion.div>
      
      <motion.div className="mb-6" variants={itemVariants}>
        <label htmlFor="message" className="block mb-2 text-dark-500 dark:text-light-100 font-medium">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={inputClasses}
          placeholder="Hello, I'd like to talk about..."
          required
          value={formState.message}
          onChange={handleChange}
        />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <Button
          type="submit"
          variant="primary"
          fullWidth
          disabled={isSubmitting}
          icon={isSubmitting ? undefined : <Send size={16} />}
          className="relative"
        >
          {isSubmitting ? (
            <motion.div
              className="w-6 h-6 border-4 border-t-transparent border-white rounded-full animate-spin mx-auto"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          ) : (
            "Send Message"
          )}
        </Button>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;
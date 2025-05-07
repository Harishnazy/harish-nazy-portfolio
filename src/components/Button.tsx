import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  children,
  className = '',
  ...props
}) => {
  const getVariantClasses = (): string => {
    switch (variant) {
      case 'primary':
        return 'bg-primary-500 hover:bg-primary-600 text-white shadow-md';
      case 'secondary':
        return 'bg-secondary-500 hover:bg-secondary-600 text-white shadow-md';
      case 'outline':
        return 'bg-transparent border-2 border-primary-500 text-primary-500 dark:text-primary-400 hover:bg-primary-500/10';
      case 'ghost':
        return 'bg-transparent hover:bg-primary-500/10 text-primary-500 dark:text-primary-400';
      default:
        return 'bg-primary-500 hover:bg-primary-600 text-white shadow-md';
    }
  };

  const getSizeClasses = (): string => {
    switch (size) {
      case 'sm':
        return 'text-sm px-3 py-1.5';
      case 'md':
        return 'text-base px-5 py-2.5';
      case 'lg':
        return 'text-lg px-6 py-3';
      default:
        return 'text-base px-5 py-2.5';
    }
  };

  return (
    <motion.button
      className={`
        rounded-md font-medium transition-all duration-300 relative overflow-hidden
        ${getVariantClasses()}
        ${getSizeClasses()}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {icon && iconPosition === 'left' && icon}
        {children}
        {icon && iconPosition === 'right' && icon}
      </span>
      <motion.span
        className="absolute inset-0 bg-white/20 z-0"
        initial={{ y: '100%' }}
        whileHover={{ y: 0 }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
      />
    </motion.button>
  );
};

export default Button;
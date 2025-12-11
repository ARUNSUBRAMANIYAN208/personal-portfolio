import { motion } from 'framer-motion';
import { ButtonProps } from '../types';

const Button = ({
    children,
    variant = 'primary',
    onClick,
    href,
    download = false,
    className = '',
    icon
}: ButtonProps) => {
    const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 justify-center';

    const variants = {
        primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl hover:scale-105',
        secondary: 'bg-accent-600 hover:bg-accent-700 text-white shadow-lg hover:shadow-xl hover:scale-105',
        outline: 'border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white dark:border-primary-400 dark:hover:bg-primary-600',
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <motion.a
                href={href}
                download={download}
                className={combinedClassName}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {icon && <span>{icon}</span>}
                {children}
            </motion.a>
        );
    }

    return (
        <motion.button
            onClick={onClick}
            className={combinedClassName}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {icon && <span>{icon}</span>}
            {children}
        </motion.button>
    );
};

export default Button;

import { motion } from 'framer-motion';
import { SectionTitleProps } from '../types';

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
    return (
        <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
            <motion.div
                className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mt-6 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            />
        </motion.div>
    );
};

export default SectionTitle;

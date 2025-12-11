import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: <FiGithub />, url: 'https://github.com/arunsubramaniyan', label: 'GitHub' },
        { icon: <FiLinkedin />, url: 'https://linkedin.com/in/arunsubramaniyan', label: 'LinkedIn' },
        { icon: <FiMail />, url: 'mailto:arun@example.com', label: 'Email' },
    ];

    return (
        <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Copyright */}
                    <motion.div
                        className="text-center md:text-left"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-slate-400">
                            © {currentYear} <span className="font-semibold text-white">Arunkumar Subramaniyan</span>. All rights reserved.
                        </p>
                        <p className="text-sm text-slate-500 mt-1">
                            Built with React, TypeScript & Tailwind CSS
                        </p>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        className="flex gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-slate-800 hover:bg-primary-600 rounded-lg transition-colors"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={link.label}
                            >
                                <div className="text-xl">{link.icon}</div>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Back to Top */}
                    <motion.button
                        onClick={scrollToTop}
                        className="p-3 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        aria-label="Back to top"
                    >
                        <FiArrowUp className="text-xl" />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

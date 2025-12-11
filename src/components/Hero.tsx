import { motion } from 'framer-motion';
import { FiDownload, FiMail } from 'react-icons/fi';
import Button from './Button';

const Hero = () => {
    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <span className="text-slate-900 dark:text-white">Hi, I'm </span>
                            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                                Arunkumar
                            </span>
                        </motion.h1>

                        <motion.h2
                            className="text-2xl md:text-3xl font-semibold mb-4 text-slate-700 dark:text-slate-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Frontend Developer – React.js / Next.js / TypeScript
                        </motion.h2>

                        <motion.p
                            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            Building clean, scalable, and interactive web applications.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            <Button
                                variant="primary"
                                href="/resume.pdf"
                                download
                                icon={<FiDownload />}
                            >
                                Download Resume
                            </Button>
                            <Button
                                variant="outline"
                                onClick={scrollToContact}
                                icon={<FiMail />}
                            >
                                Contact Me
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="relative w-full max-w-md mx-auto">
                            {/* Animated background gradient */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-3xl opacity-30"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 180, 360],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />

                            {/* Profile placeholder */}
                            <div className="relative w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center shadow-2xl">
                                <div className="w-72 h-72 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-8xl font-bold text-primary-600 dark:text-primary-400">
                                    AK
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

import { motion } from 'framer-motion';
import { FiCode, FiZap, FiHeart } from 'react-icons/fi';
import SectionTitle from './SectionTitle';

const About = () => {
    const highlights = [
        {
            icon: <FiCode />,
            title: 'Clean Code',
            description: 'Writing maintainable and scalable code following best practices',
        },
        {
            icon: <FiZap />,
            title: 'Performance',
            description: 'Optimizing applications for speed and efficiency',
        },
        {
            icon: <FiHeart />,
            title: 'User Experience',
            description: 'Creating intuitive and delightful user interfaces',
        },
    ];

    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <SectionTitle
                    title="About Me"
                    subtitle="Passionate about creating exceptional web experiences"
                />

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Bio Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4"
                    >
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                            I'm a passionate <span className="font-semibold text-primary-600 dark:text-primary-400">Frontend Developer</span> specializing in building modern web applications with React.js, Next.js, and TypeScript. With a strong foundation in both frontend and backend technologies, I create full-stack solutions that are not only visually appealing but also robust and scalable.
                        </p>

                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                            My journey in web development has equipped me with expertise in creating responsive, user-friendly interfaces and implementing complex business logic. I'm constantly learning and adapting to new technologies to deliver the best solutions for every project.
                        </p>

                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                            When I'm not coding, I enjoy exploring new web technologies, contributing to open-source projects, and sharing knowledge with the developer community.
                        </p>
                    </motion.div>

                    {/* Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        {highlights.map((highlight, index) => (
                            <motion.div
                                key={index}
                                className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="text-4xl text-primary-600 dark:text-primary-400">
                                    {highlight.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                                        {highlight.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-300">
                                        {highlight.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

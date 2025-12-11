import { motion } from 'framer-motion';
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiRedux,
    SiNodedotjs,
    SiExpress,
    SiPrisma,
    SiMysql,
    SiGit,
    SiPostman,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import SectionTitle from './SectionTitle';
import { skills, skillCategories } from '../data/skills';

const iconMap: { [key: string]: any } = {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiRedux,
    SiNodedotjs,
    SiExpress,
    SiPrisma,
    SiMysql,
    SiGit,
    VscCode,
    SiPostman,
};

const Skills = () => {
    const categories = ['frontend', 'backend', 'tools'] as const;

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <SectionTitle
                    title="Skills & Technologies"
                    subtitle="Technologies I work with to build amazing web applications"
                />

                <div className="grid md:grid-cols-3 gap-8">
                    {categories.map((category, categoryIndex) => (
                        <motion.div
                            key={category}
                            className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white text-center">
                                {skillCategories[category]}
                            </h3>

                            <div className="space-y-4">
                                {skills
                                    .filter((skill) => skill.category === category)
                                    .map((skill, index) => {
                                        const Icon = iconMap[skill.icon];
                                        return (
                                            <motion.div
                                                key={skill.name}
                                                className="flex items-center gap-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-700/50 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors group"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                                whileHover={{ scale: 1.05, x: 10 }}
                                            >
                                                <div className="text-3xl text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
                                                    {Icon && <Icon />}
                                                </div>
                                                <span className="font-medium text-slate-700 dark:text-slate-300">
                                                    {skill.name}
                                                </span>
                                            </motion.div>
                                        );
                                    })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

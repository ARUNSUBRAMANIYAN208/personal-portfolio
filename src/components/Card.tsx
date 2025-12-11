import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { CardProps } from '../types';
import Button from './Button';

const Card = ({ project }: CardProps) => {
    return (
        <motion.div
            className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            whileHover={{ y: -10, scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-500 to-accent-500">
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl opacity-20">
                    <FiExternalLink />
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
            </div>

            {/* Project Content */}
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                    <Button
                        variant="outline"
                        href={project.githubUrl}
                        className="flex-1 text-sm"
                        icon={<FiGithub />}
                    >
                        GitHub
                    </Button>
                    <Button
                        variant="primary"
                        href={project.liveUrl}
                        className="flex-1 text-sm"
                        icon={<FiExternalLink />}
                    >
                        Live Demo
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

export default Card;

import { Skill } from '../types';

export const skills: Skill[] = [
    // Frontend
    { name: 'React.js', icon: 'SiReact', category: 'frontend' },
    { name: 'Next.js', icon: 'SiNextdotjs', category: 'frontend' },
    { name: 'TypeScript', icon: 'SiTypescript', category: 'frontend' },
    { name: 'JavaScript (ES6+)', icon: 'SiJavascript', category: 'frontend' },
    { name: 'Tailwind CSS', icon: 'SiTailwindcss', category: 'frontend' },
    { name: 'Redux Toolkit', icon: 'SiRedux', category: 'frontend' },

    // Backend
    { name: 'Node.js', icon: 'SiNodedotjs', category: 'backend' },
    { name: 'Express.js', icon: 'SiExpress', category: 'backend' },
    { name: 'Prisma ORM', icon: 'SiPrisma', category: 'backend' },
    { name: 'MySQL', icon: 'SiMysql', category: 'backend' },

    // Tools
    { name: 'Git', icon: 'SiGit', category: 'tools' },
    { name: 'VS Code', icon: 'VscCode', category: 'tools' },
    { name: 'Postman', icon: 'SiPostman', category: 'tools' },
];

export const skillCategories = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    tools: 'Tools & Technologies',
};

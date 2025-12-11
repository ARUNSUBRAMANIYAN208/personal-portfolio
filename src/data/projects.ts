import { Project } from '../types';

export const projects: Project[] = [
    {
        id: 1,
        title: 'Yaachtly',
        description: 'A comprehensive yacht booking platform with real-time availability, booking management, and payment integration. Features include advanced search filters, interactive yacht galleries, and user dashboard.',
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Prisma ORM'],
        image: '/projects/yaachtly.jpg',
        githubUrl: 'https://github.com/arunsubramaniyan',
        liveUrl: 'https://yaachtly-demo.vercel.app',
    },
    {
        id: 2,
        title: 'Trading Application',
        description: 'Enterprise-level trading platform for Alliance Bank featuring real-time market data, portfolio management, trade execution, and comprehensive analytics dashboard with advanced charting capabilities.',
        techStack: ['React.js', 'Tailwind CSS', 'Redux', 'Chart.js', 'WebSocket'],
        image: '/projects/trading-app.jpg',
        githubUrl: 'https://github.com/arunsubramaniyan',
        liveUrl: 'https://trading-app-demo.vercel.app',
    },
    {
        id: 3,
        title: 'Personal Portfolio',
        description: 'Modern, responsive portfolio website showcasing projects, skills, and professional experience. Built with cutting-edge technologies and featuring smooth animations, dark mode, and optimized performance.',
        techStack: ['Next.js', 'React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
        image: '/projects/portfolio.jpg',
        githubUrl: 'https://github.com/arunsubramaniyan',
        liveUrl: 'https://arunsubramaniyan.dev',
    },
];

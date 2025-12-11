export interface Project {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    image: string;
    githubUrl: string;
    liveUrl: string;
}

export interface Skill {
    name: string;
    icon: string;
    category: 'frontend' | 'backend' | 'tools';
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    onClick?: () => void;
    href?: string;
    download?: boolean;
    className?: string;
    icon?: React.ReactNode;
}

export interface CardProps {
    project: Project;
}

export interface SectionTitleProps {
    title: string;
    subtitle?: string;
}

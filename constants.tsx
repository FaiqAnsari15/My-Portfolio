
import { Project, BlogPost } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Linux E-Commerce Store',
    description: 'A complete e-commerce platform where users can browse products, add them to the cart, and place orders with 24/7 service and home delivery within 1–2 days.',
    image: 'https://cms.weframetech.com/assets/05c9d477-fa81-4752-88d2-5ba2dce18959.png?width=1897&height=889',
    link: 'https://github.com/FaiqAnsari15/CodeAlpha_Lumina_Ecommerce',
    tags: ['E-commerce', 'React', 'Linux']
  }
];

export const SKILLS: string[] = [
  'Web Development',
  'Application Development',
  'Frontend Development',
  'Backend Development',
  'Full Stack Development',
  'Software Development',
  'Prompt Engineering',
  'AI Development'
];

export const BLOGS: BlogPost[] = [
  {
    id: '1',
    title: 'Full Stack Development: Trends 2024',
    excerpt: 'Deep dive into modern web technologies including Next.js 14 and advanced state management.',
    date: 'Jan 24, 2024',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Harnessing Agentic AI',
    excerpt: 'How to build autonomous agents that solve real-world problems using modern LLM frameworks.',
    date: 'Feb 12, 2024',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Clean Architecture in JavaScript',
    excerpt: 'Best practices for organizing code in large-scale React and Node.js applications.',
    date: 'Mar 05, 2024',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop'
  }
];

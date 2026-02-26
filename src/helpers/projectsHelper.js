import indieverse from "../assets/project/indieverse.png"
import huntRoyale from "../assets/project/hunt_royale.png"
import planner from "../assets/project/planner.png"

export const projects = [
  {
    id: 1,
    title: 'Gaming Platform',
    description: 'A full-stack gaming platform inspired by Steam with user accounts, game management, downloads, and reviews.',
    technologies: ['Java', 'Node.js', 'PostgreSQL', 'Spring Boot', 'Spring MVC', 'JWT', 'Maven', 'React.js'],
    image: indieverse,
    link: 'https://github.com/Juirs/eindopdracht-frontend',
    tags: ['Full Stack', 'Authentication', 'Database']
  },
  {
    id: 2,
    title: 'Build Simulator Website for Hunt Royale',
    description: 'A Simulator tool for theory-crafting builds in the mobile game Hunt Royale.',
    technologies: ['JavaScript', 'Node.js', 'CSS', 'HTML', 'Spring MVC', 'Maven'],
    image: huntRoyale,
    link: '#',
    tags: ['Frontend']
  },
  {
    id: 3,
    title: 'In-Depth Upgrade Planner for Hunt Royale',
    description: 'Designed a web-based planner to calculate and visualize upgrade paths for ingame progress',
    technologies: ['JavaScript', 'Node.js', 'CSS', 'HTML', 'Spring MVC', 'Maven'],
    image: planner,
    link: '#',
    tags: ['Frontend']
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    description: 'Dashboard for tracking social media metrics and engagement with real-time data visualization.',
    technologies: ['React', 'D3.js', 'Express', 'PostgreSQL'],
    image: null,
    link: '#',
    tags: ['Frontend', 'Data Visualization', 'Backend']
  }
];

export const getProjectById = (id) => {
  return projects.find(project => project.id === parseInt(id));
};

export const getAllProjects = () => {
  return projects;
};
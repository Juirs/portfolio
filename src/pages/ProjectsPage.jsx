import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { getAllProjects } from '../helpers/projectsHelper';

const ProjectsPage = () => {
  const projects = getAllProjects();

  return (
    <div className="bg-linear-to-r from-gray-900 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-amber-400 mb-6 py-12">My Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
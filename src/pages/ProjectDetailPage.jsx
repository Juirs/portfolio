import React from 'react';
import { useParams } from 'react-router-dom';
import { getProjectById } from '../helpers/projectsHelper';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = getProjectById(id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-100 mb-4">Project Not Found</h1>
          <p className="text-gray-300 mb-6">The project you're looking for doesn't exist.</p>
          <a href="/projects" className="text-amber-400 hover:text-amber-300 transition-colors">
            ← Back to Projects
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="container mx-auto max-w-8xl">
        <button
          onClick={() => window.history.back()}
          className="mb-6 text-amber-400 hover:text-amber-300 transition-colors"
        >
          ← Back to Projects
        </button>

        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
          <div className="bg-gray-700 h-128 flex items-center justify-center">
            <span className="w-full h-full bg-cover bg-center">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover"></img>
            </span>
          </div>

          <div className="p-8">
            <div className="flex flex-wrap items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-gray-100">{project.title}</h1>
            </div>

            <p className="text-gray-300 mb-6 text-lg">{project.description}</p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-md text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-md text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end items-center">
              <a
                href={project.link}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-md transition-colors"
              >
                View Project on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
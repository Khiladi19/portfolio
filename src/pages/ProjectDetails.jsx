import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/projects.json';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = data.find((p) => p.id === parseInt(id));

  if (!project) return <div className="text-center pt-20">Project not found.</div>;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="mb-6">{project.description}</p>
        <a
          href={project.link}
          className="text-blue-600 dark:text-blue-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Project →
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails; 
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import data from '../data/projects.json';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsPerPage = 3;

  useEffect(() => {
    setProjects(data);
  }, []);

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <section
      id="projects"
      className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white pt-24 p-6 transition-colors"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-8 border-b pb-2 border-gray-300 dark:border-gray-700"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="grid gap-6"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {currentProjects.map((project) => (
            <motion.div
              key={project.id}
              className="p-6 rounded-lg shadow bg-gray-100 dark:bg-gray-800 cursor-pointer"
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedProject(project)}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <span className="text-blue-600 dark:text-blue-400 hover:underline">
                Click to view details →
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-2">Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {/* Modal for project details */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-xl w-full max-w-md relative shadow-xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-4 text-xl font-bold hover:text-red-500"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <p className="mb-4">{selectedProject.description}</p>
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Visit Project →
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;




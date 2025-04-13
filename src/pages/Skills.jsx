import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaCloud, 
} from "react-icons/fa";
import {
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiExpress,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl" aria-label="JavaScript" /> },
  { name: "React.js", icon: <FaReact className="text-blue-500 text-3xl" aria-label="React.js" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-3xl" aria-label="Node.js" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-800 dark:text-white text-3xl" aria-label="Express.js" /> },
  { name: "MongoDB", icon: <FaDatabase className="text-green-700 text-3xl" aria-label="MongoDB" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-3xl" aria-label="HTML5" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-3xl" aria-label="CSS3" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-3xl" aria-label="Git" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-400 text-3xl" aria-label="Docker" /> },
  { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500 text-3xl" aria-label="Kubernetes" /> },
  { name: "CI/CD (Jenkins)", icon: <SiJenkins className="text-red-600 text-3xl" aria-label="Jenkins" /> },
  { name: "AWS", icon: <FaCloud className="text-orange-400 text-3xl" aria-label="AWS" /> },
];


const Skills = () => {
  return (
    <section
      id="skills"
      className="mt-10 min-h-screen bg-gray-100 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-10"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          🚀 My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-5 flex flex-col items-center space-y-2 w-full max-w-[130px] sm:max-w-[150px] hover:shadow-lg transition-transform cursor-pointer"
            >
              {skill.icon}
              <p className="text-sm sm:text-base text-gray-800 dark:text-white font-medium text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


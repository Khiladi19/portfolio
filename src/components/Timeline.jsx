import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    title: "Full Stack Developer Intern",
    location: "PwSkills",
    date: "Feb 2024 - Nov 2024",
    description: "Worked on building scalable web apps using MERN stack.",
    type: "experience",
  },
  {
    title: "B.Tech in Computer Science",
    location: "CT University",
    date: "2020 - 2024",
    description: "Completed degree with a focus on web development.",
    type: "education",
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          🧭 My Journey
        </h2>

        <div className="relative border-l-4 border-blue-600 ml-6">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="mb-10 ml-4"
            >
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-1.5"></div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mb-1">{item.location}</p>
              <p className="text-sm text-gray-400 italic mb-2">{item.date}</p>
              <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

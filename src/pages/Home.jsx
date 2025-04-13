import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 pt-20 overflow-hidden
        bg-gradient-rainbow bg-[length:400%_400%] animate-gradient dark:bg-gray-900"
    >
      <motion.div
        className="text-center space-y-6 max-w-2xl z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-snug"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Hi, I'm Abhishek 👋
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-white/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Full Stack Developer | MERN Stack | Open to Work
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <Link
            to="/projects"
            className="inline-block px-6 py-3 text-sm sm:text-base bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            View My Work
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;






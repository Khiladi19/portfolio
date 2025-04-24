import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-white dark:bg-gray-900 text-black dark:text-white text-center text-sm sm:text-base text-gray-500 dark:text-gray-400 py-6 border-t border-gray-200 dark:border-gray-700 mt-12 px-4">
      <div className="flex justify-center gap-6 mb-3">
        <a
          href="https://github.com/Khiladi19?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black dark:hover:text-white transition"
          aria-label="Visit my GitHub profile"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/abhishek-kumar193/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          aria-label="Visit my LinkedIn profile"
        >
          <FaLinkedin size={24} />
        </a>
      </div>

      <p>
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-gray-700 dark:text-gray-200">
          Abhishek Kumar
        </span>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

  
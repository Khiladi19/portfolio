import React from "react";

function About() {
  return (
    <div className=" mt-10 p-4 sm:p-6 md:p-10">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        About Me
      </h2>

      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <img
          src="/images/profile.jpg" // ✅ Replace with your image path (e.g. public/profile.jpg)
          alt="Abhishek Kumar"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-800"
        />
      </div>

      {/* About Text */}
      <div className="text-center max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
        <p className="text-lg mb-4">
          I'm <span className="font-semibold text-blue-600">Abhishek Kumar</span>, a passionate Full Stack Developer with a focus on the <strong>MERN Stack</strong>. I enjoy crafting responsive, scalable, and user-friendly web applications that solve real-world problems and deliver great user experiences.
        </p>

        {/* Skills Section */}
        <h3 className="text-xl font-semibold mt-8 mb-4 flex items-center justify-center gap-2">
          <span role="img" aria-label="lightbulb">💡</span> Skills
        </h3>

        <div className="flex flex-wrap justify-center gap-3">
          {[
            "HTML5",
            "CSS3",
            "JavaScript",
            "React.js",
            "Context API",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Git & GitHub",
            "Docker",
            "Kubernetes",
            "AWS"
          ].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-sm text-blue-800 dark:text-blue-200 rounded-md shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;




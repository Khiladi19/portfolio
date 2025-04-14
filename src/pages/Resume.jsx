function Resume() {
  return (
    <div className="mt-10 p-4 sm:p-6 md:p-10 bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      {/* Sticky Header with Title and Buttons */}
      <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 pb-4 sm:pb-6">
        <div className="flex flex-col sm:flex-col justify-between items-start sm:items-center gap-4">
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold">My Resume</h2>
          <div className="flex flex-col sm:flex-row gap-2">
            <a
              href="https://khiladi19.github.io/resume/abhishek_resume.pdf"
              download
              className="bg-blue-600 text-white px-5 py-2.5 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              Download Resume
            </a>
            <button
              onClick={() =>
                window.open("https://khiladi19.github.io/resume/abhishek_resume.pdf", "_blank")
              }
              className="bg-gray-600 text-white px-5 py-2.5 rounded-md hover:bg-gray-700 transition-colors text-sm sm:text-base"
            >
              View Fullscreen
            </button>
          </div>
        </div>
      </div>

      {/* Resume Viewer */}
      <div className="mt-4 w-full h-[65vh] rounded-md shadow-lg overflow-hidden border dark:border-gray-700">
        <iframe
          src="https://khiladi19.github.io/resume/abhishek_resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
          className="w-full h-full"
          frameBorder="0"
          title="Abhishek Resume PDF"
        ></iframe>
      </div>
    </div>
  );
}

export default Resume;







  
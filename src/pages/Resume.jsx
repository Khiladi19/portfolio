function Resume() {
  return (
    <div className="mt-10 p-4 sm:p-6 md:p-10 bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      {/* Header and Buttons */}
      <div className="flex flex-col sm:flex-col justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="mt-5 text-2xl sm:text-3xl font-bold">My Resume</h2>
        <div className="flex flex-col sm:flex-row gap-2">
          <a
            href="/abhishek_resume.pdf"
            download
            className="bg-blue-600 text-white px-5 py-2.5 rounded-md hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            Download Resume
          </a>
          <button
            onClick={() => window.open("/abhishek_resume.pdf", "_blank")}
            className="bg-gray-600 text-white px-5 py-2.5 rounded-md hover:bg-gray-700 transition-colors text-sm sm:text-base"
          >
            View Fullscreen
          </button>
        </div>
      </div>

      {/* Embedded Resume */}
      <div className="w-full max-w-4xl mx-auto h-[75vh] rounded-md shadow-lg overflow-hidden border dark:border-gray-700">
        <iframe
          src="/abhishek_resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
          className="w-full h-full"
          frameBorder="0"
          allow="fullscreen"
          title="Abhishek Resume PDF"
        ></iframe>
      </div>
    </div>
  );
}

export default Resume;







  
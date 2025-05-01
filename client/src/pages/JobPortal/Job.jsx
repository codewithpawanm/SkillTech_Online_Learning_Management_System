import React from "react";

const Job = () => {
  return (
    <div className="min-h-screen pt-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Welcome to the SkillTech Job Portal 🚀
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Find your dream job or post job openings here.
        </p>

        {/* Jobs List Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example job card */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">Frontend Developer</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Remote | Full-time</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
              Apply Now
            </button>
          </div>

          {/* Add more job cards here later */}
        </div>
      </div>
    </div>
  );
};

export default Job;

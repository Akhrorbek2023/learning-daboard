import React from 'react';

const Home: React.FC = () => {
  return (
    <div className=''>
      <div className="p-8 h-full ">
        <h1 className="text-3xl font-bold mb-4 text-center">Language Learning Site</h1>
        <p className="text-gray-700 mb-4">
          Welcome to our language learning platform! Whether you're a beginner or an advanced learner,
          we have the resources and tools to help you master a new language.
        </p>
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4">
            <span className="text-white text-xl">1</span>
          </div>
          <p className="text-gray-800">Interactive Lessons</p>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4">
            <span className="text-white text-xl">2</span>
          </div>
          <p className="text-gray-800">Engaging Exercises</p>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-4">
            <span className="text-white text-xl">3</span>
          </div>
          <p className="text-gray-800">Progress Tracking</p>
        </div>
        <p className="text-gray-700">
          Start your language learning journey today and explore the exciting world of communication!
        </p>
      </div>
    </div>
  );
};

export default Home;
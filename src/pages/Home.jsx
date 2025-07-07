import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-4">
      <div className="bg-white/30 backdrop-blur-lg shadow-xl rounded-2xl p-10 text-center max-w-xl w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-blue-600">Job Portal</span>
        </h1>
        <p className="text-gray-700 mb-8 text-lg">
          Find your dream job or hire the best talent today.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            to="/jobs"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md shadow-md transition"
          >
            View Jobs
          </Link>
          <Link
            to="/post-job"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-md shadow-md transition"
          >
            Post a Job
          </Link>
          <Link
            to="/login"
            className="border border-blue-500 text-blue-600 hover:bg-blue-50 py-2 px-6 rounded-md shadow-sm transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="border border-gray-500 text-gray-700 hover:bg-gray-100 py-2 px-6 rounded-md shadow-sm transition"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

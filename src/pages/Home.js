import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold mb-4">Welcome to Job Portal</h1>
      <p className="mb-6">Find your next opportunity here.</p>
      <div className="space-x-4">
        <Link to="/jobs" className="bg-blue-500 text-white px-4 py-2 rounded">
          View Jobs
        </Link>
        <Link to="/post-job" className="bg-green-500 text-white px-4 py-2 rounded">
          Post a Job
        </Link>
      </div>
    </div>
  );
}

export default Home;

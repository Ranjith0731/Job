import React, { useEffect, useState } from 'react';
import { getAllJobs } from '../api/jobService';
import { Link } from 'react-router-dom';

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      const data = await getAllJobs();
      setJobs(data);
    }
    fetchJobs();
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Browse Job Openings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-blue-700">{job.title}</h3>
              <span className="text-sm px-3 py-1 bg-blue-100 text-blue-600 rounded-full">{job.type}</span>
            </div>
            <p className="text-gray-600 font-medium">{job.company} • {job.location}</p>
            <p className="text-gray-700 mt-2">{job.description}</p>
            <ul className="text-sm mt-3 text-gray-600 space-y-1">
              <li><strong>Skills:</strong> {job.skillsRequired}</li>
              <li><strong>Experience:</strong> {job.experience}</li>
              <li><strong>Salary:</strong> ₹{job.salary}</li>
              <li><strong>Deadline:</strong> {job.deadline}</li>
            </ul>
            <Link
              to={`/apply/${job.id}`}
              className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Apply Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobList;

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
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Job Listings</h2>
      <ul className="space-y-4">
        {jobs.map((job) => (
          <li key={job.id} className="p-4 bg-white shadow rounded">
            <div className="font-semibold text-lg">{job.title}</div>
            <div className="text-sm text-gray-600">{job.location}</div>
            <Link to={`/apply/${job.id}`} className="text-blue-500 hover:underline">
              Apply
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;

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
    <div className="max-w-5xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Job Listings</h2>
      <ul className="space-y-6">
        {jobs.map((job) => (
          <li key={job.id} className="p-4 bg-white shadow rounded">
            <div className="text-xl font-semibold">{job.title} @ {job.company}</div>
            <p className="text-sm text-gray-600">{job.location} | {job.type}</p>
            <p className="mt-2">{job.description}</p>
            <p><strong>Skills:</strong> {job.skillsRequired}</p>
            <p><strong>Experience:</strong> {job.experience}</p>
            <p><strong>Salary:</strong> ₹{job.salary}</p>
            <p><strong>Deadline:</strong> {job.deadline}</p>
            <Link to={`/apply/${job.id}`} className="text-blue-600 hover:underline mt-2 inline-block">
              Apply
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;

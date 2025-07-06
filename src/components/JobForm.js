import React, { useState } from 'react';
import { postJob } from '../api/jobService';

function JobForm() {
  const [job, setJob] = useState({
    title: '',
    company: '',
    type: '',
    location: '',
    description: '',
    salary: '',
    experience: '',
    skillsRequired: '',
    deadline: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postJob(job);
      alert('Job posted successfully!');
      setJob({
        title: '', company: '', type: '', location: '', description: '', salary: '',
        experience: '', skillsRequired: '', deadline: ''
      });
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Post a Job</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        {['title', 'company', 'type', 'location', 'experience', 'skillsRequired', 'deadline'].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={job[field]}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        ))}
        <textarea
          name="description"
          placeholder="Job Description"
          value={job.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={job.salary}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default JobForm;

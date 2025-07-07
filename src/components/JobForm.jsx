import React, { useState } from 'react';
import { postJob } from '../api/jobService';

function JobForm() {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
    salary: '',
    type: '',
    skillsRequired: '',
    experience: '',
    deadline: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postJob(formData);
    alert('Job posted successfully!');
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-lg mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Post a Job</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {[
          { name: 'title', label: 'Job Title' },
          { name: 'company', label: 'Company Name' },
          { name: 'location', label: 'Location' },
          { name: 'description', label: 'Job Description', textarea: true },
          { name: 'salary', label: 'Salary' },
          { name: 'type', label: 'Job Type (Full-time, Part-time)' },
          { name: 'skillsRequired', label: 'Required Skills' },
          { name: 'experience', label: 'Experience Required' },
          { name: 'deadline', label: 'Application Deadline' }
        ].map(({ name, label, textarea }) => (
          <div key={name}>
            <label className="block text-gray-700 mb-1 font-medium">{label}</label>
            {textarea ? (
              <textarea
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                required
              />
            ) : (
              <input
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            )}
          </div>
        ))}
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold">
          Post Job
        </button>
      </form>
    </div>
  );
}

export default JobForm;

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ApplyJob() {
  const { jobId } = useParams();
  const [applicant, setApplicant] = useState({ name: '', email: '', resume: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setApplicant({ ...applicant, [name]: value });
  };

  const handleFileChange = (e) => {
    setApplicant({ ...applicant, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', applicant.name);
    formData.append('email', applicant.email);
    formData.append('resume', applicant.resume);
    formData.append('jobId', jobId);

    try {
      await axios.post('http://localhost:8081/api/applications', formData);
      alert('Application submitted!');
    } catch (error) {
      console.error('Error applying:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Apply to Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="file"
          name="resume"
          accept=".pdf,.docx"
          onChange={handleFileChange}
          required
          className="w-full border p-2 rounded"
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Apply
        </button>
      </form>
    </div>
  );
}

export default ApplyJob;

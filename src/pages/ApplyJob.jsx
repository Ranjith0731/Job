import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ApplyJob() {
  const { jobId } = useParams();
  const [applicant, setApplicant] = useState({
    name: '',
    email: '',
    resume: null
  });

  const handleChange = (e) => {
    setApplicant({ ...applicant, [e.target.name]: e.target.value });
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
    <div className="max-w-xl mx-auto p-8 bg-white mt-12 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Apply for This Job</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Resume (PDF/DOCX)</label>
          <input
            type="file"
            name="resume"
            onChange={handleFileChange}
            accept=".pdf,.docx"
            required
            className="w-full border rounded-lg p-3"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 font-semibold"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default ApplyJob;

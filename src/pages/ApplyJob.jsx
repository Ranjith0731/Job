import axios from 'axios';
import { useState } from 'react';

const ApplyJob = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formPayload = new FormData();
    formPayload.append('fullName', formData.fullName);
    formPayload.append('email', formData.email);
    formPayload.append('phone', formData.phone);
    formPayload.append('coverLetter', formData.coverLetter);
    formPayload.append('resume', formData.resume);

    try {
      const response = await axios.post(
        'http://localhost:8081/api/applications',
        formPayload,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      alert('Application submitted successfully!');
      console.log('Response:', response.data);

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        coverLetter: '',
        resume: null,
      });
    } catch (error) {
      console.error('Application submission failed:', error);
      alert('Failed to submit application. Please try again.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-12 bg-white rounded-2xl shadow-2xl mt-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
        Apply for the Job
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="+91 9876543210"
            value={formData.phone}
            onChange={handleChange}
            required
            className="focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">
            Cover Letter
          </label>
          <textarea
            name="coverLetter"
            placeholder="Why do you want to join us?"
            value={formData.coverLetter}
            onChange={handleChange}
            rows={5}
            required
            className="resize-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">
            Upload Resume (PDF/DOCX)
          </label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
            className="file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded-lg file:bg-blue-600 file:text-white hover:file:bg-blue-700"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-lg font-semibold transition-all duration-300"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyJob;

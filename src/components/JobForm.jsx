import React, { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";

const JobForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
    skills: "",
    contactEmail: "",
    deadline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Posted:", formData);
    alert("Job posted successfully!");
    // TODO: Send data to backend here
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 bg-white shadow-2xl rounded-2xl mt-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-indigo-700">
        Post a New Job
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Job Title */}
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-700">Job Title</label>
          <input
            name="title"
            placeholder="e.g., Frontend Developer"
            value={formData.title}
            onChange={handleChange}
            required
            className="focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Company */}
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-700">Company Name</label>
          <input
            name="company"
            placeholder="e.g., Skillencio Pvt. Ltd."
            value={formData.company}
            onChange={handleChange}
            required
            className="focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        

        {/* Location */}
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-700">Location</label>
          <input
            name="location"
            placeholder="e.g., Hyderabad, India"
            value={formData.location}
            onChange={handleChange}
            required
            className="focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Salary */}
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-700">Salary (per annum)</label>
          <input
            type="number"
            name="salary"
            placeholder="e.g., 600000"
            value={formData.salary}
            onChange={handleChange}
            required
            className="focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Skills */}
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-700">Required Skills</label>
          <input
            name="skills"
            placeholder="e.g., React, Node.js, MongoDB"
            value={formData.skills}
            onChange={handleChange}
            required
            className="focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Job Description */}
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-700">Job Description</label>
          <textarea
            name="description"
            placeholder="Provide detailed job responsibilities and expectations..."
            value={formData.description}
            onChange={handleChange}
            rows={5}
            required
            className="resize-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Contact Email */}
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-700">Contact Email</label>
          <input
            type="email"
            name="contactEmail"
            placeholder="e.g., hr@company.com"
            value={formData.contactEmail}
            onChange={handleChange}
            required
            className="focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Application Deadline */}
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-700">Application Deadline</label>
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            required
            className="focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg text-lg font-semibold transition-all duration-300"
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default JobForm;

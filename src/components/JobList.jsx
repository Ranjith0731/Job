import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, Banknote, Briefcase } from "lucide-react";

// Dummy job list (replace with real data from backend/API)
const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Skillencio Pvt. Ltd.",
    location: "Hyderabad",
    salary: "₹6,00,000",
    description: "Work on React, Tailwind, and frontend frameworks...",
    skills: ["React", "Tailwind", "JavaScript"],
    deadline: "2025-08-30",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Teklozy",
    location: "Bangalore",
    salary: "₹8,00,000",
    description: "Design REST APIs with Node.js and MongoDB...",
    skills: ["Node.js", "MongoDB", "Express"],
    deadline: "2025-09-05",
  },
];

const JobList = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-10 text-center text-indigo-700">Available Job Opportunities</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {jobs.map((job) => (
          <Card key={job.id} className="rounded-2xl shadow-md transition hover:shadow-xl border border-gray-200">
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-800">{job.title}</h2>
                <Badge variant="outline" className="text-sm px-3 py-1 border-indigo-500 text-indigo-700">
                  {job.company}
                </Badge>
              </div>

              <p className="text-sm text-gray-600 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> {job.location}
              </p>

              <p className="text-sm text-gray-600 flex items-center gap-2">
                <Banknote className="w-4 h-4" /> {job.salary} per annum
              </p>

              <p className="text-sm text-gray-600 flex items-center gap-2">
                <CalendarDays className="w-4 h-4" /> Apply by: {job.deadline}
              </p>

              <p className="text-gray-700 text-sm mt-2">{job.description}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                {job.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="bg-indigo-100 text-indigo-700">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="pt-4">
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                  <Briefcase className="w-4 h-4 mr-2" /> Apply Now
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default JobList;

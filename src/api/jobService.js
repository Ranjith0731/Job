import axios from 'axios';

const API_BASE = 'http://localhost:8081/api/jobs';

export const getAllJobs = async () => {
  const response = await axios.get(API_BASE);
  return response.data;
};

export const postJob = async (job) => {
  const response = await axios.post(API_BASE, job);
  return response.data;
};

// src/api/jobAPI.js
import axios from 'axios';

const API_BASE = 'http://localhost:8081/api/jobs';

// Axios instance (optional but recommended for centralized config)
const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Get all jobs
export const getAllJobs = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};

// Post a new job
export const postJob = async (job) => {
  try {
    const response = await api.post('/', job);
    return response.data;
  } catch (error) {
    console.error('Error posting job:', error);
    throw error;
  }
};

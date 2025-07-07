import axios from 'axios';

const API_BASE = 'http://localhost:8081/api/auth';

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_BASE}/register`, userData);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_BASE}/login`, credentials);
  return response.data;
};
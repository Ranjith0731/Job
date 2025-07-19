// src/api/authAPI.js
import axios from 'axios';

const API_BASE = 'http://localhost:8081/api/auth';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE}/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Registration Error:', error.response?.data || error.message);
    throw error.response?.data || new Error('Registration failed');
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE}/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Login Error:', error.response?.data || error.message);
    throw error.response?.data || new Error('Login failed');
  }
};

import axios from 'axios';

const API_BASE = 'http://localhost:8081/api/files'; 

// Upload a single file
export const uploadFile = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE}/upload`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data; // Returns filename
  } catch (error) {
    throw new Error(error.response?.data?.message || 'File upload failed');
  }
};

// Download file by name
export const downloadFile = async (filename) => {
  try {
    const response = await axios.get(`${API_BASE}/download/${filename}`, {
      responseType: 'blob',
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    throw new Error('Download failed');
  }
};

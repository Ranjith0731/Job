// src/components/FileUploader.jsx

import React, { useState } from 'react';
import { uploadFile, downloadFile } from '../api/fileAPI';
import { showSuccess, showError } from './ToastWrapper';
import { CloudUpload, Download } from 'lucide-react';

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files?.[0] || null);
  };

  const handleUpload = async () => {
    if (!file) {
      showError('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const uploadedName = await uploadFile(formData);
      setUploadedFileName(uploadedName);
      showSuccess(`Uploaded as: ${uploadedName}`);
    } catch (err) {
      console.error(err);
      showError('Upload failed. Try again!');
    }
  };

  const handleDownload = async () => {
    if (!uploadedFileName) {
      showError('No uploaded file to download.');
      return;
    }

    try {
      await downloadFile(uploadedFileName);
      showSuccess('Download started!');
    } catch (err) {
      console.error(err);
      showError('Download failed!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-lg transition-all">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">📁 File Uploader</h2>

        <input
          type="file"
          onChange={handleFileChange}
          className="w-full p-3 border border-gray-300 rounded-lg text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <div className="flex gap-4">
          <button
            onClick={handleUpload}
            className="flex-1 bg-green-600 text-white flex items-center justify-center gap-2 py-2 px-4 rounded-lg hover:bg-green-700 transition"
          >
            <CloudUpload size={18} /> Upload
          </button>

          <button
            onClick={handleDownload}
            className="flex-1 bg-blue-600 text-white flex items-center justify-center gap-2 py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            <Download size={18} /> Download
          </button>
        </div>

        {uploadedFileName && (
          <p className="mt-4 text-sm text-center text-gray-700">
            ✅ <strong>Uploaded File:</strong> {uploadedFileName}
          </p>
        )}
      </div>
    </div>
  );
};

export default FileUploader;

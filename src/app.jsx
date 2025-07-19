// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Pages & Components
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ApplyJob from './pages/ApplyJob';
import JobForm from './components/JobForm';
import ForgotPassword from './pages/ForgotPassword';
import FileUploader from './components/FileUploader';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <main className="min-h-screen font-sans bg-gray-50 text-gray-800">
        {/* <ToastContainer  > */}
        {/* position="top-right" autoClose={3000} pauseOnHover={false} theme="colored" */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/jobs" element={<ApplyJob />} />
          <Route path="/post-job" element={<JobForm />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/file-uploader" element={<FileUploader />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* </ToastContainer> */}
      </main>
    </Router>
  );
}

export default App;

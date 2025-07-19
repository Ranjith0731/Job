// src/pages/ForgotPassword.jsx

import React, { useState } from 'react';
import { showSuccess, showError } from '../components/ToastWrapper';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      showSuccess('Password reset link sent to your email.');
      // TODO: Replace with actual API call to backend
    } else {
      showError('Please enter a valid email.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 w-full max-w-md transition-all duration-300">
        <div className="text-center mb-6">
          <img
            src="https://www.svgrepo.com/show/521200/mail-send.svg"
            alt="Forgot password"
            className="h-20 mx-auto mb-4"
          />
          <h2 className="text-3xl font-bold text-purple-700">Forgot Password?</h2>
          <p className="text-sm text-gray-600 mt-1">
            No worries! We'll send you reset instructions.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 rounded-lg hover:opacity-90 transition font-semibold tracking-wide"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link to="/login" className="text-sm text-purple-600 hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

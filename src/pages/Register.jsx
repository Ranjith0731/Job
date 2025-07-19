import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Lock } from 'lucide-react';

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8081/api/auth/register', user);
      alert('Registered successfully!');
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-pink-100 to-purple-100 px-4">
      <div className="bg-white/30 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md border border-white/40">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <User className="absolute top-3 left-3 text-gray-500 w-5 h-5" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={user.name}
              onChange={handleChange}
              required
              className="pl-10 pr-4 py-2 w-full rounded-md bg-white/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="relative">
            <Mail className="absolute top-3 left-3 text-gray-500 w-5 h-5" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
              required
              className="pl-10 pr-4 py-2 w-full rounded-md bg-white/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="relative">
            <Lock className="absolute top-3 left-3 text-gray-500 w-5 h-5" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              required
              className="pl-10 pr-4 py-2 w-full rounded-md bg-white/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-semibold transition shadow-md"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, LogIn, UserPlus, Briefcase, UploadCloud } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('user');

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 relative overflow-hidden flex items-center justify-center p-6">
      
      {/* Floating decorative gradient circle */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-purple-300 opacity-30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-pink-300 opacity-30 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 bg-white/30 backdrop-blur-md border border-white/40 shadow-2xl rounded-3xl p-10 max-w-2xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight drop-shadow-sm">
          Welcome to <span className="text-indigo-600">Job Portal</span>
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-8">
          Discover your next opportunity or hire top talent in seconds.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <Link
            to="/jobs"
            className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-xl shadow-lg transition"
          >
            <Briefcase className="w-5 h-5" />
            View Jobs
          </Link>

          <Link
            to="/post-job"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-xl shadow-lg transition"
          >
            <UploadCloud className="w-5 h-5" />
            Post a Job
          </Link>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="col-span-2 flex items-center justify-center gap-2 border border-red-500 text-red-600 hover:bg-red-100 py-3 px-6 rounded-xl shadow-md transition"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="flex items-center justify-center gap-2 border border-blue-500 text-blue-600 hover:bg-blue-100 py-3 px-6 rounded-xl shadow-md transition"
              >
                <LogIn className="w-5 h-5" />
                Login
              </Link>

              <Link
                to="/register"
                className="flex items-center justify-center gap-2 border border-gray-500 text-gray-700 hover:bg-gray-100 py-3 px-6 rounded-xl shadow-md transition"
              >
                <UserPlus className="w-5 h-5" />
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem('token'));
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="bg-gray-100 shadow-md px-6 py-3 flex items-center justify-between">
      <div className="flex gap-6 items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">JobPortal</Link>
        <Link to="/jobs" className="hover:underline text-blue-700">Jobs</Link>
        <Link to="/post-job" className="hover:underline text-blue-700">Post Job</Link>
      </div>

      <div className="flex gap-4 items-center">
        {isLoggedIn ? (
          <>
            {user?.name && <span className="text-sm text-gray-700">Hi, {user.name}</span>}
            <button 
              onClick={handleLogout} 
              className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link 
              to="/login" 
              className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

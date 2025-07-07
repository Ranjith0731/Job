// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">Job Portal</Link>
      <div className="navbar-nav">
        <Link className="nav-link" to="/jobs">View Jobs</Link>
        <Link className="nav-link" to="/post-job">Post Job</Link>
        <Link className="nav-link" to="/login">Login</Link>
        <Link className="nav-link" to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;

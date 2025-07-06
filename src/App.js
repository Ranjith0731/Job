import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JobList from './components/JobList';
import JobForm from './components/JobForm';
import ApplyJob from './pages/ApplyJob';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/post-job" element={<JobForm />} />
        <Route path="/apply/:jobId" element={<ApplyJob />} />
      </Routes>
    </Router>
  );
}

export default App;

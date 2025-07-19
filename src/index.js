// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Tailwind or global styles
// import ErrorBoundary from './components/ErrorBoundary';
// import reportWebVitals from './reportWebVitals'; // Optional but good 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <ErrorBoundary> */}
      <App />
    {/* </ErrorBoundary> */}
  </React.StrictMode>
);

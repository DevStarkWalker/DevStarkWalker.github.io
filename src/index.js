import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure this points to your App.js file
import reportWebVitals from './reportWebVitals';
import './index.css'; // Optional, if you have a CSS file

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

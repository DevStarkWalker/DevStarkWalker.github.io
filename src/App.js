import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import MediaPage from './components/MediaPage';
import GamesPage from './components/GamesPage.js';
import WebDesignPage from './components/WebDesignPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/web-design" element={<WebDesignPage />} />
      </Routes>
    </Router>
  );
}

export default App;


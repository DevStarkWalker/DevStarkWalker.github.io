// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file here

const Layout = () => {
  return (
    <div className="homepage">
      <header className="banner">
        <nav className="nav-bar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/media" className="nav-link">Media</Link>
          <Link to="/games" className="nav-link">Games</Link>
          <Link to="/web-design" className="nav-link">Web Design</Link>
        </nav>
        <div className="logo-container">
          <Link to="/">
            <img src="/PlaceHolderLogo.png" alt="Novaeh Studios Logo" className="logo" />
          </Link>
        </div>
      </header>
      <main className="homepage-content">
        <Outlet /> {/* This will render the current page component */}
      </main>
    </div>
  );
};

export default Layout;

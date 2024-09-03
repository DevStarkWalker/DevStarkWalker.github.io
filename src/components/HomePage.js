import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="banner">
        <div className="logo-container">
          <img src="/path-to-your-logo.png" alt="Novaeh Studios Logo" className="logo" />
        </div>
        <nav className="nav-bar">
          <button className="nav-button" onClick={() => window.location.href = '/media'}>Media</button>
          <button className="nav-button" onClick={() => window.location.href = '/games'}>Games</button>
          <button className="nav-button" onClick={() => window.location.href = '/web-design'}>Web Design</button>
        </nav>
      </header>
      <section className="homepage-content">
        <div className="homepage-intro">
          <h2>Explore the latest projects and take a look at the vision.</h2>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="banner">
        <div className="logo-container">
          <img src="/PlaceHolderLogo.png" alt="Novaeh Studios Logo" className="logo" />
        </div>
        <div className="nav-bar">
          <a href="/media" className="nav-link">Media</a>
          <a href="/games" className="nav-link">Games</a>
          <a href="/web-design" className="nav-link">Web Design</a>
        </div>
      </header>
      <section className="homepage-content">
        <div className="homepage-intro">
          <h2>Novaeh Studios</h2>
          <p>From concept to creation, giving visions life.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

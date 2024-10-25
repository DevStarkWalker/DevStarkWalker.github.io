import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './Gallery.css'; // Importing the CSS file for styling
import Newlogo from './Newlogo.png';
import Logo1 from './images/version 2.png';
import Logo3 from './images/Final Unit Chef Logo.png';
import Logo4 from './images/Oneill5.png';
import WebPage1 from './images/PersonalPortfolioPic.png';
import WebPage2 from './images/NovaehPage.png'
import Game1 from "./images/Chubby Title Screen V1.png"

const Media = () => {
    const [flippedCards, setFlippedCards] = useState({});

    const handleCardClick = (cardId) => {
        setFlippedCards((prevState) => ({
            ...prevState,
            [cardId]: !prevState[cardId],
        }));
    };

    return (
        <div className='gallery-page'>
            <Header />
            <div className="gallery-container">
                <div className="gallery-logo">
                    <img src={Newlogo} alt="Newlogo" className="logo-image" />
                </div>
                <main className="gallery-main">
                    <h1 className="gallery-title">Gallery</h1>
                    <p className="gallery-description">Explore our portfolio showcasing a collection of logos, game projects, and web designs.</p>

                    {/* Logos Section */}
                    <div className="gallery-section logos-section">
                        <h2 className="section-heading">Logos</h2>
                        <div className="media-grid">
                            {[{ src: Logo1, id: 'logo1', text: 'This bold and dynamic logo features two cartoon characters standing back-to-back, each wielding pressure washers, symbolizing teamwork and strength. The strong title "Grunts Pressure Washing" reflects the company’s reliable and tough cleaning services.' },
                              { src: Logo3, id: 'logo3', text: 'A sleek and minimalistic design, this logo showcases a simple yet striking chef illustration, combined with the bold letters "UC" for Unit Chef. It perfectly captures the essence of clean and efficient branding for a sports-focused Instagram page.' },
                              { src: Logo4, id: 'logo4', text: 'This elegant gold and black logo brings a touch of sophistication, featuring a beautiful blend of a rose and heather. It highlights the luxury and care associated with Heather O’Neill Real Estate’s services.' }].map((logo) => (
                                <div
                                    key={logo.id}
                                    className={`flip-card-logo ${flippedCards[logo.id] ? 'flipped' : ''}`}
                                    onClick={() => handleCardClick(logo.id)}
                                >
                                    <div className="flip-card-inner-logo">
                                        <div className="flip-card-front-logo">
                                            <img src={logo.src} alt={logo.id} className="media-item-logo" />
                                        </div>
                                        <div className="flip-card-back-logo">
                                            <p>{logo.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Games Section */}
                    <div className="gallery-section games-section">
                        <h2 className="section-heading">Games</h2>
                        <div className="media-grid">
                            {[{ src: Game1, id: 'Game1', text: 'Chubby Chickens is a fun and chaotic multiplayer game that is in development by Novaeh Studios. The main idea is teamwork is key! Players control chubby, adorable chickens as they work together to navigate obstacle-filled levels while dodging incoming projectiles.' },].map((game) => (
                                <div
                                    key={game.id}
                                    className={`flip-card-game ${flippedCards[game.id] ? 'flipped' : ''}`}
                                    onClick={() => handleCardClick(game.id)}
                                >
                                    <div className="flip-card-inner-game">
                                        <div className="flip-card-front-game">
                                            <img src={game.src} alt={game.id} className='media-item-game' />
                                        </div>
                                        <div className="flip-card-back-game">
                                            <p>{game.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Webpages Section */}
                    <div className="gallery-section webpages-section">
                        <h2 className="section-heading">Webpages</h2>
                        <div className="media-grid"> 
                        {[{ src: WebPage1, id: 'Web1', text: 'This is my personal portfolio, which has developed alot over the years. It showcases my artistic touch mixed with a showcase of my projects and work.' },
                          { src: WebPage2, id: 'Web2', text: 'The Novaeh webpage was design and developed by Novaeh Studios. It provides information on our services and core beleifs, while showcasing our web development and design capabilities.'  }].map((webpage) => (
                                <div
                                    key={webpage.id}
                                    className={`flip-card-webpage ${flippedCards[webpage.id] ? 'flipped' : ''}`}
                                    onClick={() => handleCardClick(webpage.id)}
                                >
                                    <div className="flip-card-inner-webpage">
                                        <div className="flip-card-front-webpage">
                                            <img src={webpage.src} alt={webpage.id} className="media-item-webpage" />
                                        </div>
                                        <div className="flip-card-back-webpage">
                                            <p>{webpage.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Media;

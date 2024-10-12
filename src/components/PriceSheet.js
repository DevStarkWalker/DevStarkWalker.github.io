import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PriceSheet = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Price Sheet</h1>
                <p>Logo Design: $200</p>
                <p>Media Design: $300</p>
                <p>Web Page Design: $500</p>
            </main>
            <Footer />
        </div>
    );
};

export default PriceSheet;

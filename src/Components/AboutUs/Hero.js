import React from 'react';
import './Hero.scss';

import AboutUsHero from '../../Resources/Images/AboutUsHero.png';

const Hero = () => {
    return (
        <div className="container-fluid hero-container">
            <div className="row justify-content-center ">
                <div className="col-lg-10 hero-row">
                    <p>ONWARDS TO GLORY!</p>
                    <p>A newly discovered E-sport organization created for competitive gaming <br /> based in the South Island of the Philippines called Mindanao.</p>   
                </div>
            </div>
        </div>
    );
};

export default Hero;
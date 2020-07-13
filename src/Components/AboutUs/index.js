import React from 'react';
import './styles.scss';

import Hero from './Hero';
import Sponsors from './Sponsors';
import AboutApex from './AboutApex';
import Schedule from './Schedule';

const AboutUs = () => {
    return (
        <div className="about-us-wrapper">
           <Hero /> 
           <Sponsors />
           <AboutApex />
           <Schedule />
        </div>
    );
};

export default AboutUs;
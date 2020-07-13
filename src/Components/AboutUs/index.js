import React from 'react';
import './styles.scss';

import Hero from './Hero';
import Sponsors from './Sponsors';
import AboutApex from './AboutApex';
import Schedule from './Schedule';
import Explore from './Explore';
import Partners from './Partners';
import ShopPreview from './ShopPreview';
import Informations from './Informations';

const AboutUs = () => {
    return (
        <div className="about-us-wrapper">
           <Hero /> 
           <Sponsors />
           <AboutApex />
           <Schedule />
           <Explore />
           <Partners />
           <ShopPreview />
           <Informations />
        </div>
    );
};

export default AboutUs;
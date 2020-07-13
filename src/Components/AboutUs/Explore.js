import React from 'react';

import './Explore.scss'

import ApexLogo from '../../Resources/Images/ApexLogo.png';
import ApexMobileLegends from '../../Resources/Images/apexMobileLegendsLogo.png';
import ApexDarkLogo from '../../Resources/Images/ApexDarkLogo.png';
import ogTeam  from '../../Resources/Images/ogTeam.png';

const Explore = () => {
    return (
        <div className="container-fluid Explore-container">
            <p>LOREM IPSUM</p>
            <div className="row justify-content-center subheader-row">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
            <div className="row justify-content-center logos">
                <div className="col-lg-8" style={{textAlign:"center"}}>
                    <div className="row justify-content-center">
                        <div className="col-lg-1">
                            <img src={ApexMobileLegends} alt="ApexMobileLegends"/>
                        </div>
                        <div className="col-lg-1">
                            <img src={ApexLogo} alt="ApexLogo"/>
                        </div>
                        <div className="col-lg-1">
                            <img src={ApexDarkLogo} alt="ApexLogo"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <button>
                    EXPLORE
                </button>
            </div>
            <div className="row justify-content-center">
                <img src={ogTeam} alt="OG Team"/>
            </div>
        </div>
    );
};

export default Explore;
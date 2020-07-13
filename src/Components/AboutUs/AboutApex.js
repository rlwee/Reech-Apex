import React from 'react';
import './AboutApex.scss'

import '../../Resources/Fonts/Florsn37.ttf';
import ApexLogo from '../../Resources/Images/ApexLogo.png';

const AboutApex = () => {
    return (
        <div className="container-fluid About-Apex-Container">
            <div className="row justify-content-center rowie">
                <div className="col-lg-6 left-content">
                    <div className="row">
                        <div className="col-lg-2">
                            <p className="rotate">
                                APEX
                            </p>
                        </div>
                        <div className="col-lg-7 offset-lg-2">
                            <img src={ApexLogo} alt="ApexLogo"/>
                            <p>THIS IS</p>
                            <p>REECH APEX</p>
                            <p>
                                Founded in March 2020 by the Executives of Reech Philippines, an online financial fund management platform, under the aid of FinTech Company. Reech Apex's goal is to help E-sport athletes from diverse regions of Mindanao to enhance their skills and develop a reputation that can characterize them to be professional E-sport members recognized nationally and perhaps worldwide. 
                            </p>
                            <button>
                                LEARN MORE
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 right-content">
                    
                </div>
            </div>
        </div>
    );
};

export default AboutApex;
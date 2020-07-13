import React from 'react';
import './Footer.scss';

import ApexLogo from '../../Resources/Images/ApexLogo.png';

const Footer = () => {
    return (
        <footer className="container-fluid">
            <div className="row footer-row">
                <div className="col-lg-1 offset-lg-1">
                    <img src={ApexLogo} alt="ApexLogo"/>
                </div>
            </div>
            <div className="row justify-content-center copyright">
                <p>
                    Copyright © 2020 Reech Apex. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
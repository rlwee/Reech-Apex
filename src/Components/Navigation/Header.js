import React from 'react';
import './Header.scss';

import { Link } from 'react-router-dom'
import ApexLogo from '../../Resources/Images/ApexLogo.png';

const Header = (props) => {
    return (
        <header className="container-fluid">
            <div className="row justify-content-center header-row">
                <div className="col-lg-1  links">
                   <p>ABOUT</p> 
                </div>
                <div className="col-lg-1 links">
                   <p>SCHEDULE</p> 
                </div>
                <div className="col-lg-1 links">
                   <p>TEAMS</p> 
                </div>
                <div className="logo-container">
                    <img src={ApexLogo} alt="ApexLogo" className="logo"/>
                    <hr className="left-horizontal"/>
                    <hr className="right-horizontal"/>
                </div>
                <div className="col-lg-1 offset-lg-1 links">
                   <p>PARTNERS</p> 
                </div>
                <div className="col-lg-1 links">
                   <p>STORE</p> 
                </div>
                <div className="col-lg-1 links">
                   <p>NEWS</p> 
                </div>
            </div>
        </header>
    );
};

export default Header;
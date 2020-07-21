import React, { useState, useRef } from 'react';
import './Header.scss';

import { Link } from 'react-router-dom'
import ApexLogo from '../../Resources/Images/ApexLogo.png';
import { useOnClickOutside } from './BurgerheaderHooks';

const Header = (props) => {
   const [ burgerOpen, setButton ] = useState(false)


   const node = useRef();
   useOnClickOutside(node, () => setButton(false));

    return (
        <header className="container-fluid header" >
            <div className="row justify-content-center header-row" >
               <div className="parent" ref={node}>
               <i className="fa fa-bars burger-tab"  style={{transform: `${burgerOpen ? "translateX(2300%)" : "translateX(0%)"}`}} onClick={() => setButton(!burgerOpen)}></i>
               <i className="fa fa-bars burger-mobile"  style={{transform: `${burgerOpen ? "translateX(1600%)" : "translateX(0%)"}`}} onClick={() => setButton(!burgerOpen)}></i>
               <div className="burger-div" style={{transform: `${burgerOpen ? "translateX(-10%)" : "translateX(-110%)"}`}} >

               </div>
               </div>
               
                <div className="col-1 col-lg-1  links" >
                   <p>ABOUT</p> 
                </div>
                <div className="col-1 col-lg-1 links">
                   <p>SCHEDULE</p> 
                </div>
                <div className="col-1 col-lg-1 links" >
                   <p>TEAMS</p> 
                </div>
                <div className="apex-logo-container">
                  <img src={ApexLogo} alt="ApexLogo" className="logo"/>
                  <hr className="left-horizontal"/>
                  <hr className="right-horizontal"/>
                </div>
                {/* <div className="logo-container">
                    <img src={ApexLogo} alt="ApexLogo" className="logo"/>
                    <hr className="left-horizontal"/>
                    <hr className="right-horizontal"/>
                </div> */}
                <div className="col-1 col-lg-1 offset-lg-1 links" >
                   <p>PARTNERS</p> 
                </div>
                <div className="col-1 col-lg-1 links">
                   <p>STORE</p> 
                </div>
                <div className="col-1 col-lg-1 links" >
                   <p>NEWS</p> 
                </div>

                <ul className="mobile-links" style={{transform: `${burgerOpen ? "translateX(100%)" : "translateX(0%)"}`}}>
                  <li>ABOUT</li>
                  <li>SCHEDULE</li>
                  <li>TEAMS</li>
                  <li>PARTNERS</li>
                  <li>STORE</li>
                  <li>NEWS</li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
import React from 'react';
import './index.scss';
import ApexLogo from '../../Resources/Images/ApexLogo.png';
import ApexComingSoonVideo from '../../Resources/Images/ApexComingSoonVideo.mp4'

const ComingSoon = () => {
    return (
        <div className="container-fluid Apex-Home-Coming-Soon">
            {/* <div className="video-container">
                <video autoPlay muted loop >
                    <source src={ApexComingSoonVideo}  type="video/mp4"/>
                </video>
            </div> */}
            <video autoPlay muted loop preload>
                <source src={ApexComingSoonVideo}  type="video/mp4"/>
            </video>
            <div className="row justify-content-center Apex-row">
                <div className="col-8 col-lg-1 Apex-column">
                    <img src={ApexLogo} alt="Apex Logo"/>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-lg-5 Apex-column">
                    <p className="reech-the-top">#ReechTheTop</p>
                    <p className="reech-introduction">
                        Reech Apex is a newly discovered E-sport organization created 
                        for competitive gaming based in the South Island of the Philippines 
                        called Mindanao.
                    </p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-lg-2 Apex-column">
                    <p className="coming-soon">
                        WEBSITE COMING SOON
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
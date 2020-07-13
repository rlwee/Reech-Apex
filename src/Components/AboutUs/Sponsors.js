import React from 'react';
import './Sponsors.scss';

import HarmanSponsor from '../../Resources/Images/HarmanSponsor.png'
import AcerSponsor from '../../Resources/Images/AcerSponsor.png';
import MclarenSponsor from '../../Resources/Images/MclarenSponsor.png';

const Sponsors = () => {
    return (
        <div className="container-fluid sponsors-container">
            <div className="row justify-content-center sponsor-row">
                <div className="col-lg-12">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 sponsorships-columns">
                            <img src={HarmanSponsor} alt="Harman"/>
                        </div>
                        <div className="col-lg-3 sponsorships-columns">
                            <img src={AcerSponsor} alt="Harman"/>
                        </div>
                        <div className="col-lg-3 sponsorships-columns">
                            <img src={MclarenSponsor} alt="Harman"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;
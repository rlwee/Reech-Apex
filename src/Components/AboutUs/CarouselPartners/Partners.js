import React from 'react';

import './Partners.scss';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

import HarmanSponsor from '../../../Resources/Images/HarmanSponsor.png'
import AcerSponsor from '../../../Resources/Images/AcerSponsor.png';
import MclarenSponsor from '../../../Resources/Images/MclarenSponsor.png';

const showPartners = (partners) => {

}

const Partners = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: false,
        speed: 1000,
        arrows: false
        };
    return (
        <>
            <div
                className="carrousel-wrapper-schedules"
                style={{
                    height: `25vh`
                }}
                >
                    <Slider {...settings}>
                        <div>
                            <div className="container-fluid partners-container">
                                <div className="row justify-content-center partners-row">
                                    <div className="col-lg-12">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-3 partnerships-columns">
                                                <img src={HarmanSponsor} alt="Harman"/>
                                            </div>
                                            <div className="col-lg-3 partnerships-columns">
                                                <img src={AcerSponsor} alt="Harman"/>
                                            </div>
                                            <div className="col-lg-3 partnerships-columns">
                                                <img src={MclarenSponsor} alt="Harman"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="container-fluid partners-container">
                                <div className="row justify-content-center partners-row">
                                    <div className="col-lg-12">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-3 partnerships-columns">
                                                <img src={HarmanSponsor} alt="Harman"/>
                                            </div>
                                            <div className="col-lg-3 partnerships-columns">
                                                <img src={AcerSponsor} alt="Harman"/>
                                            </div>
                                            <div className="col-lg-3 partnerships-columns">
                                                <img src={MclarenSponsor} alt="Harman"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="container-fluid partners-container">
                                <div className="row justify-content-center partners-row">
                                    <div className="col-lg-12">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-3 partnerships-columns">
                                                <img src={HarmanSponsor} alt="Harman"/>
                                            </div>
                                            <div className="col-lg-3 partnerships-columns">
                                                <img src={AcerSponsor} alt="Harman"/>
                                            </div>
                                            <div className="col-lg-3 partnerships-columns">
                                                <img src={MclarenSponsor} alt="Harman"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
            </div>
        </>
    );
};

export default Partners;
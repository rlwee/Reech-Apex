import React from 'react';

import './Partners.scss'

import CarouselPartners from './CarouselPartners/Partners';

const Partners = () => {
    return (
        <div className="container-fluid partners-container">
            <div className="row justify-content-center partners-row">
                <div className="col-lg-4" style={{textAlign:"center"}}>
                    <p>
                        OUR PARTNERS
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting <br />
                        industry. Lorem Ipsum has been the industry's standard dummy text <br />
                        ever since the 1500s, 
                    </p>
                    <button>
                        BECOME OUR PARTNER
                    </button>
                </div>
            </div>
            <div className="row justify-content-center partners-row">
                <CarouselPartners />
            </div>
            <div className="row justify-content-center slant">
                <p>LOREM IPSUM</p>
            </div>
        </div>
    );
};

export default Partners;
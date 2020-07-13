import React from 'react';

import './Informations.scss';

const Informations = () => {
    return (
        <div className="container-fluid information-container">
            <div className="row justify-content-center">
                <p className="header">
                    STAY INFORMED
                </p>
            </div>
            <div className="row justify-content-center">
                <p className="subheader">
                    Stay up to date on all the latest news
                </p>
            </div>
            <div className="row justify-content-center">
                <button>
                    Explore
                </button>
            </div>
            <div className="row justify-content-center" style={{marginTop:"70px"}}>
                <div className="col-lg-10">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 left-information">

                        </div>
                        <div className="col-lg-5 right-information">
                            <p>
                                WATCH EVIL GENIUSES AND AMERICA’S NAVY SQUAD UP ON A COMPUTER NEAR YOU
                            </p>
                            <button>
                                READ NEWS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Informations;
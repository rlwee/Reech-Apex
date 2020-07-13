import React from 'react';
import './Schedule.scss';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CarouselSchedule from './CarouselSchedule/Schedule';

const Schedule = () => {
    return (
        <div className="container-fluid schedule-container">
            <div className="row header-row">
                <div className="col-lg-5 offset-lg-2">
                  <p>WITNESS GREATNESS</p>
                  <p>CHECK OUT OUR SCHEDULE</p>
                </div>
            </div>
            <div className="row justify-content-center schedule-row">
                <CarouselSchedule />
            </div>
        </div>
    );
};

export default Schedule;
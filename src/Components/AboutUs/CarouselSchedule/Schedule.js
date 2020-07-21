import React from 'react';

import './Schedule.scss';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

//Dota Team logo's
import DotaLogo from '../../../Resources/Images/Dota2Logo.png';
import ApexLogo from '../../../Resources/Images/ApexLogo.png';
import GeekFamLogo from '../../../Resources/Images/GeekFamLogo.png';
import FnaticLogo from '../../../Resources/Images/FnaticLogo.png';

//Mobile Legendes Team Logo's
import MobileLegendsMPL from '../../../Resources/Images/MobileLegendsMPL.png';


const showFirstSchedules = (firstBatch) => {
    return firstBatch.map(scheduleOne => (
        <div key={scheduleOne.id} className="col-3 col-lg-3  box-container-col">
            <div className="row">
                <div className="col-3 col-lg-3">
                    <img className="GameType" src={scheduleOne.GameType} alt="MPL Season"/>
                    
                </div>
                <div className="col-7 col-lg-7" style={{padding:"0"}}>
                    <p>{scheduleOne.date}</p>
                    <p>{scheduleOne.season}</p>
                    <p>{scheduleOne.event}</p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-4 col-lg-4">
                    <img
                        className="Apex-team"
                        alt="ApexTeam"
                        src={scheduleOne.apexLogo}
                    />
                </div>
                <div className="col-3 col-lg-3" style={{textAlign:"center", marginTop:"30px"}}>
                    <p className="match">GAME {scheduleOne.gameMatch}</p>
                    <p>VS</p>
                </div>
                <div className="col-4 col-lg-4">
                    <img
                        className="Apex-team"
                        alt="OpponentTeam"
                        src={scheduleOne.OpponentTeam}
                    />
                </div>
            </div>
        </div>
    ))
}

const showSecondSchedules = (secondBatch) => {
    return secondBatch.map(scheduleTwo => (
        <div key={scheduleTwo.id} className="col-3 col-lg-3  box-container-col">
            <div className="row">
                <div className="col-3 col-lg-3">
                    <img className="GameType" src={scheduleTwo.GameType} alt="MPL Season"/>
                    
                </div>
                <div className="col-7 col-lg-7" style={{padding:"0"}}>
                    <p>{scheduleTwo.date}</p>
                    <p>{scheduleTwo.season}</p>
                    <p>{scheduleTwo.event}</p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-4 col-lg-4">
                    <img
                        className="Apex-team"
                        alt="ApexTeam"
                        src={scheduleTwo.apexLogo}
                    />
                </div>
                <div className="col-3 col-lg-3" style={{textAlign:"center", marginTop:"30px"}}>
                    <p className="match">GAME {scheduleTwo.gameMatch}</p>
                    <p>VS</p>
                </div>
                <div className="col-4 col-lg-4">
                    <img
                        className="Apex-team"
                        alt="OpponentTeam"
                        src={scheduleTwo.OpponentTeam}
                    />
                </div>
            </div>
        </div>
    ))
}

const showThirdSchedules = (thirdBatch) => {
    return thirdBatch.map(scheduleThree => (
        <div key={scheduleThree.id} className="col-3 col-lg-3  box-container-col">
            <div className="row">
                <div className="col-3 col-lg-3">
                    <img className="GameType" src={scheduleThree.GameType} alt="MPL Season"/>
                    
                </div>
                <div className="col-7 col-lg-7" style={{padding:"0"}}>
                    <p>{scheduleThree.date}</p>
                    <p>{scheduleThree.season}</p>
                    <p>{scheduleThree.event}</p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-4 col-lg-4">
                    <img
                        className="Apex-team"
                        alt="ApexTeam"
                        src={scheduleThree.apexLogo}
                    />
                </div>
                <div className="col-3 col-lg-3" style={{textAlign:"center", marginTop:"30px"}}>
                    <p className="match">GAME {scheduleThree.gameMatch}</p>
                    <p>VS</p>
                </div>
                <div className="col-4 col-lg-4">
                    <img
                        className="Apex-team"
                        alt="OpponentTeam"
                        src={scheduleThree.OpponentTeam}
                    />
                </div>
            </div>
        </div>
    ))
}

const Schedule = () => {
    const firstBatch = [
        {   
            GameType: MobileLegendsMPL,
            date: '01/01/01',
            season: 'MPL SEASON 10',
            event: 'FINALS (MAIN STAGE)',
            apexLogo: ApexLogo,
            gameMatch: '1',
            OpponentTeam: GeekFamLogo
        },
        {
            GameType: DotaLogo,
            date: '01/01/01',
            season: 'THE INTERNATIONAL 11',
            event: 'OPEN QUALIFIERS',
            apexLogo: ApexLogo,
            gameMatch: '1',
            OpponentTeam: FnaticLogo
        },
        {
            GameType: MobileLegendsMPL,
            date: '01/01/01',
            season: 'MPL SEASON 12',
            event: 'FINALS (MAIN STAGE)',
            apexLogo: ApexLogo,
            gameMatch: '1',
            OpponentTeam: GeekFamLogo
        },
        ];

    const secondBatch = [
        {   
            GameType: MobileLegendsMPL,
            date: '01/01/01',
            season: 'MPL SEASON 6',
            event: 'FINALS (MAIN STAGE)',
            apexLogo: ApexLogo,
            gameMatch: '1',
            OpponentTeam: GeekFamLogo
        },
        {
            GameType: MobileLegendsMPL,
            date: '01/01/01',
            season: 'MPL SEASON 6',
            event: 'FINALS (MAIN STAGE)',
            apexLogo: ApexLogo,
            gameMatch: '1',
            OpponentTeam: GeekFamLogo
        },
        {
            GameType: MobileLegendsMPL,
            date: '01/01/01',
            season: 'MPL SEASON 6',
            event: 'FINALS (MAIN STAGE)',
            apexLogo: ApexLogo,
            gameMatch: '1',
            OpponentTeam: GeekFamLogo
        },
        ];

        const thirdBatch = [
            {   
                GameType: MobileLegendsMPL,
                date: '01/01/01',
                season: 'MPL SEASON 6',
                event: 'FINALS (MAIN STAGE)',
                apexLogo: ApexLogo,
                gameMatch: '1',
                OpponentTeam: GeekFamLogo
            },
            {
                GameType: MobileLegendsMPL,
                date: '01/01/01',
                season: 'MPL SEASON 6',
                event: 'FINALS (MAIN STAGE)',
                apexLogo: ApexLogo,
                gameMatch: '1',
                OpponentTeam: GeekFamLogo
            },
            {
                GameType: MobileLegendsMPL,
                date: '01/01/01',
                season: 'MPL SEASON 6',
                event: 'FINALS (MAIN STAGE)',
                apexLogo: ApexLogo,
                gameMatch: '1',
                OpponentTeam: GeekFamLogo
            },
            ];

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
                    height: `30vh`,
                }}
                >
                    <Slider {...settings}>
                        <div>
                            <div className="caption-schedules">
                                <div className="row justify-content-center box-container-row" >
                                    {showFirstSchedules(firstBatch)}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="caption-schedules">
                                <div className="row justify-content-center box-container-row" >
                                    {showSecondSchedules(secondBatch)}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="caption-schedules">
                                <div className="row justify-content-center box-container-row" >
                                    {showThirdSchedules(thirdBatch)}
                                </div>
                            </div>
                        </div>
                    </Slider>
            </div>
        </>
    );
};

export default Schedule;
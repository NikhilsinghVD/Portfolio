import React from 'react';
import './About.css';


const About = () => {
    return (
        <div className='about-me-section aboutme-inside my-5' id='aboutme'>
            <div className='d-flex flex-column'>
                <span className='about-me-text'>About me</span>
                <span className='why-text-sub'>Why Chose me?</span>
                <div className='row justify-content-center shadow-lg my-5 about-me-box'>
                    <div className='col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center'>
                        <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_pcths4kq.json"
                            background="transparent" speed="1"
                            style={{ width: "500px", height: "500px" }}
                            loop autoplay>
                        </lottie-player>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column'>
                        <span className='some-text-about-me'>
                            Full Stack web and mobile developer with background knowledge in MERn Stack with redux,
                            along with a knack of a building applications with utmost efficiency.strong profetional with a
                            BSC willing to be an asset for an organization
                        </span>
                        <span className='few-highlights'>
                            <span className='few-text'>Here are few highlights:</span>
                            <span className='few-list'>
                                <ul>
                                    <li>Interactive front end as per design</li>
                                    <li>Managing large application with the help of Redux</li>
                                    <li>Single page Application</li>
                                </ul>
                            </span>
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;
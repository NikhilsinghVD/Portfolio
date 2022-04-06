import React from 'react';
import './Resume.css';
import '../about/About.css';
import 'font-awesome/css/font-awesome.css';
import { useState } from 'react';
import Education from './resume_components/Education';
import Work from './resume_components/Work';
import Programming from './resume_components/Programming';
import Project from './resume_components/Project';

const Resume = () => {
    const [education, seteducation] = useState(true);
    const [work, setwork] = useState(false);
    const [programming, setprogramming] = useState(false);
    const [projects, setprojects] = useState(false);

    const SetAllFalse = () => {
        seteducation(false);
        setwork(false);
        setprogramming(false);
        setprojects(false);
    }

    const ChangeState = (function1, state1) => {
        SetAllFalse();
        function1(state1);
    }

    return (
        <div className='resume-outer-section d-flex flex-column' id='resumenik'>
            <span className='about-me-text'>Resume</span>
            <span className='why-text-sub'>My Formal Bio Details</span>
            <div className='resume-new-section row'>
                <div className='col-lg-4 col-md-4 col-sm-12 resume-left-section d-flex flex-row px-0 shadow-lg'>
                    <div className='d-flex flex-column bg-new'>
                        <i class='fa fa-graduation-cap icons-span'></i>
                        <i className="fa fa-briefcase icons-span"></i>
                        <span className="fa fa-laptop icons-span"></span>
                        <span className='fa fa-area-chart icons-span'></span>
                    </div>
                    <div className='d-flex flex-column'>
                        <span className={education === false ? 'resume-option-items' : 'selected resume-option-items'} onClick={() => { ChangeState(seteducation, true) }}>Education</span>
                        <span className={work === false ? 'resume-option-items' : 'selected resume-option-items'} onClick={() => { ChangeState(setwork, true) }}>Work</span>
                        <span className={programming === false ? 'resume-option-items' : 'selected resume-option-items'} onClick={() => { ChangeState(setprogramming, true) }}>Programing</span>
                        <span className={projects === false ? 'resume-option-items' : 'selected resume-option-items'} onClick={() => { ChangeState(setprojects, true) }}>Projects</span>
                    </div>
                </div>
                <div className='col-lg-8 col-md-8 resume-right-section'>
                    {education === true && <Education />}
                    {work === true && <Work />}
                    {programming === true && <Programming />}
                    {projects === true && <Project />}
                </div>
            </div>
        </div>
    );
}

export default Resume;
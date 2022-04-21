import React from 'react';
import './Work.css';

const Work = () => {
    return (
        <div className='work-inside-new mx-2 my-4'>
            <div className='d-flex flex-coloumn justify-content-between'>

                <span className='company-name'>Saffire Softtech</span>
                <span className='year-passout'>2020-present</span>
            </div>
            <div className='d-flex flex-column'>
                <span className='Position'>Frontend Developer</span>
                <span className='Desp-position'>
                    <ul>
                        <li>Maintaing the e_Store project which drives heavy traffic.</li>
                        <li>Creating reusable components.</li>
                        <li>Custom Design components as per clients requirement.</li>
                    </ul>
                </span>
            </div>
        </div>
    )
}

export default Work;
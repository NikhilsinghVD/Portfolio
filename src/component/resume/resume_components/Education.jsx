import React from 'react';
import './Education.css'
const Education = () => {
    return (
        <div className='d-flex flex-column'>
            <div className='education-one my-4 justify-content-between d-flex flex-row'>
                <div className='d-flex flex-column new-one'>
                    <span className='university-name'>Nagpur University</span>
                    <span className='university-degree'>Bachlor Degree in Mechanical</span>
                </div>
                <div>
                    <span className='year-passout'>2017</span>
                </div>
            </div>
            <div className='education-one my-4 justify-content-between d-flex flex-row'>
                <div className='d-flex flex-column new-one'>
                    <span className='university-name'>Maharashtra State Board of Secondary & Higher Secondary Education, Pune</span>
                    <span className='university-degree'>Higher Secondary Education</span>
                </div>
                <div>
                    <span className='year-passout'>2012</span>
                </div>
            </div>
        </div>
    )
}

export default Education;
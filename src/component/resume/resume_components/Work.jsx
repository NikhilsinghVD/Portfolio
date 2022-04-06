import React from 'react';
import './Work.css';

const Work = () => {
    return (
        <div className='work-inside-new mx-2 my-4'>
            <div className='d-flex flex-coloumn justify-content-between'>

                <span className='company-name'>Job Title</span>
                <span className='year-passout'>2021-present</span>
            </div>
            <div className='d-flex flex-column'>
                <span className='Position'>Position</span>
                <span className='Desp-position'>
                    <ul>
                        <li>Description</li>
                        <li>Description</li>

                    </ul>
                </span>
            </div>
        </div>
    )
}

export default Work;
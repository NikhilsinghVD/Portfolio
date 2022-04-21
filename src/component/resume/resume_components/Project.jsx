import React from 'react';

const Project = () => {
    return (
        <>
            <div className='d-flex flex-column'>
                <div className='education-one my-4 justify-content-between d-flex flex-row'>
                    <div className='d-flex flex-column new-one'>
                        <span className='university-name'>E-Commerse Application</span>
                        <span className='university-degree'>React & Redux</span>
                    </div>
                    <div>
                        <span className='year-passout'>2021</span>
                    </div>
                </div>
                <div className='education-one my-4 justify-content-between d-flex flex-row'>
                    <div className='d-flex flex-column new-one'>
                        <span className='university-name'>Admin Dashboard</span>
                        <span className='university-degree'>React</span>
                    </div>
                    <div>
                        <span className='year-passout'>2021-2022</span>
                    </div>
                </div>
                <div className='education-one my-4 justify-content-between d-flex flex-row'>
                    <div className='d-flex flex-column new-one'>
                        <span className='university-name'>Movie App</span>
                        <span className='university-degree'>React & Redux</span>
                    </div>
                    <div>
                        <span className='year-passout'>2022</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project;
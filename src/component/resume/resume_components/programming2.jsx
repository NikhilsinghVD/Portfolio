import React from 'react';

const Programming2 = () => {
    return (
        <>
            <div className='d-flex flex-column'>
                <div className='education-one my-4 justify-content-between d-flex flex-row'>
                    <div className='d-flex flex-column new-one'>
                        <span className='university-name'>Languages</span>
                        <span className='university-degree'>JavaScript(ES5+6)</span>
                    </div>
                </div>
                <div className='education-one my-4 justify-content-between d-flex flex-row'>
                    <div className='d-flex flex-column new-one'>
                        <span className='university-name'>Front End </span>
                        <span className='university-degree'>HTML,CSS3,SASS</span>
                    </div>
                </div>
                <div className='education-one my-4 justify-content-between d-flex flex-row'>
                    <div className='d-flex flex-column new-one'>
                        <span className='university-name'>Client Scripting</span>
                        <span className='university-degree'>React</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Programming2;
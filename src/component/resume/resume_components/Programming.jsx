import React from 'react';
import './Programming.css';

const Programming = () => {
    const value = [
        {
            text: "javascript",
            percentage: 70
        },
        {
            text: "React",
            percentage: 72
        },
        {
            text: "Redux",
            percentage: 55
        },
        {
            text: "HTML",
            percentage: 80
        },
        {
            text: "SCSS",
            percentage: 85
        }
    ]
    return (
        <div>
            <div className='row'>
                {value.map((value, index) => {
                    return (
                        <div className='col-lg-6 col-md-6 col-sm-12 my-2'>
                            <span className='language'>{value.text}</span>
                            <div className='progress-some'>
                                <div className='progress-new' style={{ width: `${value.percentage}%` }}></div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Programming;
import React from 'react';
import './Testimonials2.css';
import 'font-awesome/css/font-awesome.css';

const Testimonials2 = () => {
    return (
        <div className='testi'>
            <div className='d-flex flex-column'>
                <span className='about-me-text'>Testimonials</span>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="face front-face"> <img src={"https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"} alt="" className="profile" />
                                <div className="pt-3 text-uppercase name"> Sumit Kamble</div>
                                <div className="designation">React Developer</div>
                            </div>
                            <div className="face back-face">
                                <div className="testimonial"> He Knows What Exact customer want from him. </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="face front-face"> <img src={"https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"} alt="" className="profile" />
                                <div className="pt-3 text-uppercase name">Shubham </div>
                                <div className="designation">Full Stack Developer</div>
                            </div>
                            <div className="face back-face">
                                <div className="testimonial"> Really good, you have saved our business! </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="face front-face"> <img src={"https://images.unsplash.com/photo-1614574762522-6ac2fbba2208?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjY2fHxtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"} alt="" className="profile" />
                                <div className="pt-3 text-uppercase name"> Unknown </div>
                                <div className="designation">Full Stack webdeveloper</div>
                            </div>
                            <div className="face back-face">
                                <div className="testimonial"> His Designs are preety good and responsive as well  </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials2;
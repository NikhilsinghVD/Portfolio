import React, { useEffect, useState, useRef } from 'react';
import me from '../../img/me2.png';
import './Home.css';
import Typed from "typed.js";
const Home = () => {
    const [opennav, setopennav] = useState(false);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                "Enthusiastic React Developer",
                "Knowledge Of Redux"],
            starDelay: 0,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            smartBackspace: true,
            loop: true,
            showCursor: true,
            autoInsertCss: true,
            cursorChar: "|"
        });
        return () => {
            typed.destroy();
        }
    }, [])
    const el = useRef(null);


    return (
        <div>
            <div className='navbar-option-mobile bg-new fixed-top'>
                <div className='d-flex flex-row justify-content-between'>
                    <span className='brand-name d-flex aling-items-center'></span>
                    <div className='bars' onClick={() => { setopennav(!opennav) }}> </div>
                </div>
            </div>
            <nav className={!opennav ? "d-flex transition-all bg-new nav-mobile px-9 py-5 flex-rows" : "d-flex bg-new nav-mobile-new transition-all px-9 py-5 flex-rows"}>
                <span className='brand-name'></span>
                <div className='d-flex flex-rows'>
                    <a href="#home" className='mx-4 nav-items' onClick={() => { setopennav(false) }}>Home</a>
                    <a href="#aboutme" className='mx-4 nav-items' onClick={() => { setopennav(false) }}>About me</a>
                    <a href="#resumenik" className='mx-4 nav-items' onClick={() => { setopennav(false) }}>Resume</a>
                    <a href="#testimonials" className='mx-4 nav-items' onClick={() => { setopennav(false) }}>Testimonial</a>
                    <a href="#contactme" className='mx-4 nav-items' onClick={() => { setopennav(false) }}>Contact me</a>
                </div>
            </nav>
            <div className='herosection py-2' id='home'>

                <div className='herosection-2 row justify-content-center'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='d-flex flex-column justify-content-center Im-text-section'>
                            <span className='Im-text'>
                                Hello, I'm <span className='name-Im-text'>Nikhilsingh Dhandoriya</span>
                            </span>
                            <span className='Im-text-enthusiastic py-2' ref={el}>
                                Enthusiastic React Developer
                            </span>
                            <span className='Im-text-subheading'>
                                Knack of building application with front end operations
                            </span>
                            <div className='d-flex flex-row justify-content-center mt-5'>
                                <a href='#contactme' className="btn-hire-me">Hire me</a>
                                <a href='#resumenik' className="btn-resume-me" /*target="_blank"*/>Get Resume</a>
                            </div>
                        </div>
                        <br /><br /><br /><br />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className='d-flex justify-content-center custom-div-outer-img'>
                            <img className='img-fluid custom-img' alt="heroimage" src={me} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
import React from 'react';
import './App.css';
import About from './component/about/About';
import Contact from './component/contact/Contact';
import Home from './component/home/Home';
import Resume from './component/resume/Resume';
import Testimonials2 from './component/testmonial/Testimonials2';



const App = () => {
    return (
        <div className='App'>
            <Home />
            <About />
            <Resume />
            <Testimonials2 />
            <Contact />
        </div>
    )
}

export default App;
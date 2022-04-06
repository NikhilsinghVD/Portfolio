import React, { useState, useRef } from 'react';
import './Contact.css';
// import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
// import { FormGroup } from '@mui/material';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [massage, setMassage] = useState('');
    const [subject, setSubject] = useState('');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ali9hfc', 'template_dhcoas9', form.current, 'WKQ8OKjG2YVkYOoQW')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='contact-me-part py-4' id='contactme'>
            <div className='relative-bg'>
                <div className='contact-inner-part d-flex flex-column my-5'>
                    <span className='about-me-text con-main'>Contact Me</span>
                    <span className='why-text-sub mb-5'>Lets Keep in Touch</span>
                    <div className='contact-me-card d-flex flex-row'>
                        <div className='col-lg-6 col-md-5 col-sm-12 left-contact px-2 py-2'>
                            <span className='get-in-touch mx-4 my-5'>Get In Touch</span>
                            <div className='py-2 d-flex flex-column contl'>
                                <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_bt7iqzns.json"
                                    background="transparent"
                                    speed="1" style={{ width: "300px", height: "300px" }}
                                    loop autoplay>
                                </lottie-player>
                                <div className='mob'><span className='fa fa-phone'></span><span className='mobno'>7020156227</span></div>
                                <div className='mob'><span className='fa fa-envelope'></span><span className='mobno'>nvd1994@gmail.com</span></div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-5 col-sm-12 my-auto'>
                            <div className='d-fex flex-column right-contact' >
                                <form ref={form} className='input-group d-flex flex-column' onSubmit={sendEmail}>
                                    <label>Name</label>
                                    <TextField value={name}
                                        onChange={(e) => { setName(e.target.value) }}
                                        type="text"
                                        placeholder='Enter your name'
                                        name="user_name" />
                                    <label>Email</label>
                                    <TextField value={email}
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        type="email"
                                        placeholder='Enter your email'
                                        name="user_email" />
                                    <label>Subject</label>
                                    <TextField value={subject}
                                        onChange={(e) => { setSubject(e.target.value) }}
                                        type="text"
                                        placeholder='Enter Subject'
                                        name="user_subject" />
                                    <label>Massages</label>
                                    <TextField
                                        multiline
                                        rows={4}
                                        value={massage} style={{ marginBottom: "10px" }}
                                        onChange={(e) => { setMassage(e.target.value) }}
                                        placeholder='Enter your Massage'
                                        name="message" />
                                    <input type="submit" className='btn btn-primary bg-brown' value="send Message" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
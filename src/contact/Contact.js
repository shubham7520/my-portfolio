import React from 'react'
import "./Contact.css";
import { SiMinutemailer } from "react-icons/si";
import { IoCall } from "react-icons/io5";

const Contact = () => {
    const handleCLick = (e) => {
        console.log("shubhm");
        e.preventDefault();
    }
    return (
        <section id='contact' className='contact'>
            <div className='contact-Container'>

                <div className='contact-left'>
                    <p>Contact <span style={{ color: "rgb(161, 15, 15)" }}>Me</span></p>
                    <div className='contact-detail'>
                        <SiMinutemailer color='rgb(135, 21, 82)' size={40} />
                        <b>shubhambaba143143@gmail.com</b>
                    </div>

                    <div className='contact-detail'>
                        <IoCall color='rgb(135, 21, 82)' size={40} />
                        <b>9875705225</b>
                    </div>

                </div>
                <div className='contact-right'>
                    <form className='contact-input'>
                        <input type="text" className='input' spellCheck='false' placeholder='enter name' />
                        <input type="email" className='input' spellCheck="false" placeholder='enter your mail' />
                        <textarea className='text-input' placeholder='Type here your message' spellCheck="false" />
                        <button type="submit" onClick={handleCLick}>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
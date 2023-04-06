import React from 'react'
import "./Footer.css"
import { GrGithub, GrTwitter, GrLinkedinOption } from "react-icons/gr";

const Footer = () => {
    const date = new Date()

    return (
        <div className='footer-Container'>
            <div className='footer-icon'>
                <GrGithub size={35} style={{ backgroundColor: "RGB(80, 152, 252)", margin: ".5rem", borderRadius: ".25rem", cursor: "pointer" }} />
                <GrLinkedinOption size={35} style={{ backgroundColor: "RGB(80, 152, 252)", margin: ".5rem", borderRadius: ".25rem", cursor: "pointer" }} />
                <GrTwitter size={35} style={{ backgroundColor: "RGB(80, 152, 252)", margin: ".5rem", borderRadius: ".25rem", cursor: "pointer" }} />
            </div>
            <div className='footer-title'>
                © {date.getFullYear()} Shubham Singh. All rights reserved.
            </div>
        </div>
    )
}

export default Footer
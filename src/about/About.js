import React from 'react'
import "./About.css";
import Profile from "../assets/about_pic.jpeg"

const About = () => {
    return (
        <section id='about' className='about-page'>
            <div className='about-Container'>
                <div className='image'>
                    <img src={Profile} className="about-image" alt='profile' />
                </div>
                <div className='about'>
                    <h1>About <span>Me</span></h1>
                    <b>Full Stack Developer</b>
                    <p>A Full Stack Developer with entry-level experience specializing in web development , user interface design, HTML, CSS, React-Js. Eager to tackle more complex problems and continue to find ways to maximize user efficiency.</p>
                    <p>I considered myself a quick learner so if you want something from me that I don't know then I'll make sure to learn that in very short amount of time without any special supervision. I'm also good in team work as I have worked in couple of group project in college.</p>
                    <a href='https://drive.google.com/file/d/1HgGVfFbetyiNO4fT207byZCDT_Ns5KfZ/view?usp=sharing' rel="noreferrer" target='_blank'><button>DOWNLOAD CV</button></a>

                </div>

            </div>

        </section>
    )
}

export default About
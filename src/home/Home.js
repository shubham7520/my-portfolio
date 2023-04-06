import React from 'react'
import "./Home.css"
import Profile from "../assets/my_pic.png"

const Home = () => {
    return (
        <section id='#' className='home-Container'>
            <div className='home'>
                <div className='name'>
                    <div>
                        <p>Hello, my name is</p>
                        <h1>Shubham <span>Singh</span></h1>
                    </div>
                    <h1 >I'am a Web Developer</h1>
                </div>
                <div className='profile'>
                    <img src={Profile} className="photo" alt='my_pic' />
                </div>
            </div>
        </section>
    )
}

export default Home
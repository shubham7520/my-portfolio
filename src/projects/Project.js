import React from 'react'
import "./Project.css";
import Slider from "../assets/imageSlider.jpg"
import Geolocation from "../assets/geoLocation.png"
import Weather from "../assets/weather.png";
import { HiExternalLink, HiCode } from "react-icons/hi";

const Project = () => {
    return (
        <section id='projects' className='project'>
            <div className='project-Container'>
                <h1><span style={{ color: "rgb(161, 15, 15)" }}>MY</span> PROJECTS</h1>
                <div className='my-project'>
                    <div className='p1'>
                        <img src={Weather} className="project-image" alt='projet-logo' />
                        <div className='content'>
                            <p className='project-title'>Weather App</p>
                            <p>It fetch current weather forecast data collection from the open source weather API.</p>
                            <div className='code-icon'>
                                <a href='https://github.com/shubham7520/weather-app' rel="noreferrer" target='_blank'><HiCode size="15%" className='icon' /></a>
                                <a href='https://shubham7520.github.io/weather-app/' rel="noreferrer" target='_blank'><HiExternalLink size="15%" className='icon' /></a>
                            </div>
                        </div>
                    </div>
                    <div className='p2'>
                        <img src={Geolocation} className="project-image" alt='projet-logo' />
                        <div className='content'>
                            <p className='project-title'>Geolocation-Attendance App</p>
                            <p>It tracks the student's location when connect our app and mark their attedance.</p>
                            <div className='code-icon'>
                                <a href='https://github.com/shubham7520/geo-location' rel="noreferrer" target='_blank'><HiCode size="15%" className='icon' /></a>
                                <a href='https://github.com/shubham7520/geo-location' rel="noreferrer" target='_blank'><HiExternalLink size="15%" className='icon' /></a>
                            </div>
                        </div>
                    </div>
                    <div className='p3'>
                        <img src={Slider} className="project-image" alt='projet-logo' />
                        <div className='content'>
                            <p className='project-title'>Image Slider</p>
                            <p>Here you can see different type of images according your tags.</p>
                            <div className='code-icon'>
                                <a href='https://github.com/shubham7520/image-slider' rel="noreferrer" target='_blank'><HiCode size="15%" className='icon' /></a>
                                <a href='https://shubham7520.github.io/image-slider/' rel="noreferrer" target='_blank'><HiExternalLink size="15%" className='icon' /></a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='more-project-btn'>
                    <a href='https://github.com/shubham7520?tab=repositories' rel="noreferrer" target='_blank'>More Projects</a>
                </div>

            </div>
        </section>
    )
}

export default Project
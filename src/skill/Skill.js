import React from 'react'
import SingleSkill from './SingleSkill';
import { data } from "./Data";
import "./Skill.css";

const Skill = () => {
    return (
        <section id="skills">
            <h1><span style={{ color: "rgb(161, 15, 15)" }}>MY</span> SKILLS</h1>
            <div className="skillContainer">
                {
                    data.map(singleData => <SingleSkill key={singleData.id} name={singleData.name} skillRating={singleData.skillRating} imageSrc={singleData.imageSrc} />)
                }
            </div>
        </section>
    )
}

export default Skill
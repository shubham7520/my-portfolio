import React from 'react'
import "./Skill.css"

const SingleSkill = ({ skillRating, imageSrc, name }) => {
    return (
        <div className="SkewedCard">
            <div className="SkewedCard-Name">
                <h4>{name}</h4>
            </div>
            <div className="SkewedCard-Image">
                <img style={{ width: '100%', aspectRatio: 2.5 }} src={imageSrc} alt="icon" />
            </div>
            <div className="Progress">
                <h6>Skill level</h6>
                <div className={`Progress-ProgressBar per${skillRating}`}><h5 style={{ textAlign: 'center', padding: 8, color: 'white', backgroundColor: "green", margin: 0 }}>{skillRating}%</h5></div>
            </div>
        </div>
    )
}

export default SingleSkill
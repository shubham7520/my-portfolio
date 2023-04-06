import React from 'react'
import "./Header.css";

const Header = () => {
    return (
        <div className='header-Container'>
            <div className='header-name'>
                <h1>
                    SBM
                </h1>
            </div>
            <div className='header-Content'>
                <a href='#'>Home</a>
                <a href='#about'>About</a>
                <a href='#skills'>Skills</a>
                <a href='#projects'>Projects</a>
                <a href='#contact'>Contact</a>
            </div>
        </div>
    )
}

export default Header;
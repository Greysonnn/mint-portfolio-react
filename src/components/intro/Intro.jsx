import React from 'react'
import './Intro.css'
import Me from '../../img/me.png'

export const Intro = () => {
  return (
    <div className='i'>
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Hello, my name is</h2>
                <h1 className='i-name'>Greyson</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">UI/UX Designer</div>
                        <div className="i-title-item">Web 3 Integrations</div>
                        <div className="i-title-item">Solidity Developer</div>
                        <div className="i-title-item">Technology Enthusiast</div>
                    </div>
                </div>
                <p className="i-desc">
                    I design and develop services for customers of all sizes, specializing in creating stylish, responsive, and modern websites.
                </p>
            </div>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={Me} alt="me" className='i-img ' />
        </div> 
    </div>
  )
}

export default Intro;
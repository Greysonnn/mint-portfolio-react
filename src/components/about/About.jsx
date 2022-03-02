import React from 'react'
import './About.css'
import Developer from '../../img/developer.jpg'
import Security from '../../img/security.png'
import Network from '../../img/network.png'
import CIW from '../../img/ciw.png'

function About() {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={Developer} alt="Dev" className='a-img' />
            </div>
        </div>
        <div className="a-right">
            <h1 className='a-title'>About Me</h1>
            <p className='a-sub'>Intrinsicly motivated, profoundly curious, and goal-oriented individual.</p>
            <p className='a-desc'>
                A lifelong pursuit of knowledge and a passion for modern design has shaped my professional interests. I relentlessly hone my skills and chase self improvement to be the best version of myself. Researching emerging technologies is simply an avocation for me and  has always been something that I enjoy to do in my spare time.
            </p>
            <div className="cert-wrapper">
                <img src={Security} alt="Security+" className='a-security'/>
                <img src={Network} alt="Network+" className='a-network'/>
                <img src={CIW} alt="CIW" className='a-ciw'/>
            </div>
        </div>
    </div>
  )
}

export default About;
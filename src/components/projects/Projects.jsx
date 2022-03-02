import React from 'react'
import './projects.css'

function Projects({img,link}) {
  return (
    <div className='p'>
        <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
        </div>
        <a href={link} target='_blank' rel='noreferror'>
            <img src={img} alt="projects" className='p-img' />
        </a>
    </div>
  )
}

export default Projects

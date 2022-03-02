import React from 'react'
import './projectlist.css'
import Projects from '../projects/Projects'
import {projects} from '../../data'

const Projectlist = () => {
  return (
    <div className='pl'>
        <div className="pl-text">
            <h1 className='pl-title'>Inspired Creations</h1>
            <p className="pl-desc">
                Give my live portfolio sites a look. Also feel free to see the source code on my <a href='https://github.com/Greysonnn' target='_blank'>GitHub</a> page, be sure to give them a star!
            </p>
        </div>
        <div className="pl-list">
          {projects.map((item) => (
              <Projects key={item.id} img={item.img} link={item.link} />
          ))}
        </div> 
    </div>
  );
};

export default Projectlist;
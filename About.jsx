import React from 'react'

import './about.css'
import dev from '../../img/dev.png'

const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
          <div className="a-card bg"></div> 
          <div className="a-card">
            <img src={dev} alt="" className="a-img" />
          </div>
        </div>
        <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          My name is Siziphiwe Topo I am a self-motivated, reliable, hardworking and honest individual, who is passionate about Technology and solving problems.
		  I completed my BSc Computer Science Degree at University of the Western Cape 
        </p>
        <p className="a-desc">
        I would like to join the company as a developer.
It will be a wonderful honor for me to be a part of your business since SovTech is a premier provider of custom software development in South Africa, having won numerous honors.
My conviction that technology can solve any problem is what inspired me to seek a profession in software development so that I could help to solve problems and improve the world.
And with the skills I've acquired, I think I can add value at Sovtech to produce programs and apps that are successful in every way And to advance my career and aid SovTech in expanding.
        </p>
        </div>
    </div>
  )
}

export default About

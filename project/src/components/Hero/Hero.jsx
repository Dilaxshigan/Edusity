import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/img/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Empower through knowledge, fostering critical thinking and lifelong learning for all.</h1>
           <p>It provides students with a platform for intellectual growth, personal development, and specialized 
            knowledge acquisition. Through a diverse array of courses, research opportunities, and extracurricular 
            activities, universities aim to prepare individuals for their chosen careers while fostering 
            critical thinking, problem-solving skills, and a lifelong passion for learning.</p>
            <button className='btn'>Explore more<img src={dark_arrow} alt="arrow" /></button>
      </div>
    </div>
  )
}

export default Hero

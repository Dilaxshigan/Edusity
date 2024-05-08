import React from 'react'
import './About.css'

import about_img from '../../assets/img/about.png'
import play_icon from '../../assets/img/play-icon.png'



const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='about-play-icon' />
      </div>
      <div className="about-right">
        <h3>ABOUT OUR UNIVERSITY</h3>
        <h2>Developing Today's Leaders of Tomorrow</h2>
        
          <p>
        At University Nurturing Tomorrow's Leaders Today, our mission 
        is clear: to empower students to excel academically and lead with 
        integrity. Through innovative teaching methods and mentorship programs, 
        we cultivate both academic prowess and leadership qualities, preparing 
        students to thrive in a rapidly evolving world.
        </p>
  
          <p>
        Our commitment to diversity and inclusion creates a vibrant community 
        where ideas flourish and differences are celebrated. By fostering collaboration 
        among students from diverse backgrounds and disciplines, we cultivate global 
        perspectives and equip graduates to tackle society's most pressing challenges.
        </p>
         
          <p>
        Beyond academics, we prioritize student well-being and personal growth. 
        Through leadership seminars, community service initiatives, and extracurricular 
        activities, we instill confidence, integrity, and a sense of purpose in every student. 
        At University Nurturing Tomorrow's Leaders Today, we're shaping the leaders of tomorrow, 
        one empowered student at a time.
        </p>
          
       </div>
    </div>
  )
}

export default About

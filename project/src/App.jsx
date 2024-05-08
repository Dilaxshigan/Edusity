import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App = () => {
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Title subTitle="Our Degree Programs" title="What we offer"/>
      <Programs/>
      <div className="container">
        <About/>
        <Title subTitle="Gallery" title="Photos of University"/>
      </div>
      <Campus/>
      <div className="container">
        <Title subTitle="Testimonials" title="What Student Says"/>
        <Testimonials/>
        <Title subTitle="Contact Us" title="Get In Touch"/>
        <Contact/>
        <VideoPlayer/>
        <Footer/>
      </div>
     </div>
  )
}

export default App

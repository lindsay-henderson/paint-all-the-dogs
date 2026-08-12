import '../styles/about.css'
import * as React from 'react';

export const About = () => {
  return (
    <div className="about" id="about" data-aos='fade-up'
    data-aos-duration="1000">
      <div className='about-me'>
      <h2>Hi! I'm Lindsay.</h2>
        <p>I am a lifelong artist and animal lover.  I began painting pet portraits because I wanted to give creative gifts to my friends and family that were personal and meaningful. I feel fortunate to have had the privilege of learning about many special animals over the past few years. <br></br> My goal as an artist is, and has always been, to make the world a little brighter through my work. </p>
      </div>
      <div className='about-me'>
      <img src="/menrusty.JPG" alt="Lindsay next to a white dog" />
      </div>
    </div>
  )
}

export default About
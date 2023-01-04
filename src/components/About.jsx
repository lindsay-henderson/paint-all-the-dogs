import '../styles/about.css'
import * as React from 'react';

export const About = () => {
  return (
    <div className="about" id="about">
      <div className='about-me'>
      <h2>Hi! I'm Lindsay.</h2>
        <p>I am a lifelong artist and animal lover.  I began painting pets because I wanted to give creative gifts to my friends and family that were personal and meaningful. Over the past few years I have the privilege of learning about  many special animals. My goal as an artist is, and has always been, to bring happiness through my work. </p>
      </div>
      <div className='about-me'>
      <img src="/menrusty.JPG" alt="Lindsay next to a white dog" />
      </div>
    </div>
  )
}

export default About
import * as React from 'react';
import Button from '@mui/material/Button';

export const About = () => {
  return (
    <div className="about" id="about">
      <a href='/ordering'>
        <Button variant="outlined">Order a Portrait</Button>
        </a>
      <h1>Hi! My Name is Lindsay.</h1>

      <p>I am a lifelong artist and animal lover.  I started painting pets because I wanted to give creative gifts to my friends and family that were personal and meaningful. I love getting to see photos of people's special family members, and hope that I can bring a little joy through my work. </p>
    </div>
  )
}

export default About
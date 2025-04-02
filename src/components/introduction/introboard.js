import React from 'react'; 
import './introboard.css'; 

export default function IntroBoard() { 
  return (
    <div className="intro-board-container"> 
        <h1 className="my-name">John Nguyen</h1> 
        <h2 className="job-title">Software Developer</h2>

        <p className="about-me">
          As a software developer I enjoy turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, you can find me exploring new technologies or enjoying a good cup of coffee.
        </p>

        <p>Test</p>
    </div>
  );
}
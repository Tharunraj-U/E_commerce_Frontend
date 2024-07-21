import React from 'react';
import '../Styles/About.css'; 
import  tharun from '../assets/tharun.jpg'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <img src={tharun} alt="Tharun" className="about-image" />
        <div className="about-text">
          <h1>About Me</h1>
          <p>Hi, I'm Tharun. I'm a passionate Spring Boot full-stack developer with a keen interest in building robust and scalable web applications. I specialize in creating dynamic and interactive user interfaces with React and developing secure and efficient back-end systems with Spring Boot. My goal is to continuously learn and apply best practices to deliver high-quality software solutions.</p>
        </div>
      </div>
    </div>
  );
};

export default About;

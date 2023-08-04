import React from 'react';
import './index.css';

function App() {
  return (
    <div >
      <header>
      <nav className="navbar">
        <a href="#home" className="active">Home</a>
				<a href="#about">About</a>
				<a href="#skills">My Skills</a>
				<a href="#services">Services</a>
				<a href="#mywork">My Works</a>
				<a href="#contact">Contact</a>
      </nav>
      </header>
      <div className="container">
        <div className="header">
          <h1>Welcome to My Portfolio</h1>
        </div>
        <div className="cources">
          <h4>We are providing a several types of coding copurces for students.</h4>
          <div className="cource_img">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS"/>
            <img src="https://i0.wp.com/theicom.org/wp-content/uploads/2016/03/js-logo.png?ssl=1" alt="Javascript"/>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="about_us">
          <h1>About Us</h1>
          <p>We are here to make coding easier to our students. We have an vision and goal to reached our students in higher place. So we are launchging this platform.</p>
          <h2>Our Vision:</h2>
          <p>At our core, we envision a world where coding is accessible to all, empowering individuals to turn their creative ideas into reality through technology. We strive to break down barriers and make coding easier, providing a platform that caters to students of all backgrounds, ages, and skill levels. Our vision is to be a catalyst for innovation, enabling our students to reach new heights and contribute to the advancement of society.</p>
        </div>
      </div>
    </div>
  );
}

export default App;

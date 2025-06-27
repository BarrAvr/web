import React from 'react';
import logo from './logo.svg';
import myProfilePhoto from './assets/myProfilePhoto.jpg';
import goldbridgeHome from './assets/goldbridge_home.jpg';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="navbar">
        <a href="#home" className="nav-link">The Start</a>
        <div className="navbar-right">
          <a href="#projects" className="nav-link">What I am working on!</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#contact" className="nav-link">Contact Me</a>
        </div>
      </div>
      <section id="home" className="section">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <img src={myProfilePhoto} alt="My Profile Photo" className="my-profile-photo" /> */}
          <p className="title">
            Welcome to my Website!
          </p>
          <p>
            - Barr Avrahamov
          </p>
        </header>
      </section>
      <section id="projects" className="section">
        <h1 style={{textAlign: 'left', marginLeft: 200}}>What I am working on!</h1>
        <div className="container">
          <div className="content-left">
            <h2 >MediSensor Technologies:</h2>
            <p>Currently a Software Engineer at MediSensor, 
              a health tech startup developing smart, connected systems to help 
              people stay on track with their medications. We’re building an 
              IoT-powered platform that integrates real-time device data with a 
              cloud-based backend to support patient wellness. I work across the 
              stack—improving features, optimizing performance, and helping deploy 
              scalable infrastructure using tools like AWS, React, and serverless</p>
          </div>
          <div className="content-right">
            <iframe
                src="https://medisensor.tech"
                width="100%"
                height="600px"
                style={{ 
                  width: '100%',
                  height: '400px',
                  border: 'none',
                  borderRadius: '10px',
                  overflow: 'hidden'
                }}
                title="Embedded Site"
              />
          </div>
        </div>
        <div className="container">
          <div className="content-left">
            <h2>Goldbridge:</h2>
            <p>On the side, I'm also a Software Engineer at Goldbridge.AI, an early-stage 
              startup focused on building AI-powered tools to enhance personal productivity 
              and online presence. It's a passion project of mine where I've led front-end 
              development for core pages like the landing page, profile page, and affiliate 
              page, while also contributing to the backend architecture. I've helped design 
              interactive features, integrate user data management, and deploy the full 
              application using modern web technologies in a Dockerized environment.</p>
          </div>
          <div className="content-right">
          <img src={goldbridgeHome} alt="Goldbridge Home" className="goldbridge-home" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

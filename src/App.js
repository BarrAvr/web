import React from 'react';
import logo from './logo.svg';
import myProfilePhoto from './assets/myProfilePhoto.jpg';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="navbar">
        <a href="#home" className="nav-link">The Start</a>
        <div className="navbar-right">
          <a href="#about" className="nav-link">What I am working on!</a>
          <a href="#projects" className="nav-link">Skills</a>
          <a href="#contact" className="nav-link">Contact Me</a>
        </div>
      </div>
      <section id="home" className="section">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <img src={myProfilePhoto} alt="My Profile Photo" className="my-profile-photo" /> */}
          <p>
            Welcome to my Website!
          </p>
        </header>  
      </section>
      <section id="about" className="section">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <img src={myProfilePhoto} alt="My Profile Photo" className="my-profile-photo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>  
      </section>
    </div>
  );
}

export default App;

import React from 'react';
import '../App.css';

function Navigation() {
  return (
    <div className="topnav">
  <a className="active" href="#home">About Me</a>
  <a href="#myWork">Portfolio</a>
  <a href="#skills">Resume</a>
  <a href="#contact">Contact Me</a>
</div>
  );
}

export default Navigation;
  
  
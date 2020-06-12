import React from 'react';
import './NavBar.css';
import experience from "./images/nav-experience.png";
import education from "./images/nav-education.png";
import skills from "./images/nav-skills.png";
import projects from "./images/nav-projects.png";
import about from "./images/nav-about.png";

const Footer = () =>{
    return <div id="NavBar" className="navbar">
                 <div><a href="#AboutMe"><img className="nav-icon" src={about} alt="about" />About Me</a></div>
                 <div><a href="#Experience"><img className="nav-icon" src={experience} alt="experience" /> Experience <br /></a></div>
                 <div><a href="#Education"><img className="nav-icon" src={education} alt="education" />Education</a></div>
                 <div><a href="#Skills"><img className="nav-icon" src={skills} alt="skills" />Skills</a></div>
                 <div><a href="#Projects"><img className="nav-icon" src={projects} alt="projects" />Projects</a></div>
            </div>
}

export default Footer;
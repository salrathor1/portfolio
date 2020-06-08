import React from 'react';
import './Projects.css';
import eflplus from "./images/eflplus.png";
import aclogo from "./images/aclogo.png";
import remtrek from "./images/remtrek.png";


const Projects = () => {
    return (
        <div id="Projects" className="projects-container">
            <div id="projects-section">
                <h1>Projects</h1>
            </div>
            <div className="projects">
                <div className="project-box" id="acLogo">
                    <h3 className="center">Arabic Classroom</h3>
                    <p className="center logo"><img src={aclogo} alt="eflplus-logo" /></p>
                    <p className="center">Arabic Classroom is an online tuition platform for Arabic and learning to read the Qur'aan. It adopts a blended learning approach to education where students have short tuition sessions and online content to practice what they learn.</p>
                    <p className="center">[Currently rebuilding]</p>
                </div>
                <div className="project-box" id="acLogo">
                    <h3 className="center">EFL Plus</h3>
                    <p className="center logo"><img src={eflplus} alt="eflplus-logo" /></p>
                    <p className="center">EFL Plus is a social network and recruitment website for the English language teaching community.</p>
                    <p className="center">[Currently rebuilding]</p>
                </div>
                <div className="project-box" id="acLogo">
                    <h3 className="center">RemTrek</h3>
                    <p className="center logo" ><img src={remtrek} alt="eflplus-logo" /></p>
                    <p className="center">RemTrek is a collabortive social diary. It's a network that allows people to share their memories.</p>
                    <p className="center">[Currently rebuilding]</p>
                </div>           
            </div>
        </div>
    )
}

export default Projects;
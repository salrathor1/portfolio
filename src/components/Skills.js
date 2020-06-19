import React from 'react';
import './Skills.css';

const Projects = () => {
    return (
        <div id="Skills" className="skills-container">
            <h1>Skills</h1>
            <div className="skills">
                <div className="skill-item blue"><h2>HTML + CSS</h2></div>
                <div className="skill-item yellow"><h2>Javascript</h2></div>
                <div className="skill-item blue"><h2>React</h2></div>
            </div>
            <div className="skills">
                <div className="skill-item yellow"><h2>Node/Express</h2></div>
                <div className="skill-item blue"><h2>Python</h2></div>
                <div className="skill-item yellow"><h2>I have previously looked at PHP and C# tutorials (Unity Gaming Engine)</h2></div>
            </div>
        </div>
    )
}

export default Projects;
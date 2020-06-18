import React from 'react';
import './NavBar.css';
import experience from "./images/nav-experience.png";
import education from "./images/nav-education.png";
import skills from "./images/nav-skills.png";
import projects from "./images/nav-projects.png";
import about from "./images/nav-about.png";

// import Education from '@material-ui/icons/School';
// import Experience from '@material-ui/icons/Work';


class Footer extends React.Component {

      render() {
        
    return <div id="NavBar" className="navbar">
                
                {/* {<Education />}
                {<Experience />} */}
                 <div><a className="nav-item" href="#AboutMe"><img className="nav-icon" src={about} alt="about" />About Me</a></div>
                 <div className="nav-item"><a href="#Experience"><img className="nav-icon" src={experience} alt="experience" /> Experience <br /></a></div>
                 <div className="nav-item"><a href="#Education"><img className="nav-icon" src={education} alt="education" />Education</a></div>
                 <div className="nav-item"><a href="#Skills"><img className="nav-icon" src={skills} alt="skills" />Skills</a></div>
                 <div className="nav-item"><a href="#Projects"><img className="nav-icon" src={projects} alt="projects" />Projects</a></div>
            </div>
}
}
export default Footer;
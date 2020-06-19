import React from 'react';
import './Projects.css';
import eflplus from "./images/eflplus.png";
import aclogo from "./images/aclogo.png";
import remtrek from "./images/remtrek.png";

import dicegame from "./images/dicegame.png";
import cyberpet from "./images/cyberpet.png";
import twitterclone from "./images/twitterclone.png";


const Projects = () => {
    return (
        <div id="Projects" className="projects-container">
            <div id="projects-section">
                <h1>Projects</h1>
            </div>

            <div id="projects-section">
                <h2 className="center">Small Projects</h2>
            </div>
            <div className="projects">
                <div className="project-box" id="acLogo">
                    <h3 className="center">Dice Game</h3>
                    <p className="center logo"><img class="project-img" src={dicegame} alt="dicegame" /></p>
                    <p className="center">This was a challenge to create a two-player dice game in JS. It's a turn based game where a player needs to get to a score of 20 before rolling a number 1. A player can also hold their score and pass their turn to the other player.</p>
                    <p className="center"><a href="https://salrathor1.github.io/dicegamev2/" target="_blank" rel="noopener noreferrer"git >[click to view]</a></p>
                </div>
                <div className="project-box" id="acLogo">
                    <h3 className="center">Cyber Pet</h3>
                    <p className="center logo"><img class="project-img" src={cyberpet} alt="cyberpet" /></p>
                    <p className="center">
                        This was a cyber pet challenge. The goal is to keep the pet alive for as long as possible. The user can select a name and has a choice of three characters. The stats reduce as time passes and the user needs to feed, give water or play with their pet before they hit 0. The goal is to get the highest number of moves!
                    </p>
                    <p className="center"><a href="https://salrathor1.github.io/cyberpet/" target="_blank" rel="noopener noreferrer">[click to view]</a></p>
                </div>
                <div className="project-box" id="acLogo">
                    <h3 className="center">Twitter Clone</h3>
                    <p className="center logo" ><img class="project-img" src={twitterclone} alt="twitteclone" /></p>
                    <p className="center">
                        This was a group project which I led. We developed a twitter clone where the user could push new tweets which were temporarily stored.

                        We split the task into sections and split the team of 4 into two. We worked together pair-programming which was an excellent experience. We regularly checked-in and updated our project on git. 
                    </p>
                    <p className="center"><a href="https://salrathor1.github.io/twitterclone/" target="_blank" rel="noopener noreferrer">[click to view]</a></p>
                </div>           
            </div>
            

            <div id="projects-section">
                <h2 className="center">Upcoming Big Projects</h2>
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
                    <p className="center">[Plan to rebuild]</p>
                </div>
                <div className="project-box" id="acLogo">
                    <h3 className="center">RemTrek</h3>
                    <p className="center logo" ><img src={remtrek} alt="eflplus-logo" /></p>
                    <p className="center">RemTrek is a collabortive social diary. It's a network that allows people to share their memories.</p>
                    <p className="center">[Plan to rebuild]</p>
                </div>           
            </div>
        </div>
    )
}

export default Projects;
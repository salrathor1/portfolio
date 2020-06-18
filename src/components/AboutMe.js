import React from 'react';
import './AboutMe.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
const MainContent = () => {
    return (
            <div id="AboutMe" className="wrapper">
                <div className="title">
                    <div className="bold-text">Junior Developer</div>
                    <div className="red-banner">'Make the world a better place with everything you do.'</div>
                    <div className="bold-text">Suleman Hasan Rathor</div>
                    <div className="red-banner">Thanks for being interested :)</div>
                </div>
                <div className="social">
                    <div className="social-left">
                        <a href="https://www.linkedin.com/in/suleman-rathor-1964b97b/" target="_blank" rel="noopener noreferrer" className="box social-item"><LinkedInIcon fontSize="large" /></a>
                        <a href="https://github.com/salrathor1" target="_blank" rel="noopener noreferrer" className="box social-item"><GitHubIcon fontSize="large" /> </a>
                        <a href="mailto:salrathor1@hotmail.com" rel="noopener noreferrer" target="_blank" id="contact" className=" box social-item"><MailIcon fontSize="large" /></a>
                    </div>
                    <div className="social-right">
                    <p>From the day we received our first family computer at the age of 7, I knew I wanted to work in tech when I grew up. However, with all the problems going on in the world, I decided to abandon my place on a Computer Games Technology degree to study Politics and then went on to teach English abroad. Fast forward a few years and the realisation that there are different ways to change the world, I found myself back in the world of tech creating an e-learning start-up. I have since decided to study coding in order to change careers and get back on track with my childhood dream.</p>
                    <p>Interests - Education | Reading | Travelling | Augmented & Virtual Reality | Machine Learning | Artificial Intelligence | Health, Nutrition & Fitness
</p>
                    <p>Languages: English, Urdu, Arabic</p>
                    </div>
                </div>
            </div>
    
    )
}

export default MainContent;
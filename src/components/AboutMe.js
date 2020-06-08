import React from 'react';
import './AboutMe.css';

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
                        <div className="box social-item"><img className="social-icon" src="images/linkedin.png" alt="" /> Linked In</div>
                        <div className="box social-item"><img className="social-icon" src="images/github.png" alt="" /> Git Hub</div>
                        <div id="contact" className=" box social-item"><img className="social-icon" src="images/mail.jpg" alt="" />Contact Me</div>
                    </div>
                    <div className="social-right">
                    <p>A startup kind of guy</p>
                    <p>Hobbies</p>
                    <p>Languages: English, Urdu, Arabic</p>
                    </div>
                </div>
            </div>
    
    )
}

export default MainContent;
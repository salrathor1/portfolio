import React from 'react';
import './Experience.css';
import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';

const AboutMe = () => {

    return (
        <div id="Experience" className="experience-container">
            <div id="experience-section">
                <h1>Experience</h1>
            </div>

    
        {/* start-- */}
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="Apr 2020 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
          >

            <h3 className="vertical-timeline-element-title">Code Nation</h3>
            <h4 className="vertical-timeline-element-subtitle">Manchester, UK</h4>
            <p>
              I have gained valuable experience using tech stacks such as HTML, CSS, Javascript, React, Node, Express, Handlebars, MongoDB & Mongoose. Further to this, I have experienced working in an Agile environment using tools such as Trello and Toggle. I have also participated in daily stand-up sessions and managed a team project where I broke the task down into smaller problems that we solved using pair-programming. In addition, I have delivered presentations which have allowed me to grow in confidence presenting tech-related information.
            </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Founded Arabic-Classroom.com</h3>
          <h4 className="vertical-timeline-element-subtitle">Warrington, UK</h4>
          <p>I founded Arabic Classroom because I believe online education is not making the most of the innovative teaching technologies available nowadays. The project has taught me a lot about creating and running a start-up. I have self-taught and used various software to create content, personally taught online sessions and liaised with web developers and designers. </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2017"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Studying Arabic</h3>
          <h4 className="vertical-timeline-element-subtitle">Cairo, Egypt</h4>
          <p> I took a year out to study Arabic at a private institute in Cairo. </p>
          <p> 
            I was fortunate to be able to take a year out to study Arabic. It was a great experience living in another country and being on the receiving side of education again. I felt my experience as a teacher really benefitted me as a student.

          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Nov18 - pres"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">AM Rathor Ltd</h3>
          <h4 className="vertical-timeline-element-subtitle">Warrington, UK</h4>
          <p> 
            Working part-time, I assist a virtual PA with a variety of back office administration tasks ranging from basic accounting to data entry and research.  
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Nov18 - pres"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">The Tuition Club</h3>
          <h4 className="vertical-timeline-element-subtitle">Manchester, UK</h4>
          <p> 
            I took up this temporary position teaching English and IT to children aged 7-14. I found that it was a challenging, but equally a rewarding and enjoyable experience.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2012 - 2017"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Teaching English</h3>
          <h4 className="vertical-timeline-element-subtitle">Al-Khobar, Saudi Arabia</h4>
          <p>
            I taught English at the University of Dammam and participated in the development of the e-Learning program as the joint-head of e-Learning. This involved liaising with management from both the English and e-Learning departments. I also trained teachers and ensured the proper implementation of the program. I gained confidence and many valuable skills during my time teaching and managing the e-Learning program.
          </p>
        </VerticalTimelineElement>

        
      </VerticalTimeline>
            {/* End-- */}

      

        </div>
    )
}

export default AboutMe;
import React from 'react';
import './Experience.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
          >

            <h3 className="vertical-timeline-element-title">Code Nation</h3>
            <h4 className="vertical-timeline-element-subtitle">Manchester, UK</h4>
            <p>Learning to code</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Founded Arabic-Classroom.com</h3>
          <h4 className="vertical-timeline-element-subtitle">Warrington, UK</h4>
          <p>Founded an online education platform for tutoring the Arabic language and how to read the Qur'aan</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2017"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Studying Arabic</h3>
          <h4 className="vertical-timeline-element-subtitle">Cairo, Egypt</h4>
          <p> Took a year out to study Arabic at a private institute in Cairo </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2012 - 2017"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Teaching English</h3>
          <h4 className="vertical-timeline-element-subtitle">Al-Khobar, Saudi Arabia</h4>
          <p> I taught English in the Eastern province of Saudi Arabia for almost 5 years. I worked on the exam committee and I was the join head of e-learning in my final year </p>
        </VerticalTimelineElement>

        
      </VerticalTimeline>
            {/* End-- */}

      

        </div>
    )
}

export default AboutMe;
import React from 'react';
import './Education.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';

const AboutMe = () => {

    return (
        <div id="Education" className="education-container">
            <div>
                <h1>Education</h1>
            </div>

        <div className="vertical-container">
        {/* start-- */}
        <VerticalTimeline>
          
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2011-2012"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">MA Teaching English as a Foreign Language</h3>
          <h4 className="vertical-timeline-element-subtitle">Manchester, UK</h4>
          <p> I studied a MA in Teaching English as a Foreign Language. </p>
          <p> Dissertation: “The Effectiveness of Using an LMS as a Pre-Task in EFL” </p>
          <p> 
            I studied an MA in Teaching English as a Foreign Language as I wanted to teach abroad. The course was a massive leap from Politics and was extremely theoretical. It gave me an insight into education and effective teaching methodologies.
          </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">BA Politics</h3>
          <h4 className="vertical-timeline-element-subtitle">Manchester, UK</h4>
          <p> I studied a BA in Politics due to my desire to change the world. </p>
          <p> 
            Although I didn't continue with a career in politics, I did benefit from this course. I learnt the importance of listening to others and how important it is to have knowledge of a subject before discussing it.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2004 - 2006"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">A-Levels</h3>
          <h4 className="vertical-timeline-element-subtitle">Manchester, UK </h4>
          <p>
          A Level: Computing, Economics, Business Studies
          AS-Level: Accounting & Finance
          </p>
        </VerticalTimelineElement>

       
      </VerticalTimeline>
            {/* End-- */}

            </div>

        </div>
    )
}

export default AboutMe;
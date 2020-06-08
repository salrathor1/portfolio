import React from 'react';
import './Education.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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
          // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">MA Teaching English as a Foreign Language</h3>
          <h4 className="vertical-timeline-element-subtitle">Manchester, UK</h4>
          <p> I studied a MA in Teaching English as a Foreign Language. </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">BA Politics</h3>
          <h4 className="vertical-timeline-element-subtitle">Manchester, UK</h4>
          <p> I studied a BA in Politics due to my desire to change the world. </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2004 - 2006"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">A-Levels</h3>
          <h4 className="vertical-timeline-element-subtitle">Manchester, UK </h4>
          <p>
          A Level: Computing, Economics, Business Studies
          AS-Level: Accounting & Finance
          </p>
        </VerticalTimelineElement>

        {/* <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }} */}
        {/* // icon={<StarIcon />} */}
        {/* /> */}
      </VerticalTimeline>
            {/* End-- */}

            </div>

        </div>
    )
}

export default AboutMe;
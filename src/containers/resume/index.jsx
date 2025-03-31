import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import PageHeaderContent from "../../components/pageHeaderContent";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import './styles.scss';

// Updated professional data
const resumeData = {
  experience: [
    {
      title: "Frontend Developer",
      subTitle: "TechSolutions Inc., Rabat, Morocco",
      period: "Jan 2023 - Present",
      description: "Developed responsive e-commerce applications using React, Redux, and Node.js. Improved site performance by 40% through code optimization and modern techniques."
    },
    {
      title: "Web Developer Intern",
      subTitle: "WeatherTech Solutions, Rabat, Morocco",
      period: "Jun 2022 - Dec 2022",
      description: "Created a weather forecast application using React and OpenWeatherMap API. Implemented geolocation features and responsive design for all devices."
    },
    {
      title: "Freelance Developer",
      subTitle: "Self-employed, Rabat, Morocco",
      period: "Jan 2022 - May 2022",
      description: "Designed and developed a travel booking platform for local tour companies. Integrated payment gateway and booking management system."
    }
  ],
  education: [
    {
      title: "Specialized Institute of Applied Technology NTIC",
      subTitle: "Rabat, Morocco",
      period: "2020 - 2022",
      description: "Specialized Technician in Digital Development. GPA: 3.8/4.0. Specialized courses in web development, mobile applications, and database management."
    },
    {
      title: "Imam Al Ghazali High School",
      subTitle: "Rabat, Morocco",
      period: "2017 - 2020",
      description: "Baccalaureate in Physical Sciences with French option. Honor student with distinction in mathematics and physics."
    }
  ],
  skills: [
    "JavaScript", "React.js", "Node.js", "HTML5/CSS3", "SASS/SCSS", 
    "Redux", "MongoDB", "Express.js", "Git", "Responsive Design", 
    "UI/UX", "REST APIs", "PHP", "MySQL"
  ]
};

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />
      
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__header-text">Professional Experience</h3>
          <VerticalTimeline 
            layout={'1-column'}
            lineColor="var(--yellow-theme-main-color)"
          >
            {resumeData.experience.map((item, i) => (
              <VerticalTimelineElement 
                key={i}
                className="timeline__vertical-timeline-element"
                contentStyle={{
                  background: 'rgba(0, 0, 0, 0.2)',
                  color: 'var(--yellow-theme-sub-text-color)',
                  border: '1.5px solid var(--yellow-theme-main-color)',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                }}
                date={item.period}
                icon={<MdWork />}
                iconStyle={{
                  background: '#181818',
                  color: 'var(--yellow-theme-main-color)',
                  boxShadow: '0 0 0 4px var(--yellow-theme-main-color)'
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.subTitle}
                  </h4>
                  <p className="vertical-timeline-element-description">
                    {item.description}
                  </p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        
        <div className="timeline__education">
          <h3 className="timeline__header-text">Education</h3>
          <VerticalTimeline 
            layout={'1-column'}
            lineColor="var(--yellow-theme-main-color)"
          >
            {resumeData.education.map((item, i) => (
              <VerticalTimelineElement 
                key={i}
                className="timeline__vertical-timeline-element"
                contentStyle={{
                  background: 'rgba(0, 0, 0, 0.2)',
                  color: 'var(--yellow-theme-sub-text-color)',
                  border: '1.5px solid var(--yellow-theme-main-color)',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                }}
                date={item.period}
                icon={<FaGraduationCap />}
                iconStyle={{
                  background: '#181818',
                  color: 'var(--yellow-theme-main-color)',
                  boxShadow: '0 0 0 4px var(--yellow-theme-main-color)'
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.subTitle}
                  </h4>
                  <p className="vertical-timeline-element-description">
                    {item.description}
                  </p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <div className="skills">
        <h3 className="skills__header-text">Technical Skills</h3>
        <div className="skills__content">
          {resumeData.skills.map((skill, index) => (
            <div className="skills__item" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
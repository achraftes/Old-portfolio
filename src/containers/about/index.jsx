import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from 'react-simple-animate';
import './styles.scss';
import ProfileImage from '../../images/147629152.jpeg';
import CV from '../../assets/Chikrabane-CV_F.pdf';

const personalDetails = [
    {
        label: "Name :",
        Value: "Chikrabane Achraf",
    },
    {
        label: "Age :",
        Value: "20",
    },
    {
        label: "Address :",
        Value: " Morocco / Rabat",
    },
    {
        label: "Email :",
        Value: "AchrafChikrabane@gmail.com",
    },
    {
        label: "Phone :",
        Value: "+212 707979725",
    },
];

const About = () => {
    const handleViewCV = () => {
        window.open(CV, '_blank');
    };

    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    {/* Left Section */}
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{ transform: "translateX(-900px)" }}
                        end={{ transform: "translatex(0px)" }}
                    >
                        <div className="profile-section"> <br /> <br />
                            <div className="profile-image-container">
                                <img 
                                    src={ProfileImage} 
                                    alt="Achraf Chikrabane" 
                                    className="profile-image" 
                                />
                            </div>
                            <h3>Full-stack developer</h3>
                            <p>
                                I am a Full-Stack Developer gifted in design,
                                website development and maintenance.
                                In-depth skills in HTML/CSS (Bootstrap),
                                Javascript, front-end frameworks (like React) and
                                back-end framework (Laravel). Passionate about solving
                                problems and creating innovative technological solutions.
                                Strong ability to work in a team and manage projects
                                from start to finish.
                            </p>
                        </div>
                    </Animate>

                    {/* Right Section */}
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{ transform: "translateX(500px)" }}
                        end={{ transform: "translatex(0px)" }}
                    >
                        <div className="personal-info">
                            <h3 className="personalInformationHeaderText">Personal Information</h3>
                            <ul>
                                {personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="titre">{item.label}</span>
                                        <span className="value">{item.Value}</span>
                                    </li>
                                ))}
                            </ul>
                            
                            {/* CV Buttons Section */}
                            <div className="cv-buttons-container">
                                <button 
                                    className="cv-button"
                                    onClick={handleViewCV}
                                >
                                    View CV
                                </button>
                                <a 
                                    href={CV} 
                                    download="Chikrabane-CV.pdf"
                                    className="cv-button"
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </Animate>
                </div>
            </div>
        </section>
    )
}

export default About;
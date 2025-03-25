import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from 'react-simple-animate'
import './styles.scss';
import { DiApple, DiAndroid, } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";



const personalDetails = [
    {
        label: "Name :",
        Value: "Chikrabane Achraf",
    },
    {
        label: "Age :",
        Value: "19",
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
    return (

        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper"><Animate
                    play
                    duration={1.5}
                    delay={1}
                    start={{
                        transform: "translateX(-900px)",
                    }}
                    end={{
                        transform: "translatex(0px)",
                    }}>
                    <h3> Full-stack developer</h3>
                    <p>I am a Full-Stack Developer gifted in design,
                        website development and maintenance.
                        In-depth skills in HTML/CSS (Bootstrap),
                        Javascript, front-end frameworks (like React) and
                        back-end framework (Laravel). Passionate about solving
                        problems and the creation of technological solutions
                        innovative.Strong ability to work in a team and
                        manage projects from start to finish.</p>
                </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(500px)",
                        }}
                        end={{
                            transform: "translatex(0px)",
                        }}>
                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {personalDetails.map((item, i) => (
                                <li key={i}>
                                    <span className="titre">{item.label}</span>
                                    <span className="value">{item.Value}</span>
                                </li>
                            ))}
                        </ul>
                    </Animate></div>
                {/* <div className="about__content__servicesWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(700px)",
                        }}
                        end={{
                            transform: "translatex(0px)",
                        }}>
                        <div className="about__content__servicesWrapper__innerContenet">
                            <div>
                                <FaDev size={60} color="var(--yellow-theme-main-color )" />
                            </div>
                            <div>
                                <DiAndroid size={60} color="var(--yellow-theme-main-color )" />
                            </div>
                            <div>
                                <FaDatabase size={60} color="var(--yellow-theme-main-color )" />
                            </div>
                            <div>
                                <DiApple size={60} color="var(--yellow-theme-main-color )" />
                            </div>
                        </div>
                        </Animate>
                </div> */}
            </div>
        </section>
    )
}
export default About
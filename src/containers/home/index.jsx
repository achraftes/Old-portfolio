import React from "react";
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate'
import './styles.scss';

const Home = () => {
    const navigate = useNavigate();
    const handleNavigateToContactMePage = () => {
        navigate("/contact")
    }
    return (
        <>
            <section id="home" className="home">
                <div className="home__text-wrapper">
                    <h1>
                        Hello, I'm Achraf <br />
                        Full-stack developer
                    </h1>
                </div>
                <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform:"translateY(550px)",
                }}
                end={{
                    transform:"translatex(0px)",
                }}>
                    <div className="home__contact-me">
                        <button onClick={handleNavigateToContactMePage}>Hire Me</button>
                    </div>
                </Animate>
                <Animate
                play
                duration={1.5}
                delay={1.5}
                start={{
                    transform:"translateY(550px)",
                    opacity: 0
                }}
                end={{
                    transform:"translateY(0px)",
                    opacity: 1
                }}>
                    <div className="home__social">
                        <a href="https://www.instagram.com/achraf_chkr/" className="home__social-icon" target="_blank" rel="noreferrer">
                            <i className="uil uil-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/achraf-chikrabane-850554291/" className="home__social-icon" target="_blank" rel="noreferrer">
                            <i className='bx bxl-linkedin'></i>
                        </a>
                        <a href="https://github.com/achraftes" className="home__social-icon" target="_blank" rel="noreferrer">
                            <i className="uil uil-github-alt"></i>
                        </a>
                    </div>
                </Animate>
            </section>
        </>
    )
}

export default Home;
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import './styles.scss';

const Home = () => {
    const navigate = useNavigate();
    const [particles, setParticles] = useState([]);
    
    const handleNavigateToContactMePage = () => {
        navigate("/contact");
    };
    
    // Create floating particles effect
    useEffect(() => {
        const createParticles = () => {
            const newParticles = [];
            const particleCount = 15;
            
            for (let i = 0; i < particleCount; i++) {
                newParticles.push({
                    id: i,
                    size: Math.random() * 10 + 2,
                    left: Math.random() * 100,
                    top: Math.random() * 100,
                    duration: Math.random() * 20 + 10,
                    delay: Math.random() * 5
                });
            }
            
            setParticles(newParticles);
        };
        
        createParticles();
    }, []);
    
    return (
        <>
            <section id="home" className="home">
                {/* Floating particles */}
                {particles.map(particle => (
                    <div
                        key={particle.id}
                        className="particle"
                        style={{
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            left: `${particle.left}%`,
                            top: `${particle.top}%`,
                            animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite alternate`
                        }}
                    />
                ))}
                
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
                        transform: "translateY(550px)",
                    }}
                    end={{
                        transform: "translateX(0px)",
                    }}
                >
                    <div className="home__contact-me">
                        <button onClick={handleNavigateToContactMePage}>Hire Me</button>
                    </div>
                </Animate>
                
                <Animate
                    play
                    duration={1.5}
                    delay={1.5}
                    start={{
                        transform: "translateY(550px)",
                        opacity: 0
                    }}
                    end={{
                        transform: "translateY(0px)",
                        opacity: 1
                    }}
                >
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
    );
};

export default Home;
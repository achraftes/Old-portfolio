import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import ImageOne from '../../images/image1.jpg';
import ImageTwo from '../../images/image2.jpg';
import ImageThree from '../../images/image3.jpg';
import ImageFour from '../../images/image4.jpg';
import ImageFive from '../../images/image5.jpg';
import ImageSix from '../../images/image6.jpg';
import "./styles.scss";
import { UilGithubAlt } from '@iconscout/react-unicons';

const portfolioData = [
    {
        id: 1,
        name: "Login System",
        image: ImageOne,
        link: 'https://github.com/achraftes',
        tech: ['React', 'Node.js', 'MongoDB']
    },
    {
        id: 2,
        name: "Contact Form",
        image: ImageTwo,
        link: 'https://github.com/achraftes',
        tech: ['React', 'Formik', 'Yup']
    },
    {
        id: 3,
        name: "E-commerce Platform",
        image: ImageThree,
        link: 'https://github.com/achraftes',
        tech: ['React', 'Redux', 'Stripe']
    },
    {
        id: 4,
        name: "About Page",
        image: ImageFour,
        link: 'https://github.com/achraftes',
        tech: ['SCSS', 'React', 'Framer Motion']
    },
    {
        id: 5,
        name: "Service Portal",
        image: ImageFive,
        link: 'https://github.com/achraftes',
        tech: ['React', 'GraphQL', 'Apollo']
    },
    {
        id: 6,
        name: "Contact API",
        image: ImageSix,
        link: 'https://github.com/achraftes',
        tech: ['Node.js', 'Express', 'PostgreSQL']
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">
            <PageHeaderContent
                headerText="My Portfolio"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="portfolio__content">
                <div className="portfolio__content__cards">
                    {portfolioData.map((item) => (
                        <div className="portfolio__content__cards__item" key={item.id}>
                            <div className="portfolio__content__cards__item__img-wrapper">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="portfolio__content__cards__item__img-wrapper__image"
                                />
                                <div className="portfolio__content__cards__item__img-wrapper__overlay">
                                    <h3>{item.name}</h3>
                                    <div className="tech-stack">
                                        {item.tech.map((tech, index) => (
                                            <span key={index}>{tech}</span>
                                        ))}
                                    </div>
                                    <a
                                        href={item.link}
                                        className="view-project-btn"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <UilGithubAlt size="20" />
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
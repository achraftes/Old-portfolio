import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import ImageOne from '../../images/image1.jpg';
import ImageTwo from '../../images/image2.jpg';
import ImageThree from '../../images/image3.jpg';
import ImageFour from '../../images/image4.jpg';
import ImageFive from '../../images/image5.jpg';
import ImageSex from '../../images/image6.jpg';
import"./styles.scss"

const portfolioData = [
    {
        id: 2,
        name: "Login",
        image: ImageOne,
        link:''
    },
    {
        id: 3,
        name: "Form",
        image: ImageThree,
        link:''
    },
    {
        id: 2,
        name: "Ecommerce",
        image: ImageTwo,
        link:''
    },
    {
        id: 2,
        name: "About",
        image: ImageFour,
        link:''
    },
    {
        id: 3,
        name: "service",
        image: ImageFive,
        link:''
    },
    {
        id: 3,
        name: "Contact",
        image: ImageSex,
        link:''
    }
]


const Portfolio = () => {
  

    
  
    return (
        <section id="portfolio" className="portfolio">
            <PageHeaderContent
                headerText="My Portfolio"
                icon={<BsInfoCircleFill size={40} />}
            />
           
        </section>
    )
}
export default Portfolio;
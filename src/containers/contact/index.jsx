import React, { useState, useRef } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import emailjs from '@emailjs/browser';
import './styles.scss';

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);
        setError(false);

        // Replace these with your actual EmailJS Service ID, Template ID, and Public Key
        emailjs  .sendForm(
            "service_uukp567",
             "template_ut0sed1",
              formRef.current, {
              publicKey: "6fv3EJpygju4hjwqA",
          }
        )
        .then((result) => {
            setLoading(false);
            setSuccess(true);
            // Reset form
            setFormData({
                name: '',
                email: '',
                description: ''
            });
            setTimeout(() => setSuccess(false), 5000); // Hide success message after 5 seconds
        }, (error) => {
            setLoading(false);
            setError(true);
            console.error('Email sending failed:', error);
            setTimeout(() => setError(false), 5000); // Hide error message after 5 seconds
        });
    };

    return (
        <section id="contact" className="contact">
            <PageHeaderContent
                headerText="My Contact"
                icon={<BsInfoCircleFill size={40} />}
            />
            
            <div className="contact__container">
                {/* Contact Info Cards Section */}
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(-200px)",
                        opacity: 0
                    }}
                    end={{ 
                        transform: "translateX(0px)",
                        opacity: 1 
                    }}>
                    <div className="contact__content contact__info-container">
                        <h3 className="contact__content__header-text">Talk to me</h3>
                        <div className="contact__info">
                            <div className="contact__card">
                                <i className="bx bx-mail-send contact__card-icon"></i>
                                <h3 className="contact__card-title">Email</h3>
                                <span className="contact__card-data">achrafchikrabane@gmail.com</span>
                                <a href="mailto:achrafchikrabane@gmail.com" target="_blank" rel="noopener noreferrer" className="contact__button">
                                    Write me
                                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                                </a>
                            </div>
                            
                            <div className="contact__card">
                                <i className="bx bxl-whatsapp contact__card-icon"></i>
                                <h3 className="contact__card-title">WhatsApp</h3>
                                <span className="contact__card-data">07 07 97 97 25</span>
                                <a href="https://wa.me/212707979725" target="_blank" rel="noopener noreferrer" className="contact__button">
                                    Write me
                                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                                </a>
                            </div>
                            
                            <div className="contact__card">
                                <i className="bx bxl-linkedin contact__card-icon"></i>
                                <h3 className="contact__card-title">LinkedIn</h3>
                                <span className="contact__card-data">achraf-chikrabane</span>
                                <a href="https://www.linkedin.com/in/achraf-chikrabane-850554291/" target="_blank" rel="noopener noreferrer" className="contact__button">
                                    Write me
                                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </Animate>

                {/* Contact Form Section */}
                <Animate
                    play
                    duration={1}
                    delay={0.3}
                    start={{
                        transform: "translateX(200px)",
                        opacity: 0
                    }}
                    end={{ 
                        transform: "translateX(0px)",
                        opacity: 1 
                    }}>
                    <div className="contact__content contact__form-container">
                        <h3 className="contact__content__header-text">Send me a message</h3>
                        <div className="contact__content__form">
                            <form ref={formRef} onSubmit={sendEmail} className="contact__content__form__controlswrapper">
                                <div className="nameWarpper">
                                    <input 
                                        name="name" 
                                        className="inputName" 
                                        type="text" 
                                        required 
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="name" className="nameLabel">Name</label>
                                </div>
                                <div className="emailWarpper">
                                    <input 
                                        name="email" 
                                        className="inputEmail" 
                                        type="email" 
                                        required 
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="email" className="emailLabel">Email</label>
                                </div>
                                <div className="descriptionWarpper">
                                    <textarea 
                                        name="description" 
                                        className="inputDescription" 
                                        type="text" 
                                        rows="5" 
                                        required 
                                        value={formData.description}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="description" className="descriptionLabel">Description</label>
                                </div>
                                <div className="contact__form-button-container">
                                    <button type="submit" disabled={loading}>
                                        {loading ? 'Sending...' : 'Send Message'} 
                                        <i className="bx bx-send"></i>
                                    </button>
                                </div>
                                {success && <div className="success-message">Message sent successfully!</div>}
                                {error && <div className="error-message">Failed to send message. Please try again.</div>}
                            </form>
                        </div>
                    </div>
                </Animate>
            </div>
        </section>
    )
}

export default Contact;
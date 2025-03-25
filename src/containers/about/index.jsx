import React from "react";
import { motion } from "framer-motion";
import { BsInfoCircleFill } from "react-icons/bs";
import { DiApple, DiAndroid } from "react-icons/di";
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

const skills = [
  { icon: <FaDev size={50} color="var(--yellow-theme-main-color)" />, title: "Web Development" },
  { icon: <DiAndroid size={50} color="var(--yellow-theme-main-color)" />, title: "Mobile Development" },
  { icon: <FaDatabase size={50} color="var(--yellow-theme-main-color)" />, title: "Database Management" },
  { icon: <DiApple size={50} color="var(--yellow-theme-main-color)" />, title: "Mobile App Development" }
];

const About = () => {
  return (
    <section id="about" className="about min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <BsInfoCircleFill size={40} className="mx-auto mb-4 text-yellow-500" />
          <h1 className="text-4xl font-bold text-yellow-500">About Me</h1>
        </div>

        <div className="about__content flex flex-col md:flex-row gap-8">
          {/* Personal Details and Introduction */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="about__content__personalWrapper md:w-1/2 bg-gray-800 rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-4 text-yellow-500">Full-stack developer</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I am a Full-Stack Developer gifted in design, website development and maintenance.
              In-depth skills in HTML/CSS (Bootstrap), Javascript, front-end frameworks (like React) and
              back-end framework (Laravel). Passionate about solving problems and the creation of 
              technological solutions innovative. Strong ability to work in a team and manage 
              projects from start to finish.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-yellow-500">Personal Information</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i} className="mb-4 pb-4 border-b border-dashed border-yellow-500">
                  <span className="titre mr-4 text-xl font-semibold text-yellow-500">{item.label}</span>
                  <span className="value text-xl text-gray-300">{item.Value}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Skills Wrapper */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="about__content__servicesWrapper md:w-1/2 flex items-center justify-center"
          >
            <div className="about__content__servicesWrapper__innerContenet relative w-80 h-80 bg-gradient-radial from-yellow-500 to-transparent rounded-full border-2 border-yellow-500 animate-rotate">
              {skills.map((skill, index) => {
                const positions = [
                  "top-[-9%] left-[41%]",
                  "right-[-8%] top-[41.5%]",
                  "bottom-[-10%] left-[41%]",
                  "left-[-8%] top-[41%]"
                ];
                return (
                  <div key={index} className={`absolute ${positions[index]}`}>
                    {skill.icon}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React, { useState, useEffect } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaCode, FaTools } from "react-icons/fa";
import PageHeaderContent from "../../components/pageHeaderContent";
import './styles.scss';

const skillsData = [
  {
    label: "Développement",
    icon: <FaCode size={22} />,
    data: [
      { skillName: "HTML", percentage: "90" },
      { skillName: "CSS", percentage: "60" },
      { skillName: "JAVASCRIPT", percentage: "75" },
      { skillName: "TYPESCRIPT", percentage: "65" },
      { skillName: "PHP", percentage: "80" },
      { skillName: "PYTHON", percentage: "60" },
      { skillName: "JAVA", percentage: "70" },
      { skillName: "C", percentage: "55" },
      { skillName: "C++", percentage: "50" },
      { skillName: "MYSQL", percentage: "80" },
      { skillName: "MONGODB", percentage: "80" },
      { skillName: "UML", percentage: "80" },
      { skillName: "AGILE", percentage: "90" },
      { skillName: "BOOTSTRAP", percentage: "50" },
      { skillName: "REACT.JS", percentage: "70" },
      { skillName: "LARAVEL", percentage: "90" }
    ]
  },
  {
    label: "Outils",
    icon: <FaTools size={22} />,
    data: [
      { skillName: "JIRA", percentage: "90" },
      { skillName: "GIT", percentage: "90" },
      { skillName: "GITHUB", percentage: "80" },
      { skillName: "NODE.JS", percentage: "60" },
      { skillName: "JQUERY", percentage: "60" },
      { skillName: "GESTION DES DONNEES", percentage: "70" },
      { skillName: "POWERPOINT", percentage: "50" },
      { skillName: "EXCEL", percentage: "50" },
      { skillName: "WORD", percentage: "57" },
      { skillName: "POO", percentage: "70" },
      { skillName: "CLOUD COMPUTING", percentage: "50" },
      { skillName: "JWT", percentage: "50" },
      { skillName: "DOCKER", percentage: "60" },
      { skillName: "KUBERNETES", percentage: "50" },
      { skillName: "LINUX", percentage: "70" },
      { skillName: "FIREBASE", percentage: "60" },
      { skillName: "FIGMA", percentage: "55" },
      { skillName: "TRELLO", percentage: "50" }
    ]
  }
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [visibleItems, setVisibleItems] = useState(8);
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Function to determine skill level text
  const getSkillLevel = (percentage) => {
    const value = parseInt(percentage);
    if (value >= 80) return "Expert";
    if (value >= 60) return "Intermédiaire";
    return "Débutant";
  };

  // Function to get color based on percentage
  const getSkillColor = (percentage) => {
    const value = parseInt(percentage);
    if (value >= 80) return "var(--yellow-theme-main-color)";
    if (value >= 60) return "#4CAF50";
    return "#2196F3";
  };
  
  // Load more skills
  const loadMore = () => {
    setVisibleItems(prevValue => prevValue + 8);
  };

  // Reset visible items when tab changes
  useEffect(() => {
    setVisibleItems(8);
    setSelectedSkill(null);
  }, [activeTab]);

  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="Mes Compétences"
        icon={<BsInfoCircleFill size={40} />}
      />
      
      <div className="skills__tabs">
        {skillsData.map((category, index) => (
          <button
            key={index}
            className={`skills__tabs__button ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            <span className="skills__tabs__button__icon">{category.icon}</span>
            <span className="skills__tabs__button__text">{category.label}</span>
          </button>
        ))}
      </div>
      
      <div className="skills__content">
        <div className="skills__content__list">
          {skillsData[activeTab].data.slice(0, visibleItems).map((skill, index) => (
            <div
              key={index}
              className={`skills__content__list__item ${selectedSkill === index ? 'active' : ''}`}
              onClick={() => setSelectedSkill(selectedSkill === index ? null : index)}
            >
              <div className="skills__content__list__item__inner">
                <div className="skill-front">
                  <div className="skill-header">
                    <h3>{skill.skillName}</h3>
                    <span className="skill-percentage" style={{color: getSkillColor(skill.percentage)}}>
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="skill-bar-container">
                    <div 
                      className="skill-bar" 
                      style={{
                        width: `${skill.percentage}%`,
                        backgroundColor: getSkillColor(skill.percentage)
                      }}
                    ></div>
                  </div>
                </div>
                <div className="skill-back">
                  <div className="skill-detail">
                    <h4>Niveau: {getSkillLevel(skill.percentage)}</h4>
                    <p>Expérience avec {skill.skillName}</p>
                    <div className="skill-level-indicator">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`level-dot ${i < Math.floor(parseInt(skill.percentage) / 20) ? 'filled' : ''}`}
                          style={{
                            backgroundColor: i < Math.floor(parseInt(skill.percentage) / 20) ? 
                              getSkillColor(skill.percentage) : 'transparent'
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {visibleItems < skillsData[activeTab].data.length && (
          <div className="skills__content__load-more">
            <button className="load-more-btn" onClick={loadMore}>
              Afficher plus
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
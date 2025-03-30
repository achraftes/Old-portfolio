import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import './styles.scss';

// Utilisation des données importées
const skillsData = [
  {
    label: "Développement",
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
      { skillName: "BOOSTRAPOS", percentage: "50" },
      { skillName: "REACT.JS", percentage: "70" },
      { skillName: "LARAVEL", percentage: "90" }
    ]
  },
  {
    label: "Outils",
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

  // Fonction pour calculer la couleur basée sur le pourcentage
  const getSkillColor = (percentage) => {
    const value = parseInt(percentage);
    if (value >= 80) return "var(--yellow-theme-main-color)";
    if (value >= 60) return "#4CAF50";
    return "#2196F3";
  };

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
            {category.label || `Catégorie ${index + 1}`}
          </button>
        ))}
      </div>

      <div className="skills__container">
        {skillsData[activeTab].data.map((skill, index) => (
          <div 
            key={index} 
            className="skills__container__item"
            style={{"--animation-delay": `${index * 0.1}s`}}
          >
            <div className="skills__container__item__info">
              <span className="skills__container__item__name">{skill.skillName}</span>
              <span className="skills__container__item__percentage">{skill.percentage}%</span>
            </div>
            <div className="skills__container__item__bar">
              <div 
                className="skills__container__item__bar__fill" 
                style={{
                  width: `${skill.percentage}%`,
                  backgroundColor: getSkillColor(skill.percentage)
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
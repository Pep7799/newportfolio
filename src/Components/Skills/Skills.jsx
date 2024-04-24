import React from "react";
import "./skills.css";
import { FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { IoLogoVue } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiRedux } from "react-icons/si";







const Skills = () => {
  return (
    <section id="skills" className="skills container section">
      <div className="sectionTitle">
        <h5 className="titleText">
          Skills
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="skillsContainer grid">
        <div className="skillGroup">
          <h2 className="groupTitle">Web development</h2>
          <div className="generalSkills">
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaReact className="icon" />
              </div>
              <span className="skillName">React</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoVue className="icon" />
              </div>
              <span className="skillName">VueJS</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <DiJavascript1 className="icon" />
              </div>
              <span className="skillName">JavaScript</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiTailwindcss className="icon" />
              </div>
              <span className="skillName">Tailwind</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <FaSass className="icon" />
              </div>
              <span className="skillName">Sass</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <FaCss3 className="icon" />
              </div>
              <span className="skillName">CSS</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <FaHtml5 className="icon" />
              </div>
              <span className="skillName">HTML</span>
            </div>
          </div>
        </div>
      </div>
      <div className="skillsContainer grid">
        <div className="skillGroup">
          <h2 className="groupTitle">Other skills</h2>
          <div className="generalSkills">
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaNodeJs className="icon" />
              </div>
              <span className="skillName">NodeJS</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <FaGithub className="icon" />
              </div>
              <span className="skillName">Github</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <FaGit className="icon" />
              </div>
              <span className="skillName">Git</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoFirebase className="icon" />
              </div>
              <span className="skillName">Firebase</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiRedux className="icon" />
              </div>
              <span className="skillName">Redux</span>
            </div>
          </div>
        </div>
      </div>
   
    </section>
  );
};

export default Skills;

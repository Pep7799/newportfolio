import React from "react";
import "./about.css";
import {FaCloudDownloadAlt} from 'react-icons/fa'
import img from '../Images/pelumi.png'
const About = () => {
  return (
    <section id="about" className="about section container">
      <div className="sectionTitle">
        <h5 className="titleText">
          About Me
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="sectionContent grid">
        <div className="textSection">
          <h4>
            I'm a passionate software developer and I have experience using
            frameworks like React, JavaScript and Vue.js to build websites and
            apps that are easily accessible, dynamic and user-centric. <br />
            Beyond coding, I'm also a passionate technical writer, crafting
            engaging content on frontend development and beyond. 
            I'm dedicated to shaping the future of technology through code and
            communication.
          </h4>

          <div className="aboutBtn">
            <a href="FolamiPCV.pdf" download="FolamiPCV.pdf" className="flex">Download CV <FaCloudDownloadAlt className = 'icon' />
</a>
          </div>
        </div>

        <div className="aboutImgDiv">
          <img src={img} alt="Folami Oluwapelumi" className="aboutImg" />
        </div>
      </div>
    </section>
  );
};

export default About;

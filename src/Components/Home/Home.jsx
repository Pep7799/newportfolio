import React from "react";
import "./home.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";
import { BsChevronDoubleDown } from "react-icons/bs";

const Home = () => {
  return (
    <section id="home" className="home section">
      <div className="lefticons">
        <div className="socials grid">
          <a href="https://github.com/Pep7799" target='_blank'>
          <FaGithub className='icon'/>
          </a>
          <a href="https://twitter.com/SuperGirl_P" target='_blank'>
          <FaTwitter  className='icon'/>
          </a>
          <a href="https://www.linkedin.com/in/oluwa-pelumi/" target='_blank'>
          <FaLinkedin  className='icon'/>
          </a>
          <a href="https://supergirlp.hashnode.dev/" target='_blank'>
          <FaHashnode  className='icon'/>
          </a>
        </div>
        <div className="line"></div>
      </div>

      <div className="container homeContainer">
        <span className="introText">Hi! My name is</span>
        <h1 className="title">Folami Oluwapelumi</h1>
        <span className="subTitle">
          I develop web applications and software. I am also a technical writer.
        </span>
        <p className="homeParagraph">
          Eager to work with you and contribute massively to projects
        </p>
        <div className="lowerHomeSection">
          <button className="contactBtn">
            <a href="#contact" className="flex">
              {" "}
              Contact ME <FaAngleDoubleRight className="icon" />
            </a>
          </button>

          <div className="scrollDiv">
            <a href="#about" className="flex">
              {" "} <h6 className="scroll">Scroll Down</h6>
               <BsChevronDoubleDown className="icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="rightEmail">
        <div>
          <div className="emailAddress">
            <a
              href="https://mailto:folamioluwapelumi1@gmail.com"
              target="_blank"
            >
              folamioluwapelumi1@gmail.com
            </a>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;

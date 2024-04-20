import React, {useState} from "react";
import "./navbar.css";
import {IoIosCloseCircle} from 'react-icons/io'
import { TbMenuDeep } from 'react-icons/tb'

const Navbar = () => {
  const [active, setActive] = useState ('navBar')

  const showNavbar = () => {
    setActive('navBar activeNavbar')
  }

  const removeNavbar = () => {
    setActive('navBar')
  }



  return (
    <header className="header">
      <div className="logoDiv">
        <h1 className="logo">
          <a href="#home">FOP</a>
        </h1>
      </div>
      <div className={active}>
        <ul onClick={removeNavbar} className="navList">
          <li className="navItem">
            <a href="#about" className="navLink"><span>About</span></a>
          </li>
          <li className="navItem">
            <a href="#skills" className="navLink"><span>Skills</span></a>
          </li>
          <li className="navItem">
            <a href="#projects" className="navLink"><span>Projects</span></a>
          </li>
          <li className="navItem">
            <a href="#contact" className="navLink"><span>Contact</span></a>
          </li>

          <button className="btn">
            <a href="">Resume</a>
          </button>
         
        </ul>

        <div onClick={removeNavbar} className="closeNavBar">
        <IoIosCloseCircle className = 'icon'/>
        </div>
      </div>

      <div onClick={showNavbar} className="toggleNavBar">
      <TbMenuDeep className= 'icon'/>

      </div>
    </header>
  );
};

export default Navbar;

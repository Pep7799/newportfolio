import React from "react";
import "./projects.css";
import { FaPlay } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import markapp from '../Images/markapp.png'
import cryptoapp from '../Images/cryptoapp.png'
import blogapp from '../Images/blogapp.png'
import musicapp from '../Images/musicapp.png'
import weapp from '../Images/weapp.png'

const data = [
  {
    id: 1,
    image: markapp,
    preview: "https://markdown2.vercel.app/",
    github: "https://github.com/Pep7799/markdownapp",
    title: "Markdown app",
    desc: "Markdown is an easy-to-use markup language that is used with plain text to add formatting elements (headings, bulleted lists, URLs) to plain text without the use of a formal text editor or the use of HTML tags.",
    tech1: "ReactJS",
    tech2: "CSS",
    tech3: "Firebase",
    tech4: "Context API",
  },

  {
    id: 2,
    image: cryptoapp,
    preview: "https://cryptoappp.vercel.app/",
    github: "https://github.com/Pep7799/cryptoapp",
    title: "Crypto update",
    desc: "Crypto update is an app that gives the current prices of popular cryptocurrencies, the change and the market stats.",
    tech1: 'ReactJS',
    tech2: 'CSS',
    tech3: 'API',
  },

  {
    id: 3,
    image: blogapp,
    preview: "https://tosinblog.vercel.app/writeups",
    github: "https://github.com/Pep7799/Tblog",
    title: "Blogging app",
    desc: "A blogging web app for posting writeups and uses Sanity CMS for the backend and client operation.",
    tech1: 'ReactJS',
    tech2: 'CSS',
    tech3: 'Sanity CMS',
  },

  {
    id: 4,
    image: musicapp,
    preview: "https://musicp.vercel.app/",
    github: "https://github.com/Pep7799/MusicPlayer",
    title: "Music app",
    desc: "Music app is a music website where you can listen to bedtime/relaxing music, you can navigate, forward or pause while listening",
    tech1: 'ReactJS',
    tech2: 'SCSS',

  },

  {
    id: 5,
    image: weapp,
    preview: "https://wea-app.vercel.app/",
    github: "https://github.com/Pep7799/weatherApp",
    title: "Weather app",
    desc: "This is an API fetched app where you can search for a particular location and get the weather in degree celsius for yesterday, today and tomorrow as predicted.",
    tech1: 'ReactJS',
    tech2: 'Tailwind CSS',

  },
];

const Projects = () => {
  return (
    <section id="projects" className="container projects section">
      <div className="sectionTitle">
        <h5 className="titleText">
          Projects
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="projectContainer grid">
        {data.map(
          ({
            id,
            github,
            image,
            preview,
            desc,
            title,
            tech1,
            tech2,
            tech3,
            tech4,
          }) => {
            return (
              <div key={id} className="singleProject">
                <div className="externalLinks flex">
                  <div className="playIcon">
                    <a href={preview} target="_blank" rel="noopener noreferrer">
                      <FaPlay className="icon" />
                    </a>
                  </div>
                  <div className="githubIcon">
                    <a href={github} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="icon" />
                    </a>
                  </div>
                </div>
                <div className="imgDiv">
                  <a href={preview} target="_blank" rel="noopener noreferrer">
                    <img src={image} alt={title} />
                  </a>
                </div>

                <div className="projectTitle">
                  <h3>{title}</h3>
                </div>

                <div className="desc">
                  {desc}
                </div>

                <div className="technologies flex">
                  <small>{tech1}</small>
                  <small>{tech2}</small>
                  <small>{tech3}</small>
                  <small>{tech4}</small>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Projects;

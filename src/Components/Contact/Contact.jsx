import React, {useRef} from "react";
import "./contact.css";
import { FaLinkedin } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com"



const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_asw27y4', 'template_nc1bmvf', form.current,
       's451-93f68tcpD_p0',
      )
     e.target.reset()
  };
  return (
    <section id="contact" className="contact section container">
      <div className="sectionTitle">
        <h5 className="titleText">
          Contact
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>

      <div className="contactContainer grid">
        <div className="socialContacts grid">
          <h3>Want to get in touch with me?</h3>

          <div className="cards grid">
            <div className="card">
              <div>
                <FaLinkedin className="icon" />
                <h4>LinkedIn</h4>
                <span className="userName">Oluwapelumi Folami</span>

                <div>
                  <a
                    href="https://www.linkedin.com/in/oluwa-pelumi/"
                    className="flex" target="_blank" rel="noopener noreferrer"
                  >
                    Send a message <FaAngleDoubleRight className="icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div>
                <FaTwitter className="icon" />
                <h4>Twitter</h4>
                <span className="userName">@SuperGirl_P</span>

                <div>
                  <a
                    href="https://twitter.com/SuperGirl_P"
                    className="flex" target="_blank"
                    rel="noopener noreferrer"
                  >
                    Send a message <FaAngleDoubleRight className="icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div>
                <FaGithub className="icon" />
                <h4>GitHub</h4>
                <span className="userName">Oluwapelumi Folami</span>

                <div>
                  <a
                    href="https://github.com/Pep7799"
                    className="flex" target="_blank" rel="noopener noreferrer"
                  >
                    Send a message <FaAngleDoubleRight className="icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form grid">
          <h3>Send me an email</h3>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Your Name" name="name"/>
            <input type="email" placeholder="Your Email" name="email"/>
            <textarea name="message"  placeholder="Enter your message"></textarea>
            <button className="formBtn" type="submit" name="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

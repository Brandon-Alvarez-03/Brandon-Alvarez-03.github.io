import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <p className="home-about-body">
              I'm a New York City-based Software Engineer (formerly an
              environmental engineer) <br></br>I have a strong background in a
              variety of technical disciplines and currently work as a backend
              engineer at J.P. Morgan Chase & Co. <br></br>
              Drone building and programming is also in my wheelhouse as a
              professional and licensed drone pilot!
              <br></br>
              Coaching junior engineers, boot campers, and tech career changers
              is my passion! I motivate and inspire the mindset needed to
              rapidly achieve career goals.
              <br />
              <br />I currently work with
              <i>
                <b className="gray"> Python, AWS, Linux/Bash, and Rust </b>
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h2>CONNECT WITH ME!</h2>
            <br />
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Brandon-Alvarez-03"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/brandon-alvarez-03balv/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

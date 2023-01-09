import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";

function Home2(): JSX.Element {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <p className="home-about-body">
              As a software engineer with a strong foundation in technology and
              engineering, I have a passion for programming that was ignited
              during my computer solutions course in college. Although I wasn't
              initially the top performer in the class, I used that as
              motivation to push myself harder and improve my skills. Now, I am
              confident in my abilities and eager to continue learning and
              growing in my career.
              <br />
              <br />I currently work with
              <i>
                <b className="gray">
                  {" "}
                  Javascript, Python, Java, React.js, HTML, CSS{" "}
                </b>
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h2>CONNECT WITH ME</h2>
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

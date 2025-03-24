import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {SiGmail} from "react-icons/si";
import "./Contact.css";

function Contact() {
  return (
    <Container fluid className="contact-section">
      <Container>
        <Row style={{justifyContent: "center", padding: "10px"}}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{fontSize: "2.1em", paddingBottom: "20px"}}>
              Let's Connect!
            </h1>

            <div className="contact-links-container">
              <a
                href="https://github.com/Brandon-Alvarez-03"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <AiFillGithub />
                <p>GitHub</p>
              </a>

              <a
                href="https://www.linkedin.com/in/brandon-alvarez-03balv/"
                target="_blank"
                rel="noreferrer" 
                className="contact-link"
              >
                <AiFillLinkedin />
                <p>LinkedIn</p>
              </a>

              <a
                href="mailto:BrandonAlvarezSWE@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <SiGmail />
                <p>Email</p>
              </a>
            </div>

          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
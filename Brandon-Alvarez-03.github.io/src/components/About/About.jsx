import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
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
              About Me!
            </h1>
            <Aboutcard />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
        <Github />
      </Container>
    </Container>
  );
}

export default About;

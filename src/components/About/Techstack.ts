import React from "react";
import {Col, Row} from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiDjango,
  DiPostgresql,
  DiJava,
  DiScrum,
  DiCss3,
  DiHtml5,
} from "react-icons/di";
import {
  SiExpress,
  SiTypescript,
  SiSpringboot,
  SiFlask,
  SiAutodesk,
} from "react-icons/si";
import {BsBootstrapFill} from "react-icons/bs";

interface TechstackProps {}

const Techstack: React.FC<TechstackProps> = (): JSX.Element => {
  return (
    <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{fontSize: ".18em"}}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{fontSize: ".18em"}}>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p style={{fontSize: ".18em"}}>HTML5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p style={{fontSize: ".18em"}}>CSS3</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{fontSize: ".18em"}}>React.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <p style={{fontSize: ".18em"}}>TypeScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsBootstrapFill />
        <p style={{fontSize: ".18em"}}>Bootstrap</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <p style={{fontSize: ".18em"}}>Express.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={{fontSize: ".18em"}}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p style={{fontSize: ".18em"}}>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango />
        <p style={{fontSize: ".18em"}}>django</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
        <p style={{fontSize: ".18em"}}>Flask</p>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSpring />
        <p style={{fontSize: ".18em"}}>Spring</p>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={{fontSize: ".18em"}}>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
        <p style={{fontSize: ".18em"}}>PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
        <p style={{fontSize: ".18em"}}>Springboot</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{fontSize: ".18em"}}>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiScrum />
        <p style={{fontSize: ".18em"}}>Scrum | Agile</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAutodesk />
        <p style={{fontSize: ".18em"}}>AutoDesk</p>
      </Col>
    </Row>
  );
};

export default Techstack;

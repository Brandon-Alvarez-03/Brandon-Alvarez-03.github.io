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
  DiFlask,
  DiPostgresql
} from "react-icons/di";


function Techstack() {
  return (
    <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{fontSize: ".18em"}}>React.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={{fontSize: ".18em"}}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={{fontSize: ".18em"}}>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
        <p style={{fontSize: ".18em"}}>PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{fontSize: ".18em"}}>Git</p>
      </Col>
    </Row>
  );
}

export default Techstack;

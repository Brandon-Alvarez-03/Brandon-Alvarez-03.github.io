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
  DiScrum,
  DiCss3,
  DiHtml5,
  DiRust,
} from "react-icons/di";
import {
  SiExpress,
  SiTypescript,
  SiFlask,
  SiAutodesk,
  SiTailwindcss,
  SiNextdotjs,
  SiAmazonaws,
  SiDocker,
  SiJenkins,
  SiGraphql,
  SiSolidity,
} from "react-icons/si";
import {BsBootstrapFill} from "react-icons/bs";

function Techstack() {
  return (
    <div style={{paddingBottom: "50px"}}>
      <br></br>
      <br></br>

      <Row style={{justifyContent: "center"}}>
        <h3>Backend Technologies</h3>
        <Col xs={4} md={2} className="tech-icons">
          <DiPython />
          <p style={{fontSize: ".18em"}}>Python</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiFlask />
          <p style={{fontSize: ".18em"}}>Flask</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiDjango />
          <p style={{fontSize: ".18em"}}>Django</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiRust />
          <p style={{fontSize: ".18em"}}>Rust</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
          <p style={{fontSize: ".18em"}}>Node.js</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiExpress />
          <p style={{fontSize: ".18em"}}>Express.js</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAmazonaws />
          <p style={{fontSize: ".18em"}}>AWS</p>
        </Col>
      </Row>

      <br></br>
      <br></br>

      <Row style={{justifyContent: "center"}}>
        <h3>Frontend Technologies</h3>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
          <p style={{fontSize: ".18em"}}>React.js</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNextdotjs />
          <p style={{fontSize: ".18em"}}>Next.js</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiTypescript />
          <p style={{fontSize: ".18em"}}>TypeScript</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
          <p style={{fontSize: ".18em"}}>JavaScript</p>
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
          <BsBootstrapFill />
          <p style={{fontSize: ".18em"}}>Bootstrap</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiTailwindcss />
          <p style={{fontSize: ".18em"}}>Tailwincss</p>
        </Col>
      </Row>

      <br></br>
      <br></br>

      <Row style={{justifyContent: "center"}}>
        <h3>Database Technologies</h3>
        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb />
          <p style={{fontSize: ".18em"}}>MongoDB</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiPostgresql />
          <p style={{fontSize: ".18em"}}>PostgreSQL</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGraphql />
          <p style={{fontSize: ".18em"}}>GraphQL</p>
        </Col>
      </Row>

      <br></br>
      <br></br>

      <Row style={{justifyContent: "center"}}>
        <h3>Tools and Others</h3>
        <Col xs={4} md={2} className="tech-icons">
          <SiDocker />
          <p style={{fontSize: ".18em"}}>Docker</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJenkins />
          <p style={{fontSize: ".18em"}}>Jenkins</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiSolidity />
          <p style={{fontSize: ".18em"}}>Solidity</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
          <p style={{fontSize: ".18em"}}>Git</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiScrum />
          <p style={{fontSize: ".18em"}}>Scrum | Agile</p>
        </Col>
      </Row>
    </div>
  );
}

export default Techstack;

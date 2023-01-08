import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import boogeyman from "../../assets/boogeyman.png";
import breddit from "../../assets/Breddit.png";
import petlyfe from "../../assets/PetLyfe.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{color: "grey"}}>Here are my recent projects.</p>
        <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={boogeyman}
              isBlog={false}
              title="The Boogeyman"
              description="Front-end game using Vanilla JavaScript, HTML, CSS, and Canvas. Visually engaging game and fun to play"
              ghLink="https://github.com/Brandon-Alvarez-03/The-Boogeyman-Front-End-Game"
              demoLink="https://the-boogeyman.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={breddit}
              isBlog={false}
              title="Breddit: the Better Reddit"
              description="Full-CRUD Social Media clone inspired by Reddit with a fun 'bread-themed' twist. Created with React.js and React-Bootstrap on the front-end and a Python/Django Back-end."
              ghLink="https://github.com/SEI-Buffleheads/reddit-clone"
              demoLink="https://breddit.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={petlyfe}
              isBlog={false}
              title="PetLyfe: Pet Style Ecommerce Site"
              description="Ecommerce-styled site selling pet style products utilizing RESTFUL APIs, MongoDB, Express.js to create and manage backend and React.js for front-end"
              ghLink="https://github.com/Brandon-Alvarez-03/pet-style-mern"
              demoLink="https://pet-lyfe.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

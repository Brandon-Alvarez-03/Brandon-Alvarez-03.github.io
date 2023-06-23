import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import boogeyman from "../../assets/boogeyman.png";
import breddit from "../../assets/Breddit.png";
import petlyfe from "../../assets/PetLyfe.png";
import daily from "../../assets/Daily_Drip.png";
import geese from "../../assets/Geese_API.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{color: "grey"}}>
          *** Projects shown are my beginner projects, current projects will be
          updated soon STAY TUNED!
        </p>
        <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={boogeyman}
              isBlog={false}
              title="The Boogeyman"
              description="A visually stunning and highly engaging front-end game built with Vanilla JavaScript, HTML, CSS, and Canvas. The combination of these technologies allows for smooth gameplay and visually impressive graphics, making it a truly enjoyable experience for players"
              ghLink="https://github.com/Brandon-Alvarez-03/The-Boogeyman-Front-End-Game"
              demoLink="https://the-boogeyman.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={breddit}
              isBlog={false}
              title="Breddit: the Better Reddit"
              description="Social media platform inspired by Reddit and given a unique, bread-themed twist! This full-featured site was developed using React.js and React-Bootstrap on the front-end, and a Python/Django back-end to enable complete CRUD functionality"
              ghLink="https://github.com/SEI-Buffleheads/reddit-clone"
              demoLink="https://breddit.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={petlyfe}
              isBlog={false}
              title="PetLyfe: Pet Style Ecommerce Site"
              description="Ecommerce site for stylish pet products! Built with React.js for the front-end, Express.js, MongoDB, and Restful APIs for the back-end, to create a user-friendly and efficient shopping experience. Whether you're looking to spoil your furry friend or simply browse our selection"
              ghLink="https://github.com/Brandon-Alvarez-03/pet-style-mern"
              demoLink="https://pet-lyfe.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={daily}
              isBlog={false}
              title="Daily Drip: Water usage Tracker and Newsletter (PowerToFly Hackathon Submission)"
              description="Daily Drip is a full stack web app created for the purpose of helping individuals connect with the world to understand the severity of water stress and scarcity and how they can make small changes in their daily lives to be more sustainable!"
              ghLink="https://devpost.com/software/daily-drip-water-footprint-tracker-and-newsletter?ref_content=user-portfolio&ref_feature=in_progress"
              demoLink="https://daily-drip.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={geese}
              isBlog={false}
              title="NY Geese API: Goose Flock Location and Size Data API"
              description="This API provides recent updates on the general and precise locations of flocks of geese by the day throughout New York State in a JSON format. Intended for use with geospatial mapping applications.

(Extrapolated from the Cornell Ornithology eBird API and manipulated for more congruent location information)"
              ghLink="https://github.com/Brandon-Alvarez-03/NY-Goose-Tracker-API"
              demoLink="https://ny-goose-tracker-api-production.up.railway.app/geese"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

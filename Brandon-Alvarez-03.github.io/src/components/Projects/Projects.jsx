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

          {/* <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              // description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              // description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              // description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              // Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

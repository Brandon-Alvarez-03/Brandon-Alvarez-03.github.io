import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: "justify"}}>
            Hi Everyone, I am <span className="gray">Brandon Alvarez </span>
            located in <span className="gray"> NYC.</span>
            <br />I am a software engineering boot camp grad with a strong (environmental/civil) engineering background. I have been programming in my previous engineering roles for over a year and fell in love enough to pursue software engineering full-time.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing electric bass
            </li>
            <li className="about-activity">
              <ImPointRight /> Drone photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Tutoring STEM subjects
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

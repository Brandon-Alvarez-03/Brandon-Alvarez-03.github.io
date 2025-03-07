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
            <br />
            As a software engineer with a strong background in environmental and
            civil engineering, I have always been drawn to the world of
            programming and technology. I have been actively incorporating
            programming into my engineering work for several years, and have now
            fully transitioned into a career in software engineering. With my
            diverse skillset and experience, I am confident in my ability to
            tackle any challenge that comes my way and continue to grow and
            succeed in this field.
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
            <li className="about-activity">
              <ImPointRight /> Studying Spanish, Italian, and Korean
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import GitHubCalendar from "react-github-calendar";
import {Row} from "react-bootstrap";

interface GithubProps {}

const Github: React.FC<GithubProps> = (): JSX.Element => {
  return (
    <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
      <h1 className="project-heading" style={{paddingBottom: "20px"}}>
        Days I <strong className="gray">Code</strong>
      </h1>
      <GitHubCalendar
        username="Brandon-Alvarez-03"
        blockSize={15}
        blockMargin={5}
        color="rgba(67, 70, 75, 1)"
        fontSize={16}
      />
    </Row>
  );
};

export default Github;

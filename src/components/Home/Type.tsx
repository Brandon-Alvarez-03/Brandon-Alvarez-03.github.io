import React from "react";
import Typewriter from "typewriter-effect";

function Type(): JSX.Element {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Software Engineer",
          "U.S. Army Veteran",
          "Licensed Drone Pilot",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

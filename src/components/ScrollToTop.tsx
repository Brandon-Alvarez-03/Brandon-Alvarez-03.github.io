import React from "react";

interface Props {
  load: boolean;
}

const Pre: React.FC<Props> = (props: Props) => {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
};

export default Pre;

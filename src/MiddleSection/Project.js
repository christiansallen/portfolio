import React from "react";

const Project = props => {
  return (
    <div className="project">
      <img src={props.img} alt="header" className="image" />
      <h2 className="project-heading">{props.name}</h2>
      <p className="type"> {props.type}</p>
    </div>
  );
};

export default Project;

import React from "react";

export default function Project(props) {
  return (
    <div className="card" style={{ width: "300px", margin: "20px" }}>
      <div className="card-image">
        <img src={"./img/" + props.data.image} />
        <span className="card-title">{props.data.title}</span>
      </div>
      <div className="card-content">
        <p>{props.data.text}</p>
      </div>
      <div className="card-action">
        <a href={props.data.url}>Demo</a>
        <a href={props.data.gh}>Github repo</a>
      </div>
    </div>
  );
}

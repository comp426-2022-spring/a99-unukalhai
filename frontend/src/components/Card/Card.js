import React from "react";
import "./Card.css";

export default function Card(props) {
  let linkText;
  if (props.natural === true) {
    linkText = "NATURAL";
  } else {
    linkText = `${props.website}`;
  }

  return (
    <div className="card">
      <img src={props.imageUrl} className="card--image" alt={props.title} />
      <div className="card--info">
        <div className="card--location--data">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/36/Octicons-location.svg"
            className="card--pin"
            alt="pin"
          />
          <p className="card--location">{props.location.toUpperCase()}</p>
          <a
            href={props.googleMapsUrl}
            className="card--maps"
            target="_blank"
            rel="noreferrer"
          >
            View on Google Maps
          </a>
        </div>
        <p className="card--title">{props.title}</p>
        <div className="card--link">
          <a href={linkText} className="card--link--text">
          {linkText}
          </a>
        </div>
        <p className="card--description">{props.description}</p>
      </div>
    </div>
  );
}
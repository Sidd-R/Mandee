import React from "react";
import "../styles/rcard.css";

function Rcard(props) {
  return (
    <div className="r-card">
      <div className="farmer">
        <img className="farmer-image" src={props.image} alt="veg" />
        <p className="farmer-name">{props.name}</p>
      </div>
      <div>
        <div className="farmer-info">
          <p style={{color : "rgba(18, 56, 18, 1)"}} >{props.info}</p>
          <p>
            {props.desc}
          </p>
        </div>
        <p className="rating">{props.rating}</p>
      </div>
    </div>
  );
}

export default Rcard;

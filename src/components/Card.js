import React from "react";
import "../styles/card.css"

function Card(props) {
  return (
    <div className="card">
      <div className="item">
        <img className="item-image" src={props.image} alt="veg"/>
        <p className="item-name">{props.name}</p>
      </div>
      <div>
        <div className="info">
          <p className="info1">{props.price}</p>
          <p className="info2">{props.time}</p>
        </div>
        <p className="desc">{props.desc}<br></br>{props.place}</p>
      </div>
    </div>
  );
}

export default Card;

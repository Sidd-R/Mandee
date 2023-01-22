import React, { useState } from "react";
import Rcard from "./Rcard";
import "../styles/rslider.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Rslider(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = props.products;

  function prevSlide() {
    const lastIndex = products.length - 3;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 3;

    setCurrentIndex(index);
  }

  function nextSlide() {
    const lastIndex = products.length - 3;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 3;

    setCurrentIndex(index);
  }

  const currentProducts = products.slice(currentIndex, currentIndex + 3);

  return (
    <div className="slider">
      <p className="r-section">{props.title}</p>
      <div className="r-section-items">
        <ArrowBackIosNewIcon onClick={prevSlide} className="prev" />
        <div className="r-items">
          {currentProducts.map((product) => (
            <Rcard image={product.image} name={product.name} info={product.info} desc={product.desc} rating={product.rating}/>
          ))}
        </div>
        <ArrowForwardIosIcon onClick={nextSlide} className="next" />
      </div>
    </div>
  );
}

export default Rslider;

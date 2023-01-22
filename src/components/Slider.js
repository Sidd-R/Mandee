import React, { useState } from "react";
import Card from "./Card";
import "../styles/slider.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Slider(props) {
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
      <p className="section">{props.title}</p>
      <div className="section-items">
        <ArrowBackIosNewIcon onClick={prevSlide} className="prev" />
        <div className="items">
          {currentProducts.map((product) => (
            <Card name={product.name} image={product.image} desc={product.desc} place={product.place} time={product.time} price={product.price}/>
          ))}
        </div>
        <ArrowForwardIosIcon onClick={nextSlide} className="next" />
      </div>
    </div>
  );
}

export default Slider;

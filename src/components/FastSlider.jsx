import React from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";

import useFakeFetchData from "../hooks/useFakeFetchData";
import SliderShimmer from "./SliderShimmer";

const Pane = ({ children, style, className }) => (
  <div className={`glider-slide ${className ? className : ""}`} style={style}>
    <h1>{children}</h1>
  </div>
);

const FastSlider = () => {
  const { isLoading, data } = useFakeFetchData(
    "https://source.unsplash.com/1200x600/?nature,water&"
  );

  if (isLoading === true) {
    return <SliderShimmer />;
  }

  return (
    <div className="m-auto" style={{ width: 1200, height: 600 }}>
      <Glider draggable hasArrows hasDots slidesToShow={1} slidesToScroll={1}>
        {data.map(function (item, index) {
          return (
            <Pane key={index}>
              <img
                src={item}
                style={{ width: 1200, heigt: 600 }}
                loading="lazy"
              />
            </Pane>
          );
        })}
      </Glider>
    </div>
  );
};

export default FastSlider;

import React from "react";
import Slider from "react-slick";
import useFakeFetchData from "../hooks/useFakeFetchData";
import SliderShimmer from "./SliderShimmer";

const FastSlider = () => {
  const { isLoading, data } = useFakeFetchData(
    "https://source.unsplash.com/1200x600/?nature,water&"
  );

  if (isLoading === true) {
    return <SliderShimmer />;
  }

  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <div className="m-auto" style={{ width: 1200, height: 600 }}>
      <Slider {...settings}>
        {data.map(function (item, index) {
          return (
            <div key={index}>
              <img src={item} style={{ width: 1200, heigt: 600 }} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default FastSlider;

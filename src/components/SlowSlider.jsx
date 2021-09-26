import React from "react";
import Slider from "react-slick";
import useFakeFetchData from "../hooks/useFakeFetchData";

const SlowSlider = () => {
  const { isLoading, data } = useFakeFetchData(
    "https://source.unsplash.com/1200x600/?nature,water&"
  );

  if (isLoading === true) {
    return "";
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: true,
  };

  return (
    <div className="m-auto">
      <Slider {...settings} style={{ width: 1200, margin: "auto" }}>
        {data.map(function (item, index) {
          return (
            <div key={index}>
              <img src={item} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SlowSlider;

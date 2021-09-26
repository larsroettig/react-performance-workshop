import React from "react";
import { Image, Shimmer } from "react-shimmer";

const GridItem = (props) => {
  const { price, title, lazy = false } = props;
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 10000);
  };

  const src =
    "https://source.unsplash.com/280x320/?nature,water&sig=" +
    getRandomNumber();

  const fastImg = (
    <div
      className="w-full h-full object-center object-cover lg:w-full lg:h-full"
      style={{ width: 280, height: 320 }}
    >
      <Image src={src} fallback={<Shimmer width={280} height={320} />} />
    </div>
  );

  const slowImg = (
    <img
      src={src}
      className="w-full h-full object-center object-cover lg:w-full lg:h-full"
    />
  );

  return (
    <div className="group">
      <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        {lazy == true ? fastImg : slowImg}
      </div>

      <span className="mt-5 text-md text-gray-700">{title}</span>

      <p className="mt-1 text-lg font-medium text-gray-900">$ {price}</p>
    </div>
  );
};

export default GridItem;

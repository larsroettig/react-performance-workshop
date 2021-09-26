import React from "react";

import Page from "../components/Page";
import FastSlider from "../components/FastSlider";
import TravelGrid from "../components/Grid";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Journey = () => {
  return (
    <Page>
      <h1 className="text-center">Book your next journey</h1>
      <FastSlider />
      <h2 className="text-center">Favorites</h2>
      <TravelGrid count={4} lazy={true} />
      <h2 className="text-center">Best Deals</h2>
      <TravelGrid count={20} lazy={true} />
    </Page>
  );
};

export default Journey;

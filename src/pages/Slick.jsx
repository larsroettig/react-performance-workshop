import React, { Suspense } from "react";
import Page from "../components/Page";
import TravelGrid from "../components/Grid";
import SlowSlider from "../components/SlowSlider";

const Slick = () => {
  return (
    <Page>
      <h1 className="text-center">Book your next journey</h1>
      <SlowSlider />
      <h2 className="text-center"> Favorites</h2>
      <TravelGrid count={4} />
      <h2 className="text-center"> Best Deals</h2>
      <TravelGrid count={20} />
    </Page>
  );
};

export default Slick;

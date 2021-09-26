import React from "react";

const PENALTY = 150_000;
let currentPenaltyValue = 2;

const SlowComponent = () => {
  for (let index = 2; index < PENALTY; index++) {
    currentPenaltyValue = currentPenaltyValue ** index;
  }
  return "";
};

export default SlowComponent;

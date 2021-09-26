import React from "react";

import GridItem from "../components/GridItem";
import countries from "../data/countries.json";

const TravelGrid = (props) => {
  const { count, lazy } = props;

  const Repeat = (props) => {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
      items.push(props.children(i));
    }
    return items;
  };

  return (
    <>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <Repeat numTimes={count}>
          {(index) => {
            const rand = Math.floor(Math.random() * countries.length - index);
            const title = "Travel ";
            return (
              <GridItem
                lazy={lazy}
                key={index}
                title={title}
                price={Math.floor(Math.random() * 1001)}
              />
            );
          }}
        </Repeat>
      </div>
    </>
  );
};

export default TravelGrid;

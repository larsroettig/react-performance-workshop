import React, { useState } from "react";
import Page from "../components/Page";
import SlowSlider from "../components/SlowSlider";

const sleep = (time) => {
  // loading some havy data
  const done = Date.now() + time;
  while (done > Date.now()) {
    // sleep...
  }
};

const SlowComponent = ({ time, onChange }) => {
  sleep(time);
  // renders a lot of data
  return "";
};

const DogComponent = ({ dog, onChange }) => {
  sleep(5);

  return (
    <div>
      <label htmlFor="dog">Slow Dog Input</label>
      <br />
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={dog}
        onChange={(e) => onChange(e.target.value)}
      />
      <p>{dog ? `${dog}'s` : "enter a dog name"}</p>
    </div>
  );
};

const FastDogComponent = ({ time }) => {
  const [dog, setDog] = React.useState("");
  sleep(5);

  return (
    <div>
      <label htmlFor="dog">Fast Dog Input</label>
      <br />
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={dog}
        onChange={(e) => setDog(e.target.value)}
      />
      <p>{dog ? `${dog}'s` : "enter a dog name"}</p>
    </div>
  );
};

const Home = () => {
  const [time, setTime] = React.useState(200);
  const [dog, setDog] = React.useState("");
  const [isContentPage, setIsContentPage] = useState(true);

  if (isContentPage) {
    return (
      <Page>
        <h1>Home</h1>
        <span>This site show very typcial perfomance problems</span>

        <DogComponent dog={dog} onChange={setDog} />
        <FastDogComponent />
        <SlowComponent time={time} onChange={setTime} />
      </Page>
    );
  }

  return <SlowSlider />;
};

export default Home;

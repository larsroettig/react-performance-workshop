import React from "react";
import Page from "../components/Page";
import SlowComponent from "../components/SlowComp";
import SlowSlider from "../components/SlowSlider";
//const SlowSlider = React.lazy(() => import("../components/SlowSlider"));
import FormComponent from "../components/FormComponent";

const FastFormComponent = () => {
  const [dog, setDog] = React.useState("");
  return <FormComponent dog={dog} onChange={setDog} />;
};

/**
 * Orginal code from Kent C. Dodds
 * @see https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster
 */
const Home = (isContentPage = false) => {
  const [dog, setDog] = React.useState("");

  if (isContentPage) {
    return (
      <Page>
        <h1>Slow Input</h1>
        <FormComponent dog={dog} onChange={setDog} />
        <h1>Fast Input</h1>
        <FastFormComponent />

        <SlowComponent time={200} />

        <a href="https://kentcdodds.com/blog/state-colocation-will-make-your-react-app-faster">
          State Colocation
        </a>
      </Page>
    );
  }

  return <SlowSlider />;
};

export default Home;

import sleep from "../util/sleep";

const SlowComponent = ({ time = 100 }) => {
  sleep(time);
  // renders a lot of data
  return "";
};

export default SlowComponent;

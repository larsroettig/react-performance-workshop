const sleep = (time) => {
  // loading some havy data
  const done = Date.now() + time;
  while (done > Date.now()) {
    // sleep...
  }
};

export default sleep;

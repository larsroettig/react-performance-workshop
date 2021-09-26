import React from "react";
import ContentLoader from "react-content-loader";

const SliderShimmer = (props) => {
  return (
    <ContentLoader
      viewBox="0 0 1200 650"
      height={600}
      width={"100%"}
      style={{ margin: "auto" }}
    >
      <rect x="0" y="60" rx="2" ry="2" width="1200" height="600" />
    </ContentLoader>
  );
};

export default SliderShimmer;

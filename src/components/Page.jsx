import React from "react";
import Navigation from "./Navigation";

const Page = (props) => {
  const { children } = props;

  return (
    <>
      <Navigation />
      <div className="bg-gray-50">
        <div className="bg-white container mx-auto py-10">
          <article className=" prose lg:prose-xl max-w-none mx-10">
            {children}
          </article>
        </div>
      </div>
    </>
  );
};

export default Page;

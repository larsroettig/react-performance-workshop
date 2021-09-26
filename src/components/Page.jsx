import React from "react";
import Footer from "./Footer";

const Page = (props) => {
  const { children } = props;

  return (
    <>
      <div className="bg-gray-50">
        <div className="bg-white container mx-auto py-10">
          <article className=" prose lg:prose-xl max-w-none mx-10">
            {children}
          </article>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Page;

import React from "react";

const PageLoader = () => {
  return (
    <div className="bg-gray-50">
      <div className="bg-white container mx-auto py-10">
        <article className="prose lg:prose-xl max-w-none mx-10 ">
          <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-100" />
          <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-100" />
          <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-100" />
        </article>
      </div>
    </div>
  );
};

export default PageLoader;

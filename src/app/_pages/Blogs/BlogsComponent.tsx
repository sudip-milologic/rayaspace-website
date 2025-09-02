import BlogCatalog from "@/app/_components/BlogsCatalog";
import React from "react";

const BlogsComponent = () => {
  return (
    <div className="relative  bg-home-bg">
      <div className="relative z-20 min-h-[80vh]">
        <div className="px-4 lg:px-7 xl:px-24 2xl:px-28 pt-10 lg:pt-40">
          <div className=" pb-8 md:pb-14">
            <p className="text-dark-normal font-semibold text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-balance font-begum">
              Stay Updated with the Latest Tech Insights and Trends
            </p>
          </div>
          <BlogCatalog />
        </div>
      </div>
    </div>
  );
};

export default BlogsComponent;

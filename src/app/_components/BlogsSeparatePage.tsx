"use client";
import BlogsContents from "./_Blogs/BlogsContent";
import BlogsPageHero from "./_Blogs/BlogsPageHero";
import Spinner from "./shared/Spinner";
import { blogsData } from "../_data/BlogsData";

const BlogsSeparatePage = ({ id }: { id: string }) => {
  const dataItems = blogsData.data.find((item) => item.id === Number(id));

  return (
    <>
      <div className="relative overflow-hidden bg-home-bg">
        <div className="bg-[url('/ProjectsVectorBg.png')] bg-cover bg-top bg-no-repeat h-full w-full absolute inset-0 z-10 "></div>
        <div className="relative z-20 h-fit lg:min-h-[80vh]">
          <div className="px-4 lg:px-7 xl:px-24 2xl:px-28 pt-10 lg:pt-40">
            {dataItems && <BlogsPageHero blogsData={dataItems} />}
          </div>
        </div>
      </div>
      <div className="px-4 lg:px-7 xl:px-24 2xl:px-28">
        {dataItems && <BlogsContents blogsData={dataItems} />}
      </div>
    </>
  );
};
export default BlogsSeparatePage;

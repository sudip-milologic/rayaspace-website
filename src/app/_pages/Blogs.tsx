"use client";
import dynamic from "next/dynamic";
import { blogsData } from "../_data/BlogsData";
const ResourcesCard = dynamic(() => import("@/app/_components/ResourcesCard"));

const Blogs = () => {
  return (
    <>
      <div className="bg-white px-4 md:px-0">
        <div className="py-10 md:py-20 lg:py-40">
          <div className={` text-center pb-10 md:pb-20 lg:pb-40`}>
            <p className="lg:text-5xl text-[28px] leading-[40px] font-begum">
              Resources for You
            </p>
            <p className="lg:pb-6 pb-3 mt-6 lg:text-xl lg:leading-[23px] text-xs font-semibold text-[#455D58] uppercase">
              We ensure that our work positions you as technological leaders{" "}
              <br /> in your industry and enables your brand to and also.
            </p>
          </div>
          {/* Resources cards */}
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-center px-4 lg:px-7 xl:px-24 2xl:px-28">
            {blogsData?.data?.slice(0, 3).map((resources) => {
              const description = resources.description;
              const shortDescription =
                description && description.split(" ").length >= 16
                  ? description.split(" ").slice(0, 16).join(" ") + "..."
                  : description;
              return (
                <ResourcesCard
                  key={resources.id}
                  title={resources.label}
                  description={shortDescription}
                  imageUrl={resources?.attachment?.url}
                  link={`/blogs`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;

"use client";
import dynamic from "next/dynamic";
import { blogsData } from "../_data/BlogsData";
import { strapiApi } from "../_services/strapiApi";
import { useEffect, useState } from "react";
const ResourcesCard = dynamic(() => import("@/app/_components/ResourcesCard"));

const Blogs = () => {
  const [blogs, setBlogs] = useState<OutputData.Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const strapiBlogs = await strapiApi.fetchBlogs();

        if (strapiBlogs && strapiBlogs.length > 0) {
          const convertedBlogs = strapiBlogs.map((blog) =>
            strapiApi.convertToLegacyFormat(blog)
          );
          setBlogs(convertedBlogs);
        }
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  console.log(blogs);

  return (
    <>
      <div className="bg-white px-4 md:px-0">
        <div className="py-10 md:py-11 lg:py-20">
          <div className={` text-center pb-10 md:pb-20`}>
            <p className="lg:text-5xl text-[28px] leading-[40px] font-begum">
              Resources for You
            </p>
            <p className="lg:pb-6 pb-3 mt-6 lg:text-xl lg:leading-[23px] text-xs font-semibold text-[#455D58] uppercase">
              We ensure that our work positions you as technological leaders{" "}
              <br /> in your industry and enables your brand to and also.
            </p>
          </div>
          {loading && (
            <div className="flex justify-center items-center py-4 mb-4">
              <div className="text-sm text-gray-600">
                Loading latest blogs...
              </div>
            </div>
          )}
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-center px-4 lg:px-7 xl:px-24 2xl:px-28">
            {blogs?.slice(0, 3).map((resources) => {
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
                  link={`/blogs/${resources.id}`}
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

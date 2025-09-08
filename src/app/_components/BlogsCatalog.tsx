"use client";

import ResourcesCard from "@/app/_components/ResourcesCard";
import { blogsData, resourcesCatData } from "@/app/_data/BlogsData";
import { strapiApi } from "@/app/_services/strapiApi";
import { useEffect, useState } from "react";
import Spinner from "./shared/Spinner";

const BlogCatalog = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [featured, setFeatured] = useState<OutputData.Blog>();
  const [blogs, setBlogs] = useState<OutputData.Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const dataItems = { data: blogs };

  // Fetch blogs from Strapi
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError("");
        const strapiBlogs = await strapiApi.fetchBlogs();

        if (strapiBlogs && strapiBlogs.length > 0) {
          // Convert Strapi blogs to legacy format for compatibility
          const convertedBlogs = strapiBlogs.map((blog) =>
            strapiApi.convertToLegacyFormat(blog)
          );
          setBlogs(convertedBlogs);
        } else {
          // Fallback to static data if no Strapi data
          console.warn("No blogs found from Strapi, using static data");
        }
      } catch (err) {
        console.error("Error fetching blogs from Strapi:", err);
        setError("Failed to load blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Set featured blog
  useEffect(() => {
    if (dataItems && dataItems?.data && dataItems?.data?.length > 0) {
      const filtered = dataItems?.data.filter((item) => item.isFeatured);
      setFeatured(
        filtered && filtered.length > 0 ? filtered[0] : dataItems?.data?.[0]
      );
    }
  }, [dataItems]);

  const handleCategoryChange = (index: number, category: string) => {
    setActiveCategoryIndex(index);
    setActiveCategory(category.toLowerCase());
  };

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {resourcesCatData.map((category, index) => (
          <button
            key={category.id}
            className={`px-5 py-2 ${
              activeCategoryIndex === index
                ? "bg-[#455D58] text-white"
                : "text-neutral-500 bg-neutral-700/10"
            }  inter text-xs md:text-base font-semibold  rounded-3xl transition-colors duration-300 ease-in-out cursor-pointer`}
            onClick={() => handleCategoryChange(index, category.value)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className=" py-8 md:py-14 pb-28 lg:pb-40">
        <div
          className={` ${
            activeCategory === "all" ? " hidden md:block" : "hidden"
          }  pb-16 `}
        ></div>

        {loading && (
          <div className="flex flex-col items-center justify-center gap-2 text-center py-10">
            <div className="animate-pulse">
              <p className="text-dark-darker font-semibold text-xl md:text-2xl lg:text-3xl">
                Loading Blogs...
              </p>
            </div>
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center justify-center gap-2 text-center py-10">
            <p className="text-red-600 font-semibold text-xl md:text-2xl lg:text-3xl">
              {error}
            </p>
            <p className="text-gray-600 text-sm">Using fallback data</p>
          </div>
        )}

        {!loading &&
          dataItems &&
          dataItems?.data &&
          dataItems?.data?.length == 0 && (
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <p className="text-dark-darker font-semibold text-xl md:text-2xl lg:text-3xl">
                Blogs Not Available
              </p>
            </div>
          )}

        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-7">
          {dataItems?.data?.map((resources) => {
            const description = resources.description;
            const shortDescription =
              description && description.split(" ").length >= 16
                ? description.split(" ").slice(0, 16).join(" ") + "..."
                : description;
            return (
              <div
                key={resources.id}
                className={`bg-white rounded-3xl  ${
                  activeCategory === "all"
                    ? ""
                    : `${
                        resources?.category.toLowerCase() === activeCategory
                          ? "block"
                          : "hidden"
                      }`
                } `}
              >
                <ResourcesCard
                  title={resources.label}
                  description={shortDescription}
                  imageUrl={resources?.attachment?.url || ""}
                  link={`/blogs/${resources.id}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BlogCatalog;

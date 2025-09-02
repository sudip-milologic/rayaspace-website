"use client";

import React, { useEffect, useState } from "react";
import { blogsData, resourcesCatData } from "@/app/_data/BlogsData";
import ResourcesCard from "@/app/_components/ResourcesCard";

const BlogCatalog = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [featured, setFeatured] = useState<OutputData.Blog>();

  const dataItems = blogsData;

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

        {dataItems && dataItems?.data && dataItems?.data?.length == 0 && (
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

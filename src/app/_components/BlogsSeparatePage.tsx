"use client";
import BlogsContents from "./_Blogs/BlogsContent";
import BlogsPageHero from "./_Blogs/BlogsPageHero";
import Spinner from "./shared/Spinner";
import { blogsData } from "../_data/BlogsData";
import { strapiApi } from "../_services/strapiApi";
import { useEffect, useState } from "react";

const BlogsSeparatePage = ({ id }: { id: string }) => {
  const [blogData, setBlogData] = useState<OutputData.Blog | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError("");

        // Try to fetch from Strapi first
        const strapiBlog = await strapiApi.fetchBlogById(id);

        if (strapiBlog) {
          const convertedBlog = strapiApi.convertToLegacyFormat(strapiBlog);
          setBlogData(convertedBlog);
        }
        // If not found in Strapi, keep the static data that's already loaded
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("Failed to load latest blog data");
        // Keep static data on error
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (!blogData) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="text-center">
          <p className="text-gray-600 text-xl font-semibold">Blog not found</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative overflow-hidden bg-home-bg">
        <div className="bg-[url('/ProjectsVectorBg.png')] bg-cover bg-top bg-no-repeat h-full w-full absolute inset-0 z-10 "></div>
        <div className="relative z-20 h-fit lg:min-h-[80vh]">
          <div className="px-4 lg:px-7 xl:px-24 2xl:px-28 pt-10 lg:pt-40">
            {loading && (
              <div className="flex justify-center items-center py-4 mb-4">
                <div className="text-sm text-white">Updating content...</div>
              </div>
            )}
            <BlogsPageHero blogsData={blogData} />
          </div>
        </div>
      </div>
      <div className="px-4 lg:px-7 xl:px-24 2xl:px-28">
        {error && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-yellow-800 text-sm">
              {error} - Showing cached version
            </p>
          </div>
        )}
        <BlogsContents blogsData={blogData} />
      </div>
    </>
  );
};
export default BlogsSeparatePage;

import BlogsSeparatePage from "@/app/_components/BlogsSeparatePage";
import React from "react";

const page = async ({ params }: any) => {
  const { id } = await params;

  return <BlogsSeparatePage id={id} />;
};

export default page;

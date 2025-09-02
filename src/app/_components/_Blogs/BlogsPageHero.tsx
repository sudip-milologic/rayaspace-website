import { formatDate } from "../shared/FormatDate";
import { Calendar, Edit } from "lucide-react";
import Image from "next/image";

const BlogsPageHero = ({ blogsData }: { blogsData: OutputData.Blog }) => {
  return (
    <div className="">
      <p className="text-dark-normal text-3xl md:text-5xl xl:text-7xl font-semibold text-balance font-begum">
        {blogsData?.label}
      </p>

      {/* Time and date */}
      <div className=" pt-6 lg:pt-14">
        <div className="flex justify-start gap-5 items-center">
          {/* Date */}
          <div className="flex items-center justify-center gap-2">
            <Calendar size={18} />
            <p className="inter text-dark-normal/80 font-semibold">
              {formatDate(blogsData?.postDate)}
            </p>
          </div>

          {/* Separator */}
          <div className="h-2 w-2 bg-dark-normal/80 rounded-3xl"></div>

          {/* Writer */}
          <div className="flex items-center justify-center gap-2">
            <Edit size={18} />
            <p className="inter text-dark-normal/80 font-semibold">
              {blogsData?.author}
            </p>
          </div>
        </div>
      </div>

      <div className=" py-6 lg:py-20 h-fit">
        <div className="relative h-[250px] md:h-[400px] lg:h-[640px]  rounded-3xl">
          {blogsData?.attachment ? (
            <Image
              src={blogsData?.attachment?.url}
              alt="Blogs Image"
              fill
              className="rounded-3xl"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default BlogsPageHero;

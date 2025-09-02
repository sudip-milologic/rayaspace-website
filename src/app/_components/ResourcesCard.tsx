import Link from "next/link";
import React from "react";
import Image from "next/image";

type ResourceCardProps = {
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
};

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  imageUrl,
  link,
}) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl h-full">
      {/* Card Picture */}
      <div className="flex flex-col justify-between items-center p-4 md:p-6 gap-4 md:gap-6 h-full">
        <div className=" h-56 sm:h-44 md:h-56 w-full">
          {/* Image */}
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              width={361.33}
              height={220}
              className="h-full w-full object-contain rounded-3xl"
            />
          ) : (
            <div className="h-full w-full bg-[#d9d9d9] rounded-3xl bg-cover bg-center"></div>
          )}
        </div>
        {/* Descriptions */}
        <div className="w-full">
          {/* Title */}
          <div>
            <p className="font-semibold text-base md:text-lg lg:text-[22px] lg:leading-[32px] text-dark-normal">
              {title}
            </p>
          </div>
          {/* Description */}
          <div>
            <p className=" pt-2 md:pt-3 text-xs md:text-sm lg:text-base text-dark-normal/65 font-light ">
              {description}
            </p>
          </div>
          {/* Button */}
          <div>
            <Link href={link || "/"}>
              <button className=" mt-4 md:mt-7 text-center w-full py-3 border-2 border-[#455D58]  rounded-full text-[#455D58]  text-sm md:text-base lg:text-base font-semibold hover:bg-[#455D58]  hover:text-white hover:border-white transition-all duration-300 ease-in-out cursor-pointer">
                Read Article
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;

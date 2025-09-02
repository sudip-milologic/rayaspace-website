import React from "react";
import Image from "next/image";

const FloorPlans = () => {
  return (
    <div id="our-spaces">
      <div className="lg:pt-[120px] pt-[60px] bg-[#FAF7F2]">
        <div className="text-center lg:px-0 px-5">
          <p className="lg:pb-6 pb-3 lg:text-xl lg:leading-[23px] text-xs font-semibold text-[#455D58] uppercase">
            floor plans
          </p>
          <p className="lg:text-5xl text-[28px] leading-[40px] font-begum">
            Designed for Productivity & Comfort
          </p>
        </div>

        <div className="overflow-hidden md:grid grid-cols-2 items-center lg:py-[94px] py-[60px] lg:px-28 px-5">
          <div className="w-full">
            <p className="text-black lg:text-[32px] text-base lg:leading-[38px] lg:mb-4 mb-2 lg:font-semibold">
              1. Ground Floor
            </p>
            <p className="text-[#010A0599] lg:text-base text-sm font-begum lg:pr-24">
              {
                "The ground floor of Raya Space is designed with practicality in mind and includes Startup Room 1, the Community Room, the Founders' Room, and a restroom. Room measurements are clearly indicated on the floor plan for easy reference."
              }
            </p>
          </div>

          <div className="relative w-full h-[300px] xl:h-[512px] md:mt-0 mt-8">
            <Image
              src="/images/floors/ground-floor-top-view.png"
              alt="Ground floor top view"
              fill
              loading="lazy"
              className="floor absolute object-contain"
            />
            <Image
              src="/images/floors/ground-floor.png"
              alt="Ground floor plan"
              fill
              loading="lazy"
              className="floor absolute object-contain"
            />
          </div>
        </div>

        <div className="overflow-hidden md:grid grid-cols-2 items-center lg:gap-24 gap-10 bg-[#EFEBE54D] lg:px-28 px-5 lg:py-[94px] py-[60px]">
          <div className="relative w-full h-[300px] xl:h-[512px]">
            <Image
              src="/images/floors/first-floor-top-view.png"
              alt="First floor top view"
              fill
              loading="lazy"
              className="floor absolute object-contain"
            />
            <Image
              src="/images/floors/first-floor.png"
              alt="First floor plan"
              fill
              loading="lazy"
              className="floor absolute object-contain"
            />
          </div>
          <div className="w-full md:mt-0 mt-8">
            <p className="text-black lg:text-[32px] text-base lg:leading-[38px] lg:font-semibold lg:mb-4 mb-2">
              2. First Floor
            </p>
            <p className="text-[#010A0599] lg:text-base text-sm font-begum">
              The first floor of Raya Space is thoughtfully arranged to include
              a meeting hall, a Startup Room 2 with private balcony, an
              executive room, and a restroom. Room dimensions are clearly
              displayed on the floor plan for detailed reference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorPlans;

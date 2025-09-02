import React from "react";
import Image from "next/image";

const OurSpaces = () => {
  return (
    <div id="our-spaces">
      <div className="lg:px-28 lg:py-[120px] py-[60px] px-5">
        <div className="text-center">
          <p className="lg:text-5xl text-[28px] leading-[40px] lg:leading-[48px] font-begum">
            Your Ideal Workspace
          </p>
          <p className="lg:text-xl text-sm lg:leading-[23.48px] leading-[28px] lg:mt-6 mt-3 text-[#010A0599]">
            Whether you're an entrepreneur, freelancer, or remote worker, we
            have the perfect spot for you.
          </p>
        </div>

        <div className="lg:grid grid-cols-2 overflow-hidden items-center justify-center lg:mt-16 mt-8 gap-x-[30px]">
          <div className="relative w-full h-full">
            <Image
              src="/images/our-spaces/our-spaces-img-first.svg"
              alt=""
              width={600}
              height={600}
              loading="lazy"
              className="w-full h-full object-cover"
              placeholder="blur"
              blurDataURL="/images/our-spaces/our-spaces-img-first-lazy.jpg"
            />
            <div className="absolute bottom-10 left-10">
              <p className="text-white lg:text-base text-sm uppercase lg:leading-[18.78px] lg:mb-4 mb-2 lg:font-semibold lg:tracking-[5%]">
                co-working
              </p>
              <p className="text-white lg:text-[40px] text-[22px] lg:leading-[49px] font-begum capitalize">
                Best Choice for Co-Working Excellence
              </p>
            </div>
          </div>
          <div className="lg:grid grid-rows-2 lg:gap-y-6 gap-y-4">
            <div className="relative lg:my-0 my-4 w-full h-full">
              <Image
                src="/images/our-spaces/our-spaces-img-second.svg"
                alt=""
                width={600}
                height={300}
                loading="lazy"
                className="w-full h-full object-cover"
                placeholder="blur"
                blurDataURL="/images/our-spaces/our-spaces-img-second-lazy.jpg"
              />
              <div className="absolute bottom-10 left-10">
                <p className="text-white lg:text-base text-sm uppercase lg:leading-[18.78px] lg:mb-4 mb-2 lg:font-semibold lg:tracking-[5%]">
                  dynamic rooms
                </p>
                <p className="text-white lg:text-[40px] text-[22px] lg:leading-[49px] font-begum capitalize">
                  versatility at it's best
                </p>
              </div>
            </div>
            <div className="relative lg:mt-[31px] w-full h-full">
              <Image
                src="/images/our-spaces/our-spaces-img-third.svg"
                alt=""
                width={600}
                height={300}
                loading="lazy"
                className="w-full h-full object-cover"
                placeholder="blur"
                blurDataURL="/images/our-spaces/our-spaces-img-third-lazy.png"
              />
              <div className="absolute bottom-20 left-10">
                <p className="text-white lg:text-base text-sm uppercase lg:leading-[18.78px] lg:mb-4 mb-2 lg:font-semibold lg:tracking-[5%]">
                  green oasis
                </p>
                <p className="text-white lg:text-[40px] text-[22px] lg:leading-[49px] font-begum capitalize">
                  refreshing and calming atmosphere
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSpaces;

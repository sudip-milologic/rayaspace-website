import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about">
      <div className="relative lg:py-[120px] py-14 bg-primary">
        <div className=" z-10 lg:block hidden w-full ">
          <Image
            src="/images/vector/Vector 1.svg"
            alt=""
            className="absolute lg:top-64 h-auto"
            fill
          />
          <Image
            src="/images/vector/Vector 2.svg"
            alt=""
            fill
            className="absolute lg:top-64 -left-2 h-auto"
          />
        </div>

        <div className="lg:px-28 px-5 lg:flex items-start justify-between gap-x-[134px]">
          <p className="lg:w-1/3 lg:text-5xl text-[28px] lg:leading-[62px] leading-[40px] lg:text-left text-center text-white">
            Increasing <br />
            Flexibility to Work
          </p>
          <p className="lg:w-1/2 lg:text-base text-sm lg:mt-0 mt-6 leading-[2 px] text-white lg:text-left text-center">
            Welcome to Raya Space, your premier coworking destination in Nepal.
            Located in the vibrant heart of Kathmandu, we offer flexible
            coworking solutions at affordable prices. Elevate your work
            experience with us — the best coworking space in Nepal, tailored for
            innovation and collaboration. Explore our coworking spaces for rent,
            designed for entrepreneurs and businesses alike. Join Raya Space,
            your top choice for a coworking space in Kathmandu, Nepal. Discover
            excellence in coworking, right at your fingertips.
          </p>
        </div>

        <div className="lg:mt-20 mt-10 md:grid grid-cols-3 gap-x-12">
          <div className="md:mt-[60px] lg:w-full w-96 h-fit z-20">
            <Image
              src="/images/features/feasibility-to-work-img-first.svg"
              alt=""
              width={400}
              height={300}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="md:mt-0 my-10 md:float-none float-right z-20 lg:w-full w-96 h-fit">
            <Image
              src="/images/features/feasibility-to-work-img-second.svg"
              alt=""
              width={400}
              height={300}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="md:mt-[100px] z-20">
            <Image
              src="/images/features/feasibility-to-work-img-third.svg"
              alt=""
              width={400}
              height={300}
              className="lg:w-full w-96 h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

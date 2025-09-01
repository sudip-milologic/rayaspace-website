"use client";

import React from "react";
import Image from "next/image";

const discoverData = [
  {
    img: "/images/features/friendly-community-image.svg",
    lazyImg: "/images/features/friendly-community-image-lazy.jpg",
    title: "Friendly Community",
    description:
      "We take pride in fostering more than just a co-working space; we nurture a warm and inclusive community.",
  },
  {
    img: "/images/features/eco-friendly-image.svg",
    lazyImg: "/images/features/eco-friendly-image-lazy.jpg",
    title: "Eco-Friendly",
    description:
      "Our commitment to sustainability runs deep, and we take pride in being an eco-friendly co-working space.",
  },
  {
    img: "/images/features/everyone-invited-image.svg",
    lazyImg: "/images/features/everyone-invited-image-lazy.jpg",
    title: "Everyone’s Invited",
    description:
      "Join us at Raya, whether you’re entrepreneur, freelancers, remote workers, or sustainability enthusiasts.",
  },
];

const Discover = () => {
  return (
    <section className="bg-[#FAF7F2] lg:py-[120px] lg:px-28 px-5 py-14">
      {/* Section Heading */}
      <p className="lg:text-5xl text-[28px] leading-[40px] font-begum text-center lg:px-0 px-16">
        Discover What Sets us Apart
      </p>

      {/* Grid of Cards */}
      <div className="lg:mt-16 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
        {discoverData.map((item) => (
          <div key={item.title} className="bg-white">
            {/* Feature Image */}
            <Image
              src={item.img}
              alt={item.title}
              width={500}
              height={300}
              className="w-full h-auto"
              loading="lazy"
            />

            {/* Content */}
            <div className="lg:p-6 p-3">
              <p className="lg:text-2xl text-[22px] font-begum lg:leading-[29.38px]">
                {item.title}
              </p>
              <p className="lg:mt-4 mt-2 lg:text-base text-sm lg:leading-[28px] leading-[24px] text-[#010A0599]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Discover;

"use client";

import React from "react";
import Carousel from "./Caraousel";

interface PriceItem {
  label: string;
  amount: number | string;
}

interface PricingCardProps {
  title: string;
  description: string;
  images: {
    src: string;
    alt?: string;
    blurDataURL?: string;
  }[];
  pricing: PriceItem[];
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  images,
  pricing,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      {/* Carousel */}
      <Carousel images={images} />

      {/* Title + Description */}
      <div className="lg:p-6 p-3 border-b-[0.2px] border-[#8F9495] min-h-48">
        <p className="lg:text-[32px] text-[22px] leading-[26.93px] font-begum mt-[14px]">
          {title}
        </p>
        <p className="text-sm text-[#010A0599] mt-3">{description}</p>
      </div>

      {/* Pricing Section */}
      <div className="px-6 mt-8 lg:h-[262px] font-number">
        {pricing.map((price, index) => (
          <div
            key={index}
            className="flex relative items-center justify-between lg:mb-8 mb-4"
          >
            <p className="lg:text-base text-sm lg:leading-[28px] pr-4 bg-white z-10 text-[#444D4F]">
              {price.label}
            </p>
            <hr className="border-[0.18px] border-[#8F9495] absolute w-full z-0" />
            <p className="leading-[28px] lg:text-base text-sm pl-4 bg-white z-10">
              Rs.
              <span className="ml-1 font-medium lg:text-2xl text-xl leading-[29px] font-montserrat text-dark">
                {price.amount}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;

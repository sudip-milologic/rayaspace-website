"use client";

import React from "react";
import Image from "next/image";

const featuresData = [
  { icon: "/images/icons/wifi-icon.svg", label: "High Speed Wifi" },
  { icon: "/images/icons/efficient-desks-icon.svg", label: "Efficient Desks" },
  {
    icon: "/images/icons/ergonomics-chair-icon.svg",
    label: "Ergonomics Chair",
  },
  { icon: "/images/icons/vehicle-parking-icon.svg", label: "Vehicle Parking" },
  {
    icon: "/images/icons/unlimited-tea-coffee-icon.svg",
    label: "Unlimited Tea/Coffee",
  },
  { icon: "/images/icons/smoking-area-icon.svg", label: "Smoking Area" },
];

const Features = () => {
  return (
    <div id="features" className="md:py-8 lg:px-28 md:px-14 px-5 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-10">
        {featuresData.map((feature) => (
          <div key={feature.label} className="flex items-center gap-3 md:gap-6">
            <Image
              src={feature.icon}
              alt={feature.label}
              width={80}
              height={80}
              className="w-9 lg:w-20"
            />
            <p className="lg:text-xl text-sm lg:leading-[23.48px] leading-[16.44px]">
              {feature.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
